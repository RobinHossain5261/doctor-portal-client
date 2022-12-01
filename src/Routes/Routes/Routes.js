import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../Layout/DashbordLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashbord/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashbord/AllUsers/AllUsers";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import ManageDoctor from "../../Pages/Dashbord/ManageDoctor/ManageDoctor";
import MyAppoinment from "../../Pages/Dashbord/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivetRoute><DashbordLayout></DashbordLayout></PrivetRoute>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashbord/allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashbord/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashbord/managedoctors',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
        ]
    }
]);