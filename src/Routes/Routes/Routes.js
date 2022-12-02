import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../Layout/DashbordLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashbord/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashbord/AllUsers/AllUsers";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import ManageDoctor from "../../Pages/Dashbord/ManageDoctor/ManageDoctor";
import MyAppoinment from "../../Pages/Dashbord/MyAppoinment/MyAppoinment";
import Payment from "../../Pages/Dashbord/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
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
            },
            {
                path: '/dashbord/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
]);