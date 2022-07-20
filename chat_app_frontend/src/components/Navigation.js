import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e){
    e.preventDefault();
    await logoutUser(user);
    window.location.replace('/');

  }
  return (
    <Navbar
      bg="danger"
      variant="dark"
      expand="lg"
      style={{ fontFamily: "Times new roman", fontSize: 25 }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXa2RFDRShkXH03IKgZgsWT069w_AKhsdcQ&usqp=CAU"
              style={{ width: 95, height: 85 }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link className="me-2">Login</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to="/chat">
              <Nav.Link className="ms-2">Chat</Nav.Link>
            </LinkContainer>
            {user && (
            //   <NavDropdown title={
            //     <>
            //         {user.name}
            //     </>
            // } id="basic-nav-dropdown">
            //     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            //     <NavDropdown.Item href="#action/3.2">
            //       Another action
            //     </NavDropdown.Item>
            //     <NavDropdown.Item href="#action/3.3">
            //       Something
            //     </NavDropdown.Item>
                // <NavDropdown.Item>
                  <Button variant="success" onClick={handleLogout}>Logout</Button>
                
              // </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
