import React from 'react';
import './SignupView.css';
// import Main from '../main/Main.js';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Signup from '../../components/signup/Signup';

const SingupView = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">yolp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Main
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Signup />
      </div>
    </div>
  );
};

export default SingupView;
