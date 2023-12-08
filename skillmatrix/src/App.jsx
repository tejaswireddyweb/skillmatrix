import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Practice/Layout";
import Home from "./Practice/Home";
import ApiProvider from "./Practice/ApiProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/abc" element={<Home />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
