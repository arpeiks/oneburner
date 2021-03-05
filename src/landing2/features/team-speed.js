import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";

const TeamSpeed = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="mb-5">
                <img src="/images/teamspeed.jpg" alt="" className="img-fluid" />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <h2>Bring your team up to speed</h2>
                <p>
                  Collaborate on project from start to finish, see information
                  at a glance, add comment, attachment and more with Oneburner.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default TeamSpeed;
