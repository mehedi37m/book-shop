import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home/Home";
import Shop from "../page/Shop/Shop";
import About from "../page/About/About";
import Blog from "../page/Blog/Blog";

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
      ]
    },
  ]);

  export default router;