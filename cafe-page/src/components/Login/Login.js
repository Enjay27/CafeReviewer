import React, {useEffect,Component, useState} from 'react';
import { Link, Route, Switch, useHistory} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import "./Login.css";
import * as config from '../../config/Config';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {open, close} from "redux/action/LoginModal.js";

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(() => {
    //    dispatch(open());
    // }, []);

    const [member_id, setMember_id] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = ({ target: { value } }) => setMember_id(value)
    const handleChangePw = ({ target: { value } }) => setPassword(value)

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 실패 테스트
        await axios.get('https://my-json-server.typicode.com/corazon4815/apitest/postㅇㄴㅇs/1')
        //await axios.get('https://my-json-server.typicode.com/corazon4815/apitest/posts/1')
        .then((result)=>{
            sessionStorage.setItem("loginId", JSON.stringify(result.data.title));
            history.push("/");
      })
      .catch((result)=>{
        dispatch(open());
        console.log('실패 했어욧!');
        console.log(result);

      })
}

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                  type="email"
                  className="mx-sm-3 login_input"
                  placeholder="Email"
                  value={member_id}
                  name= "member_id"
                  onChange={handleChangeEmail}
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
                  value={password}
                  name= "password"
                  onChange={handleChangePw}
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