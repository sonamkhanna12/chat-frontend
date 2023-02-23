import React, { useState } from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './login.css'
function Login() {
  const[name,setName]=useState('');
  const[password,setPassword] =useState('');
  function handleLogin(e){
    e.preventDefault();
  }
      return (
        <Container>
        <Row >
        
        <Col md={6} className="login_bg"></Col>
        <Col md={5} className="d-flex align-items-center justify-content-center 
        flex-direction-column">
        <Form style={{ width: "80%", maxWidth: 500 }} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            onChange={(e)=>setName(e.target.value)}  value={name} required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)} value={password} required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={handleLogin}>
            Submit
          </Button>
          </Form>
          </Col>
          </Row>
          </Container>
       
      );
    
}

export default Login
