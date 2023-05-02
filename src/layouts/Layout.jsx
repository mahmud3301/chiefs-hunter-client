/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className='min-vh-100'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;