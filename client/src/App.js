import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useHistory
} from "react-router-dom";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"


function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <div>
        <div class="center-screen">
          <h1><Link to="/login">Log In</Link></h1>
          <h1><Link to="/signup">Sign Up</Link></h1>
        </div>
    </div>
  )
}

export default App;
