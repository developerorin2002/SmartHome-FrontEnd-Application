import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "./Home";
import ErrorPage from './ErrorPage';
import About from '../components/About';
import Shop from './Shop'
import { loadAllData } from "./Loaders";
import Cart from "./Cart";
export const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:loadAllData,
    children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/shop',
            element:<Shop></Shop>
        },{
            path:'/cart',
            element:<Cart></Cart>
        }
    ]
  }]);  