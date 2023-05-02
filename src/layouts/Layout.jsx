/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='m-0 p-0'>
            <Header/>
            <div className='min-vh-100'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;