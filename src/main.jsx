import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Assignments from "./Components/Assignment/Assignments";
import Home from "./Components/Home/Home";
import "./index.css";
import About from "./Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/assignment",
        element: <Assignments></Assignments>,
        loader : ()=>{ return fetch('Assignments.json')}
      },
      {
        path:"/about",
        element:<About></About>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
