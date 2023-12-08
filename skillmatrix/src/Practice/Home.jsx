import { useContext } from "react";
import Navbar from "./Navbar";
import  { apiContext } from "./ApiProvider";

function Home() {
  console.log("Rendering Home content component");
  const { data } = useContext(apiContext);
  console.log(data);
  return (
    <div className="bg-black-600 h-screen">
      <h2 className="text-center mx-auto mt-64">This Is Main Home</h2>
    </div>
  );
}
export default Home;
