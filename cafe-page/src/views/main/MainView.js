import React, {useContext, useState, lazy, useEffect, Suspense} from 'react';
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import 'views/main/Main.css';

function MainView() {
    let loginId = sessionStorage.getItem("loginId")
  return (
    <div className="App">
        <Jumbotron className="background jumbotron-fluid">
          <Navbar>
            <Navbar.Brand className="navi-color" href="/">yolp</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navi-color" as={Link} to="/signup">Sign Up</Nav.Link>
                    <Nav.Link className="navi-color" as={Link} to="/login">Log In</Nav.Link>
                </Nav>
                {
                    loginId && <span><b> hi! {loginId} </b></span>
                }
            </Navbar.Collapse>
          </Navbar>

        </Jumbotron>
    </div>
  );
}

export default MainView;