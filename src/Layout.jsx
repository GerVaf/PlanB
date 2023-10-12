import React from "react";
import Sidebar from "./pages/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

const Layout = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="flex flex-col w-5/6">
        <Header />
        <div className="h-[85%] p-10">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
