import { createBrowserRouter } from "react-router-dom";


import { LoginScreen } from "../components/login/LoginScreen";
import { SchoolHoursApp } from "../SchoolHoursApp";
import ErrorPage from "../components/errorPage/ErrorPage";

export const router = createBrowserRouter(
    [
        {
            path:'/login',
            element: <LoginScreen />,
            errorElement: <ErrorPage />
        },
        {
            path:'/',
            element: <SchoolHoursApp />,
            errorElement: <ErrorPage />
            // children: [

            // ]
        }
    ]
)