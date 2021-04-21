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
            <Nav className="mr-auto">
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

            {loginId && (
              <span>
                <b> hi! {loginId} </b>
              </span>
            )}

          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/signup" component={SignupView} />
        </Switch>
      </Jumbotron>
    </div>
  );
}
export default MainView;
