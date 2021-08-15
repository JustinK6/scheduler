import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const addUser = (e) => {
    Axios.post('http://localhost:3001/api/createUser', {
      ID: email,
      pass: pass
    });
  }

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

        <Alert variant='light' />

        <Alert variant='primary'>Create Account</Alert>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addUser}>
              Submit
            </Button>
          </Form>
        
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
