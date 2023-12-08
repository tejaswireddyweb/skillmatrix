// Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
      <Sidenav />
      <Outlet />
      </div>
    </div>
  );
};

export default Layout;
