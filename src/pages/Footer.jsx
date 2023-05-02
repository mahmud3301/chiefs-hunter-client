/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <p>
                            123 Main St, New Work City<br />
                            State, USA<br />
                            Phone: 123-456-7890<br />
                            Email: info@example.com
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Facebook</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Twitter</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-center py-2">
                <div className="container">
                    <p className="mb-0">© 2023 Chiefs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;