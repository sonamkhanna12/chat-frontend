import React, { useState } from 'react'
import {Form,Button,Col,Row,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css';
function Signup() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    function handleSign(e){
        e.preventDefault();
    }
  return (
    <Container>
    <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSign}>
                <h1 className="text-center">Create account</h1>
                <div className="signup-profile-pic__container">
                    <img srcn className="signup-profile-pic" />
                    <label htmlFor="image-upload" className="image-upload-label">
                        <i className="fas fa-plus-circle add-picture-icon"></i>
                    </label>
                    <input type="file" id="image-upload" hidden accept="image/png, image/jpeg"/>
                </div>
                <p className="alert alert-danger"></p>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name"
                     onChange={(e)=>setName(e.target.value) } value={name} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        onChange={(e)=>setEmail(e.target.value) }value={email} required/>
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value) }value={password}required/>
                </Form.Group>
                <Button variant="primary" type="submit">  Signup
                </Button>
                <div className="py-4">
                    <p className="text-center">
                        Already have an account ? <Link to="/login">Login</Link>
                    </p>
                </div>
            </Form>
        </Col>
        <Col md={5} className="signup_bg"></Col>
    </Row>
</Container>
  )
}

export default Signup
