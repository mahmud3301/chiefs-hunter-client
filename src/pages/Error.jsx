/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mx-auto justify-content-center mt-5'>
            <div>
                <img src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="404 Error"className='mt-5' />
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