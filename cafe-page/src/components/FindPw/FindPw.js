import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import "components/FindPw/FindPw.css";
import {useDispatch} from "react-redux";
import {account} from "redux/action/LoginDiv.js";

function FindPw() {
    const dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit = async (data) => console.log(data);

    return (
        <div>
            <div>
                <h3 className="text-danger">Forgot Password</h3>
                <p>Please enter your email address and we will send you
                   an email about how to reset your password.</p>
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                      type="email"
                      className={"mt10 mb20"}
                      placeholder="Email"
                      {...register('member_id')}
                      required
                    />
                </Form.Group>
                <Button block variant="danger" type="submit">
                    <b>Reset Password</b>
                </Button>
                <Form.Text className="text-muted text-align-right">
                    <Link to="/signup" onClick={()=>{
                        dispatch(account());
                    }}>Back to Login</Link>
                </Form.Text>
            </Form>
        </div>
    );
}
export default FindPw;