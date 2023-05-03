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
import PrivateRoute from './PrivateRoute';
import ChafesCard from '../pages/Chafes/ChafesCard';
import Dishes from '../pages/Dishes';
import OurSections from '../pages/OurSections';

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
                path: "/cheafs/:id",
                element: <PrivateRoute><ChafesCardDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cheaf-server-mahmud3301.vercel.app/cheaf/${params.id}`)
            }
        ]
    },
]);

export default router;