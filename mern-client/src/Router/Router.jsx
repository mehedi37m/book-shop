import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home/Home";
import Shop from "../page/Shop/Shop";
import About from "../page/About/About";
import Blog from "../page/Blog/Blog";
import SingleBook from "../page/SingleBook/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBook from "../Dashboard/ManageBook";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../page/Signup/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/shop',
            element: <Shop></Shop>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/book/:id',
            element:<SingleBook></SingleBook>,
            loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook></UploadBook>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook></ManageBook>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks></EditBooks>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },
      ]
    },
    {
      path:"sign-up",
      element:<Signup></Signup>
    }
  ]);

  export default router;