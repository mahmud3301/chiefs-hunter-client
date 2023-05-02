/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mx-auto justify-content-center mt-5'>
            <div>
                <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="404 Error"className='mt-5' />
                <div className='mt-3'>
                    <h1>Oops! Page Not Found</h1>
                    <p>We're sorry, but the page you requested could not be found.</p>
                    <Link to="/"><Button>Back To Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;