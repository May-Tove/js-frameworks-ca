import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/index.jsx";
import Footer from "../footer/index.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
