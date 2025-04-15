import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex gap-10">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
