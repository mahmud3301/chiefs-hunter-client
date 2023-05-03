/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="text-white fixed-top" expand="lg">
                <Container>
                    <lLink
                        to="/"
                        className="navbar-start nav-link fw-bold"
                    >
                        Cheaf
                    </lLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <ScrollLink
                                to="cheafs"
                                smooth={true}
                                duration={50}
                                className="nav-link"
                            >
                                Chiefs
                            </ScrollLink>
                            <Link to="/blog" className="nav-link">
                                Blog
                            </Link>
                            <ScrollLink
                                to="foods"
                                smooth={true}
                                duration={50}
                                className="nav-link"
                            >
                                Top Foods
                            </ScrollLink>
                            <ScrollLink
                                to="section"
                                smooth={true}
                                duration={50}
                                className="nav-link"
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
        </div>
    );
};

export default Header;