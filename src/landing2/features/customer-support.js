import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";

const CustomerSupport = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="mb-5">
                <img src="/images/support.jpg" alt="" className="img-fluid" />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <h2>24/7 customer support</h2>
                <p>
                  Our team of responsible member is always available to help you
                  all day long and ready to meet your demand. Reach out to us
                  and we will always be there.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default CustomerSupport;
