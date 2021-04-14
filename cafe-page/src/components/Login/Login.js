import React, {Component} from 'react';
import { Link, Route, Switch} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import "./Login.css";
import * as config from '../../config/Config';
import axios from "axios";

// export default Modal = () => {
//   return (
//     <div>
//       <p>The email address or password you entered is incorrect.</p>
//     </div>
//   )
// }

// const Auth = async (data) => {
//     await axios.post('https://my-json-server.typicode.com/corazon4815/api_test/member',data)
//       .then((result)=>{
//           sessionStorage.setItem("loginId", JSON.stringify(result.id))
//           history.push("/");
//
//
//         //shoes변경([...shoes, ...result.data]);
//         props.more변경(false);
//       })
//       .catch((result)=>{
//         props.alert변경(false);
//         //로딩중이라는 ui 안보이게
//         props.more변경(false);
//         console.log('실패 했어요')
//         console.log(result)
//       })
// }



function Login() {
    // const email = useInput("");

    return (
        <div>
            <Form>
            <Form.Group>
                <Form.Control
                  type="email"
                  className="mx-sm-3 login_input"
                  placeholder="Email"
                  required
                />
                <Form.Text className="text-muted text_align_right">
                    <a href="/forgotpw">Forgot password?</a>
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Control
                  type="password"
                  className="mx-sm-3 login_input"
                  placeholder="Password"
                  required
                />
            </Form.Group>
                <Button variant="danger" type="submit">Log In</Button>
                <Form.Text className="text-muted text_align_right">
                    New to Yolp? <a href="/signup">Sign Up</a>
                </Form.Text>
        </Form>
    </div>
    );
}
export default Login;