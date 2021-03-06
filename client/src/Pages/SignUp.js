import '../App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import {Form, Alert, Col, Row, Button, ListGroup} from 'react-bootstrap';


function SignUp() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [school, setSchool] = useState('');
  const [rank, setRank] = useState('');

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };


  const GET = {
    credentials: "include",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const addUser = (e) => {
    Axios.post('http://localhost:3001/api/createUser', {
      user: username,
      pass: pass,
      school: school,
      rank: rank
    });
  }

  return (
    <div class="center-screen">
      <h1 className="App">Create an Account</h1>
        <Col xs={6}>
            <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <div
            style={{
              height: "60px",
              width: "60px",
              border: "1px dashed black"
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
              ref={uploadedImage}
              style={{
                width: "100%",
                height: "100%",
                position: "acsolute"
              }}
            />
          </div>
          Click to upload Image
        </div>
          <Form>
            <Form.Group controlId="formRank">
              <Form.Label>Are you a Teacher or a Student?</Form.Label>
              <Form.Control placeholder="Teacher/Student" onChange={(e)=>{setRank(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formSchool">
              <Form.Label>School</Form.Label>
              <Form.Control placeholder="Purdue" onChange={(e)=>{setSchool(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addUser}>
              Submit
            </Button>
          </Form>
        </Col>
    </div>
  );
}

export default SignUp;