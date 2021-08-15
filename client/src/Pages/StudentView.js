import React from "react"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";

function StudentView() {
  // show beginning student view of their existing schedule
  const [classAddCode, setClassAddCode] = useState('');
  const [classDelCode, setClassDelCode] = useState('');

  return (
    <div>
        <h1 className="App">Scheduler</h1>
        <h2 className="App">Add Or Remove Classes</h2>
        <Col xs={6}>
          <Alert variant='primary'>Add Class</Alert>
          <Form>
            <Form.Group>
              <Form.Label>Enter Class Code</Form.Label>
              <Form.Control placeholder="Enter Class Code" type="text" onChange={(e)=>{setClassAddCode(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addIngredient}>
              Submit
            </Button>
          </Form>

          <Alert variant='light' />

          <Alert variant='primary'>Delete Class</Alert>
          <Form>
            <Form.Group>
              <Form.Label>Enter Class Code</Form.Label>
              <Form.Control placeholder="Enter Class Code" type="text" onChange={(e)=>{setClassDelCode(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={deleteIngredient}>
              Submit
            </Button>
          </Form>`
        </Col>

        <DayPilotCalendar />
    </div>
  );
}

export default StudentView;