import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/Home/Home";
import CreateBootCamp from "../pages/BootCamp/CreateBootCamp";
import PrivateRout from "../../Helper/PrivateRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/createBootCamp',
                element:<PrivateRout>
                    <CreateBootCamp></CreateBootCamp>
                </PrivateRout> 
            }
        ]
    }
])

export default router
