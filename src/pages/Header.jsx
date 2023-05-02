/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const renderTooltip = () => (
        <Tooltip id="tooltip">
            {user.name}
        </Tooltip>
    );

    return (
        <div>
            <Navbar bg="dark" variant="dark" className='text-white'>
                <Container>
                    <Link to="/" className='navbar-start nav-link fw-bold'>Cheaf</Link>
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/blog">Blog</Link>
                        <Nav>
                            {user && (
                                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                    <img src={user.photoURL} alt="" className="rounded-circle" style={{ width: '32px', height: '32px', marginRight: '8px' }} />
                                </OverlayTrigger>
                            )}
                            {user ? (
                                <Button variant="success" onClick={handleLogOut}>Logout</Button>
                            ) : (
                                <Link to="/login">
                                    <Button variant="success">Login</Button>
                                </Link>
                            )}
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;