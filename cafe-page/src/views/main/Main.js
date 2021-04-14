import React, { useContext, useState, lazy, useEffect, Suspense } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Jumbotron,
  Form,
  FormControl,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '././Main.css';
import LoginView from '../login/LoginView.js';
import SignupView from '../signup/SignupView';

function Main() {
  return (
    <div className="App">
      <Jumbotron className="background jumbotron-fluid">
        <Navbar>
          <Navbar.Brand className="navi-color" href="/">
            yolp
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="navi-color" as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link className="navi-color" as={Link} to="/login">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Jumbotron>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignupView} />
      </Switch>
    </div>
  );
}

export default Main;
