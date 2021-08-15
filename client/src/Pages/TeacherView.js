import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useHistory
} from "react-router-dom";
import { useState } from 'react'
//import addClassForm from "../Misc/addClassForm"

function TeacherView() {
  // show beginning teacher view of existing classes, times, and codes
  const [classAddName, setClassAddName] = useState('');

  const [active, setActive] = useState(false)

  function handleClick(e) {
    return (
      <div>i was clicked</div>
    );
  }

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

  // return (
  //   <Router>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/teacherview">Home View</Link>
  //         </li>
  //         <li>
  //           <Link to="/addClass">Add Class</Link>
  //         </li>
          
  //       </ul>

  //       {/*
  //         A <Switch> looks through all its children <Route>
  //         elements and renders the first one whose path
  //         matches the current URL. Use a <Switch> any time
  //         you have multiple routes, but you want only one
  //         of them to render at a time
  //       */}
  //       <Switch>
  //         <Route exact path="/teacherview" component={TeacherView} />
  //         <Route path="/addclass" component={addClassForm} />
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}


export default TeacherView;