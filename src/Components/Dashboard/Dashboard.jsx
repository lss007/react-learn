import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Label, Control, Text, Group } from 'react-bootstrap';
import '../../Assets/css/Guest.css';
import { allRoute } from "../../Router/route";
import {Link, useHistory, Redirect} from 'react-router-dom';
import { logout } from "../../Actions/actionAuth";



function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
      dispatch(logout());
      history.push("/login");
    };
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
     <div className="homeComponent">
       <h2>Dashboard Page</h2>
       <p>Logout from Dashboard <Link onClick={logOut}>Logout</Link></p>
     </div>
  );
}
export default Dashboard;
