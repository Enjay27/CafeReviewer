import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './signup.css';
import { useForm } from 'react-hook-form';
import { Form, Button, Col } from 'react-bootstrap';

function GetDay() {
  let dayArray = [];
  for (let i = 1; i <= 31; i++) {
    dayArray.push(i);
  }
  return dayArray.map((i, index) => <option key={index}>{i}</option>);
}

function GetYear() {
  let yearArray = [];
  let thisYear = new Date().getFullYear();
  for (let i = thisYear; i > 1900; i--) {
    yearArray.push(i);
  }
  return yearArray.map((i, index) => <option key={index}>{i}</option>);
}
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log({ data });
  return (
    <div className="wrap">
      <div className="form">
        <div className="form-container">
          <div className="header">
            <h2>Sign Up for Yolp</h2>
          </div>
          <Button variant="outline-dark" block>
            Continue with Google
          </Button>

          <Form.Label className="text_align_left">
            <p>Don't worry, we never post without your permission.</p>
          </Form.Label>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  {...register('FirstName', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors.LastName && `Please fill out this field`}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  {...register('LastName', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors.LastName && `Please fill out this field`}
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Control
                placeholder="Email"
                {...register('Email', {
                  required: true,
                  pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                })}
              />
              {errors.Email &&
                `Please include an '@' in the email address.  is missing an '@' `}
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Control
                placeholder="Password"
                type="password"
                {...register('Password', {
                  required: true,
                  //Minimum 6 characters, at least one letter, one number and one special character:
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                })}
              />
            </Form.Group>

            <Form.Group controlId="formGridZipCode">
              <Form.Control placeholder="ZIP Code" />
            </Form.Group>

            <Form.Group>
              <Form.Label size="lg">Birthday</Form.Label>
              <Form.Text className="text-muted">optional</Form.Text>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="birthMonth">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="birthDay">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Day</option>
                  <GetDay />
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="birthYear">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Year</option>
                  <GetYear />
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button block variant="danger" type="submit">
              Sign Up
            </Button>
            <Form.Text className="text-muted text_align_right">
              Already on Yelp? <a href="/login">Login in</a>
            </Form.Text>
          </Form>
        </div>
      </div>
      <div className="imgWrap">
        <img src="https://picsum.photos/id/102/300/300" />
      </div>
    </div>
  );
};

export default Signup;
