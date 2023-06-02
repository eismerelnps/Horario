import { createBrowserRouter } from "react-router-dom";


import { LoginScreen } from "../components/login/LoginScreen";
import { SchoolHoursApp } from "../SchoolHoursApp";
import ErrorPage from "../components/errorPage/ErrorPage";
import { Body } from "../components/body/Body";
import { Profile } from "../components/profile/Profile";

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
            errorElement: <ErrorPage />,
             children: [
                {
                    path:'hours',
                    element: <Body />,
                    errorElement: <ErrorPage />,
                },
                {
                    path:'profile',
                    element: <Profile />,
                    errorElement: <ErrorPage />,
                }
             ]
        }
    ],
    {
        basename: '/Horario'
    }
);