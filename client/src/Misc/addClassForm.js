import '../App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';


function addClassForm() {
  const [classname, setClassname] = useState('')
  const [code, setCode] = useState('')
  const [start_time, setStartTime] = useState('')
  const [end_time, setEndTime] = useState('')

  const GET = {
    credentials: "include",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // const addUser = (e) => {
  //   Axios.post('http://localhost:3002/api/createUser', {
  //     ID: username,
  //     pass: pass,
  //     school: school,
  //     rank: rank
  //   });
  // }

  return (
    <div class="center-screen">
      <h1 className="App">Create an Account</h1>
        <Col xs={6}>
          <Form>
            <Form.Group controlId="formClassName">
              <Form.Label>Are you a Teacher or a Student?</Form.Label>
              <Form.Control placeholder="Teacher/Student" onChange={(e)=>{setClassname(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formStartTime">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="7:30am" onChange={(e)=>{setStartTime(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formEndTime">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="8:30am" onChange={(e)=>{setEndTime(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
    </div>
  );
}

export default addClassForm;