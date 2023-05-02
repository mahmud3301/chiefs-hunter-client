/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';

const Login = () => {
    return (
        <div className='mx-auto w-25 mt-5'>
            <h1 className='text-center mb-5'>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                   Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <button className='w-100 mt-3 btn btn-outline-success' type="submit">
                    Submit
                </button>
            </Form>
            <button className='w-100 mt-4 btn btn-outline-danger'>
                <IoLogoGoogle className='mb-1'/> Login with Google</button><br />
            <button className='w-100 mt-2 btn btn-outline-secondary'><IoLogoGithub className='mb-1' /> Login with Github</button>
        </div>
    );
};

export default Login;