/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white text-center'>
            <p className='mx-auto p-5'> Copyright © 2023 <Link className='text-decoration-none text-success' to="/">Cheaf</Link></p>
        </div>
    );
};

export default Footer;