import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";

const AutomatedTask = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="order-1 order-sm-2 mb-5">
                <img src="/images/taskline.jpg" alt="" className="img-fluid" />
              </Col>
              <Col xs={12} sm={6} md={6} className="order-2 order-sm-1">
                <h2>Automated task timeline</h2>
                <p>
                  View dates, projects, calendar, sprint and more with
                  reliability.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default AutomatedTask;
