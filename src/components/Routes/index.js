import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Sessions/Login";
import Register from "../Sessions/Register";
import Users from "../Users/index";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default Routes;
