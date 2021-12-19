import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-2.png'
import './Menubar.css';

const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="light-pink-bg px-5">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="40"

                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/" className="pink-text">Trendy Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto menu-item">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/exploreProducts">Explore</Link>
                        </Nav.Link>
                    </Nav>

                    {!user?.email ?
                        <Nav className="menu-item">
                            <Nav.Link>
                                <Link to="/login">Login</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/register">Sign Up</Link>
                            </Nav.Link>
                        </Nav> :
                        <Nav className="menu-item">

                            <Nav.Link>
                                <Link to="/dashboard">Dashboard</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/" onClick={logout}>Logout</Link>
                            </Nav.Link>
                            <Nav.Link>

                                <Link className="text-danger fw-bolder" to="/">
                                    {user?.displayName}
                                </Link>

                            </Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;