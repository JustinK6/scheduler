import React, {useState, useEffect} from "react";
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';
import { useHistory } from "react-router"

function TeacherView() {
  // show beginning teacher view of existing classes, times, and codes
  const [classAddName, setClassAddName] = useState('');

  return (
    <div class="center-screen">
      <h1 className="App">Scheduler</h1>
      <h2 className="App">Add Or Remove Classes</h2>
      <Col xs={6}>
      <Alert variant='primary'>Add Class</Alert>
      <Form>
          <Form.Group>
          <Form.Label>Enter Class Name</Form.Label>
          <Form.Control placeholder="Enter Class Name" type="text" onChange={(e)=>{setClassAddName(e.target.value)}}/>
          </Form.Group>

          <Form.Group>
          <Form.Label>Enter Class Meet Times</Form.Label>
          <Form.Control placeholder="Enter Class Times" type="text" onChange={(e)=>{setClassAddName(e.target.value)}}/>
          </Form.Group>

          <Form.Group>
          <Form.Label>Enter Class Meet Days</Form.Label>
          <Form.Control placeholder="Enter Class Days (E.g M,W,F)" type="text" onChange={(e)=>{setClassAddName(e.target.value)}}/>
          </Form.Group>

          <Button variant="primary" type="submit">
          Submit
          </Button>
      </Form>
      </Col>
    </div>
  );
}

export default TeacherView;