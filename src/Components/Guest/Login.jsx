import { React, useState } from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/auth";
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    dispatch(login(email, password))
        .then((res) => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch((res) => {
          console.log(res);
          setLoading(false);
        });

  }
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
     <div className="loginComponent">
     <h1>Login</h1>
     <Form onSubmit={handleLogin}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter email" />
        </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      { loading ?
        <Button variant="primary" type="button">
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </Button>
      :
      <Button variant="primary" type="submit">
        Login
      </Button>
      }

      </Form>
      {message && (
        <div className="form-group">
          <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
            {message}
          </div>
        </div>
      )}

      <p>Go to register page <Link to={allRoute.REGISTRATION}>Register</Link></p>
     </div>
  );
}
export default Login;
