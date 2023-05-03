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
import ChafesCardDetails from '../pages/Chafes/ChafesCardDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/cheafs",
                element: <Home />
            },
            {
                path: "/cheafs/:id",
                element: <ChafesCardDetails/>,
                loader: ({ params }) => fetch(`http://localhost:7000/cheaf/${params.id}`)
            }
        ]
    },
]);

export default router;