import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './signup.css';
import { Form, Button, Col } from 'react-bootstrap';
const Signup = () => {
  return (
    <div class="wrap">
      <Button variant="outline-dark" block>
        Continue with Google
      </Button>

      <Form.Label className="text_align_left">
        <p>Don't worry, we never post without your permission.</p>
      </Form.Label>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          {/* <Form.Label>Address</Form.Label> */}
          <Form.Control placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          {/* <Form.Label>Address 2</Form.Label> */}
          <Form.Control placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          {/* <Form.Label>Address 2</Form.Label> */}
          <Form.Control placeholder="ZIP Code" />
        </Form.Group>
        <Form.Group>
          <Form.Label size="lg">Birthday</Form.Label>
          <Form.Text className="text-muted">optional</Form.Text>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="ZIP Code">
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

          <Form.Group as={Col} controlId="formGridState">
            {/* <Form.Label>State</Form.Label> */}
            <Form.Control as="select" defaultValue="Choose...">
              <option>Day</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            {/* <Form.Label>Zip</Form.Label> */}
            <Form.Control as="select" defaultValue="Choose...">
              <option>Year</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
              <option>1999</option>
              <option>1998</option>
              <option>1997</option>
              <option>1996</option>
              <option>1995</option>
              <option>1994</option>
              <option>1993</option>
              <option>1992</option>
              <option>1991</option>
              <option>1990</option>
              <option>1989</option>
              <option>1988</option>
              <option>1987</option>
              <option>1986</option>
              <option>1985</option>
              <option>1984</option>
              <option>1983</option>
              <option>1982</option>
              <option>1981</option>
              <option>1980</option>
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
  );
};

export default Signup;
