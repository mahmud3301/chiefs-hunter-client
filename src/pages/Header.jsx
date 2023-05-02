/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='text-white'>
                <Container>
                    <Link to="/" className='navbar-start nav-link fw-bold'>Cheaf</Link>
                    <Nav className="ms-auto ">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/blog">Blog</Link>
                        <Link className='ms-2' to="/login"><Button className='btn btn-success'>Login</Button></Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;