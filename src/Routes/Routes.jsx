import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ServicesDetails from "../pages/servicesDetails/ServicesDetails";
import Register from "../pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ClientPackage from "../pages/ClientPackage/ClientPackage";
import PackagePrivatRoute from "../packagePrivateRoute/PackagePrivatRoute";
import Blogs from "../pages/Blogs/Blogs";
import BlogsDetails from "../Components/BlogsDetails/BlogsDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import Privacy from "../pages/Privacy/Privacy";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch("/services.json")
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/serviceDetails/:Id",
                element:<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader:() => fetch("/services.json")
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/clientPackage",
                element:<PackagePrivatRoute><ClientPackage></ClientPackage></PackagePrivatRoute>
            },
            {
                path:"/blogs",
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
                loader:() => fetch("/blogs.json")
            },
            {
                path:"/blogsDetails/:Id",
                element:<PrivateRoute><BlogsDetails></BlogsDetails></PrivateRoute>,
                loader:() => fetch("/blogs.json")
            },
            {
                path:"/about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/privacy",
                element:<Privacy></Privacy>
            },
            {
                path:"/terms",
                element:<TermsAndCondition></TermsAndCondition>
            }
        ]
    }
])

export default Routes;