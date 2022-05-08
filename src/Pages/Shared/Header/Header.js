import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <div className='header-logo'>
                <Link to="/home">SpiceKart</Link>
            </div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-3'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='me-auto'>
                                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user && <>
                                        <Nav.Link as={Link} to='/manageInventory'>Manage products</Nav.Link>
                                        <Nav.Link as={Link} to="/addProduct">Add products</Nav.Link>
                                        <Nav.Link as={Link} to="/myProducts">My products</Nav.Link>
                                    </>
                                }
                                {
                                    user
                                        ?
                                        <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                                        :
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;