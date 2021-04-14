import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Button, Jumbotron, Form, FormControl} from 'react-bootstrap';
import "./Login.css";

function Login() {
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