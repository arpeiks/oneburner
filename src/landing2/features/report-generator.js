import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";

const ReportGenerator = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="mb-5">
                <img
                  src="/images/reportgenerator.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <h2>Timeless report generator</h2>
                <p>
                  You can generate quick report of activities of all that has to
                  do with the daily running of your business and teams.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default ReportGenerator;
