import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home_Page/Home/Home";
import Application from "../Components/Application_page/Application/Application";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/application',
                element:<Application></Application>
            },
        ]
    },
]);