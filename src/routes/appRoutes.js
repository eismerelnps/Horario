import { createBrowserRouter } from "react-router-dom";


import { LoginScreen } from "../components/login/LoginScreen";
import { SchoolHoursApp } from "../SchoolHoursApp";

export const router = createBrowserRouter(
    [
        {
            path:'/login',
            element: <LoginScreen />,
        },
        {
            path:'/',
            element: <SchoolHoursApp />,
            // children: [

            // ]
        }
    ]
)