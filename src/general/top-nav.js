import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import Button from "./button";

const TopNav = () => {
  return (
    <Root>
      <Container fluid className="py-3">
        <Row className="justify-content-center">
          <Col xl={10}>
            <Navbar expand="lg">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  height="60"
                  src="/images/logo.jpg"
                  className="mb-1 d-inline-block align-center"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto align-items-start align-items-lg-center">
                  <NavDropdown title="Product" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#home">Pricing</Nav.Link>
                  <Nav.Link href="#link">Enterprise</Nav.Link>
                  <Nav.Link href="#link">Support</Nav.Link>
                </Nav>
                <Nav className="align-items-start align-items-lg-center">
                  <Nav.Link href="#link">Contact Sales</Nav.Link>
                  <Nav.Link href="#link">Support</Nav.Link>
                  <Nav.Link>
                    <Button>Try For Free</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  && a.nav-link {
    font-weight: 400;
    color: rgba(69, 69, 69, 1);
  }

  & a button {
    margin-left: 1em;
    padding: 0.5em 2em;
    box-shadow: none !important;
  }
`;

export default TopNav;
