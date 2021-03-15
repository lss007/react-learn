import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { allRoute } from "./route";
import { Home, Login, Register } from "../Components/Guest";
import { Dashboard } from "../Components/Dashboard";

export default function AppRoutes() {
    return (
        <Switch>
            <Route exact path={allRoute.ROOT}>
              <Home />
            </Route>
            <Route exact path={allRoute.LOGIN}>
              <Login />
            </Route>
            <Route exact path={allRoute.REGISTRATION}>
              <Register />
            </Route>
            <Route exact path={allRoute.DASHBOARD}>
              <Dashboard />
            </Route>
        </Switch>
    );
}
