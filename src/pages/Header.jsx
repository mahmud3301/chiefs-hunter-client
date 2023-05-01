/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = true;
    const userName = "John Doe";

    const renderProfilePicture = () => {
        if (isLoggedIn) {
            return (
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{userName}</Tooltip>}
                >
                    <img
                        src="/path/to/profile-picture.png"
                        alt="Profile"
                        title={userName}
                        className="profile-picture"
                    />
                </OverlayTrigger>
            );
        } else {
            return <Link className='nav-link' to="/login">Login</Link>;
        }
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" className='text-white'>
                <Container>
                    <Link to="/" className='navbar-start nav-link fw-bold'>Cheaf</Link>
                    <Nav className="ms-auto ">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/blog">Blog</Link>
                        <div className="nav-link">{renderProfilePicture()}</div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;