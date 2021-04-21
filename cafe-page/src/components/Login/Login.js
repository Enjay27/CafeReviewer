import React, {useState,useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap';
import axios from "axios";
import "components/Login/Login.css";
import {useDispatch} from "react-redux";
import * as config from 'config/Config.js';
import {open, close} from "redux/action/LoginModal.js";
import {join, forgotPw} from "redux/action/LoginDiv.js";

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {dispatch(close());}
    },[]);

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
            <div>
                <h3 className="text-danger">Log in to Yelp</h3>
                    <h6>New to Yolp?&nbsp;
                         <Link to="/signup" onClick={()=>{
                            dispatch(join());
                        }}>Sign Up</Link></h6>
                    <p>By logging in, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
            </div>

        <Form className="formWidth" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                  type="email"
                  className={"mt10 mb20"}
                  placeholder="Email"
                  value={member_id}
                  name= "member_id"
                  onChange={handleChangeEmail}
                  required
                />
                <Form.Text className="text-muted text-align-right">
                    <Link to="/signup" onClick={()=>{
                        dispatch(forgotPw());
                    }}>Forgot password?</Link>
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Control
                  type="password"
                  className={"mt10 mb20"}
                  placeholder="Password"
                  value={password}
                  name= "password"
                  onChange={handleChangePw}
                  required
                />
            </Form.Group>
                <Button block variant="danger" type="submit"><b>Log In</b></Button>
                <Form.Text className="text-muted text-align-right">
                    New to Yolp?&nbsp;
                    <Link to="/signup" onClick={()=>{
                        dispatch(join());
                    }}>Sign Up</Link>
                </Form.Text>
        </Form>
            </div>
    );
}
export default Login;