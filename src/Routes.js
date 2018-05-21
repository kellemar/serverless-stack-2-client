import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import AppliedRoute from "./components/AppliedRoute";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) => 
    <Switch>
        <AppliedRoute path="/" exact component={Home}  props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
        <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
        <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
        <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
        <AppliedRoute component={NotFound} />
    </Switch>;
