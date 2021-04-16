import React, {Component} from 'react';
import "./LoginView.css";
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import MainView from "../main/MainView.js";
import {Link, Route} from "react-router-dom";
import Login from "../../components/Login/Login.js"
import Modal from "../../components/Login/Login.js"
import {useSelector, useDispatch} from "react-redux";
import {open} from "../../redux/action/LoginModal.js";
import LoginModal from "../../components/LoginModal/LoginModal";
import '../../css/common.scss';


function LoginView() {
    const loginModal = useSelector((store) => store.loginModal);

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
          loginModal && <LoginModal/>


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
