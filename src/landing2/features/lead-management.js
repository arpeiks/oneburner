import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";

const LeadManagement = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="order-1 order-sm-2 mb-5">
                <img
                  src="/images/leadmanagement.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col xs={12} sm={6} md={6} className="order-2 order-sm-1">
                <h2>Efficient lead management</h2>
                <p>
                  Track and manage prospective customers. Manage their notes,
                  emails, meetings, calls, contacts, and files.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default LeadManagement;
