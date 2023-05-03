/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const { loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all the fields");
            return;
        }
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='mx-auto w-25 mt-5'>
            <br /><br />
            <h1 className='text-center mb-5'>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                {error && <p>{error}</p>}

                <Form.Text className="text-muted">
                    Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <button className='w-100 mt-3 btn btn-outline-success' type="submit" onClick={handleLogin}>
                    Submit
                </button>
            </Form>

            <button className='w-100 mt-4 btn btn-outline-danger' onClick={handleGoogleLogin}>
                <IoLogoGoogle className='mb-1' /> Login with Google
            </button><br />

            <button className='w-100 mt-2 btn btn-outline-secondary' onClick={handleGithubLogin}>
                <IoLogoGithub className='mb-1' /> Login with Github
            </button>
        </div>
    );
};

export default Login;