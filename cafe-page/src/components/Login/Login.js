import React, {useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Button, Form} from 'react-bootstrap';
import "components/Login/Login.css";
import {useDispatch} from "react-redux";
import {open, close} from "redux/action/LoginModal.js";
import {join, forgotPw} from "redux/action/LoginDiv.js";
import {UseAxios} from "components/Common/UseAxios.js";

export const Logout = () => {
    sessionStorage.removeItem("loginId");
}

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    useEffect(() => {
        return () => {dispatch(close());}
    },[]);

    const onSubmit = async (data) => {
        try {
            const payload = await UseAxios("https://my-json-server.typicode.com/corazon4815/apitest/posts/1");

            //if(payload.data.titleeee){ //로그인 실패
            if(payload){//로그인 성공
                sessionStorage.setItem("loginId", JSON.stringify(payload.data.title));
                history.push("/");
            } else{
                dispatch(open());
                console.log('아이디, 비번이 틀렸어욧!!');
            }
        }catch (e){
                console.log('서버통신에 실패했어욧!!');
        }
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

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Control
                  type="email"
                  className={"mt10 mb20"}
                  placeholder="Email"
                  {...register('member_id')}
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
                  {...register('password')}
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