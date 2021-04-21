import React from 'react';
import 'css/common.scss';
import 'views/signup/SignupView.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {useSelector} from "react-redux";
import Login from "components/Login/Login.js";
import FindPw from "components/FindPw/FindPw.js";
import LoginModal from "components/LoginModal/LoginModal.js";
import Signup from "components/signup/Signup.js";

const SingupView = () => {
    const loginModal = useSelector((store) => store.loginModal);
    const loginDiv = useSelector((store) => store.loginDiv);
    console.log(loginDiv);

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

      {
        loginModal && <LoginModal/>
      }

      <div className="container">
        <div className="signUp-form">
            <div className="form-container">
                {(() => {
                          if (loginDiv === "login") return <Login/>;
                          if (loginDiv === "signUp") return <Signup/>;
                          if (loginDiv === "findPw") return <FindPw/>;
                })()}
            </div>
         </div>
         <div className="imgWrap">
            <img src="https://picsum.photos/id/102/300/300" />
         </div>
      </div>
    </div>
  );
};
export default SingupView;
