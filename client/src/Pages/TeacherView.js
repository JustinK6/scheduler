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
import addClassForm from "../Misc/addClassForm"

function TeacherView() {
  // show beginning teacher view of existing classes, times, and codes

  const [active, setActive] = useState(false)

  function handleClick(e) {
    return (
      <div>i was clicked</div>
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <Button variant="primary" onClick={() => setActive(!active)}>Add Class</Button>{' '}
        </nav>
        <div>
          {active == false && <div></div>}
          {active == true && <addClassForm />}
        </div>
      </div>
    </Router>
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