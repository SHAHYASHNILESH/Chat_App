import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" style={{fontFamily:'Calibri',fontSize:25}}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="https://play-lh.googleusercontent.com/zJAFXJXmvGVA0CffpAXS6iW6P9m093Ln5JRLupbxx6BjSqVaaNUz0S8Cj6KQSPc08oeI=s200" style={{width:95,height:85}} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link className="me-3">LOGIN</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link className="ms-3">CHAT</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
