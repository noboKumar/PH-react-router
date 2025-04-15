import React from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigation } from "react-router";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <NavBar></NavBar>
      <div className="flex gap-10">
        <SideBar></SideBar>
        {
          isNavigating && <h1 className="text-2xl">Loading...</h1>
        }
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
