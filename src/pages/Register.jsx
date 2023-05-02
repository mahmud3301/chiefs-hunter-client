/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleRegister = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const handleGithubRegister = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <div className='mx-auto w-25 mt-5'>
                <h1 className='text-center mb-5'>Please Register</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter photo URL" />
                    </Form.Group>

                    <Form.Text className="text-muted">
                        Already have an account? <Link to="/login">Login</Link>
                    </Form.Text>

                    <button className='w-100 mt-3 btn btn-outline-success' type="submit">
                        Submit
                    </button>
                </Form>

                <button className='w-100 mt-4 btn btn-outline-danger' onClick={handleGoogleRegister}>
                    <IoLogoGoogle className='mb-1'/> Register with Google
                </button><br />

                <button className='w-100 mt-2 btn btn-outline-secondary' onClick={handleGithubRegister}>
                    <IoLogoGithub className='mb-1' /> Register with Github
                </button>
            </div>
        </div>
    );
};

export default Register;