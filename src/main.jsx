import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "../routes";
import App from "./app";

const router = createBrowserRouter(routes)
const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <RouterProvider router={router}/>
);
