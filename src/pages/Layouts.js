import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Layouts.css';  // One directory up
const Layouts = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" class="container-fluid">
        <Container class="separate">
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Categories">Categories</Nav.Link> {/* lowercase */}
              <Nav.Link as={Link} to="/about us">About Us</Nav.Link> {/* lowercase */}
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Our Blog</Nav.Link> {/* lowercase */}
              <Nav.Link as={Link} to="/">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet /> {/* This is where the nested route content will render */}
      </Container>
    </div>
  );
}

export default Layouts;
