import React, {useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import "views/login/LoginView.css";
import 'css/common.scss';
import Login from "components/Login/Login.js"
import FindPw from "components/FindPw/FindPw.js"
import LoginModal from "components/LoginModal/LoginModal.js";
import {account} from "redux/action/LoginDiv.js";
import Signup from "components/signup/Signup.js";

function LoginView() {
    const dispatch = useDispatch();
    const loginModal = useSelector((store) => store.loginModal);
    const loginDiv = useSelector((store) => store.loginDiv);
    console.log(loginDiv);

    useEffect(() => {
       dispatch(account());
    }, []);

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

         <div className="wrapper">
             <div className="container" style={{padding : "0px"}}>
                 <div className="login_wrapper">
                     {(() => {
                          if (loginDiv === "login") return <Login/>;
                          if (loginDiv === "signUp") return (<Signup/>);
                          if (loginDiv === "findPw") return <FindPw/>;
                     })()}
                </div>
            </div>
        </div>
       </div>
    );
}
export default LoginView;
