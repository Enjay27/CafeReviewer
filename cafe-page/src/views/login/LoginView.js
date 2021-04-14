import React, {Component} from 'react';
import "./LoginView.css";
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import Main from "../main/Main.js";
import {Link, Route} from "react-router-dom";
import Login from "../../components/Login/Login.js"
import Modal from "../../components/Login/Login.js"


function LoginView() {
    return (

        <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">yolp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Main</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>

            {
          alert === true
          ? (<div className="my-alert2">
              <Modal/>
            </div>)
          : null
        }

         <div className={"wrapper"}>
             <div className={"container"} style={{padding : "0px"}}>
                 <div className={"login_wrapper"}>
                    <Login/>
                </div>
            </div>
        </div>
            </div>
    );
}
export default LoginView;
