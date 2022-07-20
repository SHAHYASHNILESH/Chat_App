import {React,useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import './Signup.css';


const SignUp = () => {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');

  function handleSignUp(e){
    e.preventDefault();
  
  }

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignUp}>
            <h1 className="text-center display-5 fw-bold mt-1">Create Your Account</h1>
            {/* <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Simple_bust_icon.png" style={{width:450,height:200}}/>
              <label htmlFor="image-upload" className="image-upload-label">
                  <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input type="file" id="image-upload" hidden accept="image/png,image/jpeg" onChange={validateImg}/>
            </div> */}
          <Form.Group className="m-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name} required/>
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            </Form.Group>
            <Button variant="primary" type="submit" className="m-3">
              Signup
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account?  <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup_bg"></Col>
      </Row>
    </Container>
  )
}

export default SignUp