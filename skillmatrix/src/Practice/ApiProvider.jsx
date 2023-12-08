import axios from "axios";
import { Children, createContext, useContext, useEffect, useReducer } from "react";

const url = "https://course-api.com/react-store-products";

const action = {
  FETCH_INIT: "FetchInit",
  FETCH_SUCCESS: "FetchSuccess",
  FETCH_FAILURE: "FetchFailur",
  FETCH_BY_CATEGORY: "fetchByCategory"
};
const initialState = {
  data: [],
  loading: false,
  error: null,
  filter:[]

};

function reducer(state, action) {
  switch (action.type) {
    case "FetchInit":
      return { ...state, loading: true, error: null };
    case "FetchSuccess":
      return { ...state, loading: false, data: action.payload };
    case "FetchFailur":
      return { ...state, loading: false, error: action.payload };
    case "fetchByCategory":
        const temp = state.data.filter(elem.category==="bedroom");
        return {...state,filter:temp}
    default:
        return state;
    }
}
export const apiContext = createContext();

export default function ApiProvider({children}) {
  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    const FetchData = async () => {
      dispatch({ type: action.FETCH_INIT });
      try {
        const response = await axios(url);
        const test = await response.data
        //console.log(state.data);
        dispatch({ type: action.FETCH_SUCCESS, payload: test });
      } catch (error) {
        dispatch({ type: action.FETCH_FAILURE, payload: error.message });
      }
    };
    FetchData();

  }, []);

  function fetchbyCategory(){
    dispatch({ type: action.FETCH_INIT });
  }

  
    return (<apiContext.Provider value={state} >
        {children}
    </apiContext.Provider>)
}

