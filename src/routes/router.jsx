/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home';
import Layout from '../layouts/Layout';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Blog from '../pages/Blog';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
        ]
    },
]);

export default router;