import React from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";

function Login() {
  return (
     <div className="loginComponent">
     <h1>Login</h1>
     <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>

      <p>Go to register page <Link to={allRoute.REGISTRATION}>Register</Link></p>
     </div>
  );
}
export default Login;