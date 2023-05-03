/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const renderTooltip = () => {
        return <Tooltip id="tooltip">{user.displayName}</Tooltip>;
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="text-white fixed-top">
                <Container>
                    <Link to="/" className="navbar-start nav-link fw-bold">
                        Cheaf
                    </Link>
                    <Nav className="mx-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/blog">
                            Blog
                        </Link>
                    </Nav>
                    <Nav className='navbar-end'>
                        {user && (
                            <OverlayTrigger
                                placement="bottom"
                                overlay={renderTooltip()}
                                show={showTooltip}
                            >
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    className="rounded-circle mt-1"
                                    style={{ width: '32px', height: '32px', marginRight: '8px' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </OverlayTrigger>
                        )}
                        {user ? (
                            <Button variant="outline-success" onClick={handleLogOut}>
                                Logout
                            </Button>
                        ) : (
                            <Link to="/login">
                                <Button variant="outline-success">Login</Button>
                            </Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
