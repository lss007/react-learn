import { React, useState } from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/auth";
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    dispatch(register(name, email, password))
        .then((res) => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch((res) => {
          console.log(res);
        });

  }
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
     <div className="loginComponent">
     <h1>Register</h1>
     <Form onSubmit={handleRegister}>
       <Form.Group controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
       </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" value={repPassword} onChange={(e)=>setRepPassword(e.target.value)} placeholder="Enter Confirm Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {message && (
          <div className="form-group">
            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              {message}
            </div>
          </div>
        )}
      <p>Go to login page <Link to={allRoute.LOGIN}>Login</Link></p>
     </div>
  );
}
export default Register;
