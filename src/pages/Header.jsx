/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useEffect } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);

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

    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location]);

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="text-white fixed-top" expand="lg">
                <Container>
                    <Link
                        to="/"
                        className="navbar-start nav-link fw-bold"
                    >
                        Cheaf
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className={`nav-link ${activeRoute === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                            <ScrollLink
                                to="cheafs"
                                smooth={true}
                                duration={50}
                                className={`nav-link ${activeRoute === '/' ? 'active' : ''}`}
                            >
                                Chiefs
                            </ScrollLink>
                            <Link to="/blog" className={`nav-link ${activeRoute === '/blog' ? 'active' : ''}`}>
                                Blog
                            </Link>
                            <ScrollLink
                                to="foods"
                                smooth={true}
                                duration={50}
                                className={`nav-link ${activeRoute === '/' ? 'active' : ''}`}
                            >
                                Top Foods
                            </ScrollLink>
                            <ScrollLink
                                to="section"
                                smooth={true}
                                duration={50}
                                className={`nav-link ${activeRoute === '/' ? 'active' : ''}`}
                            >
                                Sections
                            </ScrollLink>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <style>
                {`
                .nav-link.active {
                    animation: bounce 0.5s;
                }
                
                @keyframes bounce {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                `}
            </style>
        </div>
    );
};

export default Header;
