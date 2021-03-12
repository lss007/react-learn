import React from 'react';
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";
import {Link} from 'react-router-dom';


function Login() {
  return (
     <div className="homeComponent">
       <h2>React Learn App</h2>
       <p>Started on 12 March, 2021</p>
       <p>Go to register page <Link to={allRoute.REGISTRATION}>Register</Link></p>
       <p>Go to login page <Link to={allRoute.LOGIN}>Login</Link></p>
     </div>
  );
}
export default Login;
