import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css'
function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
    
        <Navbar.Brand href="#home"><a href='#Home.js'>My Chat App</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to='login'>
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to='Chat'>
        <Nav.Link>Chat</Nav.Link>
      </LinkContainer>
            <LinkContainer to='Signup'>
        <Nav.Link>Signup</Nav.Link>
      </LinkContainer>
      <LinkContainer to='logout'>
        <Nav.Link>logout</Nav.Link>
      </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;