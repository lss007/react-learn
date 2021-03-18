import { React, useState } from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { register } from "../../Redux/Actions/auth";
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";
import { doRegister } from '../../Redux/Actions/doRegister'

function Register(props) {
  const [name, setName] = useState('');
  const { register, handleSubmit, errors  } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setSuccessful(false);
    setLoading(true);
    doRegister(data).then(res => {
      console.log(res);
        props.history.push("/dashboard");
        window.location.reload();
    }).catch(err => {
      setErrorMessage('unexpected_error');
      console.log(err);
    })
  }
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
     <div className="loginComponent">
     <h1>Register</h1>
     <Form onSubmit={handleSubmit(onSubmit)}>
       <Form.Group>
         <Form.Label>Name</Form.Label>
         <Form.Control
         type="text"
         id="name"
         name="name"
         ref={register({
           required: true
         })}
         placeholder="Enter Name" />
       </Form.Group>
       {errors.name && errors.name.type === "required" && (
          <span role="alert">Name Required.</span>
       )}

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          id="email"
          name="email"
          ref={register({
            required: true
          })}
          placeholder="Enter Email" />
        </Form.Group>
        {errors.email && errors.email.type === "required" && (
           <span role="alert">Email Required.</span>
        )}

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          id="password"
          name="password"
          ref={register({
            required: true
          })}
          placeholder="Enter Password" />
        </Form.Group>
        {errors.password && errors.password.type === "required" && (
           <span role="alert">Password Required.</span>
        )}

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          type="password"
          id="cpassword"
          name="cpassword"
          ref={register({
            required: true
          })}
          placeholder="Enter Confirm Password" />
        </Form.Group>
        {errors.cpassword && errors.cpassword.type === "required" && (
           <span role="alert">Confirm Password Required.</span>
        )}
        <Form.Group>
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
          Register
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
      <p>Go to login page <Link to={allRoute.LOGIN}>Login</Link></p>
     </div>
  );
}
export default Register;
