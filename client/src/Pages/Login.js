import React, {useState, useEffect} from "react";
import Axios from 'axios';
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';
import { useHistory } from "react-router"

function Login() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [rank, setRank] = useState('');

  let history = useHistory();

  const findUser = (e) => {
    Axios.get('http://localhost:3002/api/getUser', {
      params: {
        user: username,
        Pass: pass, 
        Rank: rank
      }
    }).then((res) => {
      if(res.data && res.data.ID){
        let u = {
          UserID: res.data.ID,
          Email: res.data.Email,
          Password: res.data.Pass
        };
        window.localStorage.setItem('user', JSON.stringify(u));
      };
      
      if(res.data && res.data.ing[0]) {
        window.localStorage.setItem('userIng', JSON.stringify(res.data.ing));
      } else {
        window.localStorage.setItem('userIng', JSON.stringify([]));
      }
    })
  };

  return (
    <div class="center-screen">
      <h1 className="App">Log In</h1>
        <Col xs={6}>
            <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
          }}
        >
        </div>
          <Form>
            <Form.Group controlId="formRank">
              <Form.Label>Student or Teacher View?</Form.Label>
              <Form.Control placeholder="Student/Teacher" onChange={(e)=>{setRank(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}} />
            </Form.Group>
            <button onClick={() =>{history.push("/teacherview")}}>
              Submit
            </button>
          </Form>
        </Col>
    </div>
  );
}

export default Login;