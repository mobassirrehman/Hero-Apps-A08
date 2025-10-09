import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
       Component:Home
      },
      {
        path: "/apps",
        Component:Apps
      },
    
     
    ],
  },
]);