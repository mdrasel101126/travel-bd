import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          <img
            alt=""
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-top bg-white"
          />{" "}
          Travel BD
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav cl"
          className="text-bg-warning"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="text-decoration-none text-white me-4">
              Home
            </Link>
            <Link className="text-decoration-none text-white me-4">About</Link>
          </Nav>
          <Nav>
            <Link className="text-decoration-none text-white me-4" to="/login">
              Login
            </Link>
            <Link
              className="text-decoration-none text-white me-4"
              to="/register"
            >
              Register
            </Link>
            <Button variant="light">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
