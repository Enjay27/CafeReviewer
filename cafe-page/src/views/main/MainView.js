import React from 'react';
import {
  Navbar,
  Nav,
  Jumbotron
} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'views/main/Main.css';
import {useDispatch} from "react-redux";
import SignupView from 'views/signup/SignupView.js';
import {join, account} from "redux/action/LoginDiv.js";
import {Logout} from "components/Login/Login";

function MainView() {
  let loginId = sessionStorage.getItem('loginId');
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Jumbotron className="background jumbotron-fluid">
        <Navbar>
          <Navbar.Brand className="navi-color" as={Link} to="/">
            yolp
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            {
              loginId === null ? (
               //로그아웃 상태
               <Nav className="mr-auto navi-color">
                  <Nav.Link className="navi-color" as={Link} to="/signup" onClick={()=>{
                      dispatch(join());
                  }}>
                    Sign Up
                  </Nav.Link>
                  <Nav.Link className="navi-color" as={Link} to="/signup" onClick={()=>{
                      dispatch(account());
                  }}>
                    Log In
                  </Nav.Link>
                </Nav>
                )
               :
               //로그인 상태
               (
               <Nav className="mr-auto navi-color">
                  <Nav.Link className="navi-color" href="/" onClick={Logout}>
                    Log Out
                  </Nav.Link>
               </Nav>
               )
            }
          </Navbar.Collapse>

          {
            loginId && <h5> hi! {loginId} </h5>
          }

        </Navbar>
      </Jumbotron>
    </div>
  );
}
export default MainView;
