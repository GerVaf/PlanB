import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Inbox from "../pages/Inbox";
import MyBlogs from "../pages/MyBlogs";
import Program from "../pages/Program";
import Agenda from "../pages/Agenda";
import Setting from "../pages/Setting";
import CreateBlog from "../pages/CreateBlog";
import BlogEdit from "../pages/BlogEdit";
import BlogView from "../pages/BlogView";
import Login from "../pages/Login";
import RouteGuard from "./RouteGuard";

const Path = () => {
  const routes = [
    {
      path: "inbox",
      element: <Inbox />,
    },
    {
      path: "list",
      element: <List />,
    },
    {
      path: "create",
      element: <CreateBlog />,
    },
    {
      path: "edit",
      element: <BlogEdit />,
    },
    {
      path: "view",
      element: <BlogView />,
    },
    {
      path: "myBlogs",
      element: <MyBlogs />,
    },
    {
      path: "program",
      element: <Program />,
    },
    {
      path: "agenda",
      element: <Agenda />,
    },
    {
      path: "setting",
      element: <Setting />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <RouteGuard>
              <Layout />
            // </RouteGuard>
          }
        >
          <Route index element={<Dashboard />} />
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
