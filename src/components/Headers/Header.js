import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">MotoWorld</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

                        <Nav.Link as={Link} to="/addservice">Add Services</Nav.Link>

                        <Nav.Link as={Link} to="/manageservices">Manage Services</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>

                        <Nav.Link as={Link} to="/about">About</Nav.Link>


                        <Navbar.Text>
                            {
                                user?.email ?
                                    <span className=' flex-sm-wrap'>
                                        Signed in as: <Link className='text-info me-2' to="/login">{user?.displayName}</Link>
                                        <img className="user-img" src={user.photoURL} alt="user img" />
                                        <Button variant='danger ' onClick={logout}>Logout</Button>
                                    </span> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;