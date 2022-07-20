import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" style={{fontFamily:'Times new roman',fontSize:25}}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXa2RFDRShkXH03IKgZgsWT069w_AKhsdcQ&usqp=CAU" style={{width:95,height:85}} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link className="me-2">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link className="ms-2">Chat</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
