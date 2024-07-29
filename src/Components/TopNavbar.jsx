import React from "react";
import "../assets/css/custom.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";
import Logo from "../assets/images/ctp.png";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="navbar">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <Link to="/">
            <img
              alt="Logo"
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
          <Link to="/" className="brand-name ms-2">
            Furniture
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <i className="fa fa-search"></i>
              </Button>
            </Form>
          </Nav>
          <Nav className="d-flex mt-sm-4 mt-4 mt-md-0 align-items-center">
            <Link to="/cartlist" className="nav-link">
              <i className="fa fs-4 fa-shopping-cart"></i>
              <sup>
                <span className="badge text-white bg-danger">4</span>
              </sup>
            </Link>
            <Link to="/favorate" className="nav-link">
              <i className="fa fs-4 fa-heart"></i>
              <sup>
                <span className="badge text-white bg-danger">0</span>
              </sup>
            </Link>
            <Link to="/notification" className="nav-link">
              <i className="fa fs-4 fa-bell"></i>
              <sup>
                <span className="badge text-white bg-danger">8</span>
              </sup>
            </Link>
            <Link to="/login" className="nav-link">
              <i className="fa fs-4 fa-share"></i>
            </Link>
            <Link to="/profile" className="nav-link">
              <i className="fa fs-4 fa-address-card"></i>
            </Link>
          </Nav>
          <div className="p-4" id="google_translate_element"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
