import React from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";

function Register() {
  return (
     <div className="loginComponent">
     <h1>Register</h1>
     <Form>
     <Form.Group controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="text" placeholder="Enter Name" />
     </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Confirm Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <p>Go to login page <Link to={allRoute.LOGIN}>Login</Link></p>
     </div>
  );
}
export default Register;
