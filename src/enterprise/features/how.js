import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const FooterAction = () => {
  return (
    <Root className="py-5 my-5">
      <Container fluid className="py-5 my-5">
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row>
              <h4>How Oneburner help enterprises grow</h4>
              <Col lg={7}>
                <p className="mb-5">
                  Oneburner software solution helps your business by creating an
                  enabling environment for easy communication and eedbacks in
                  real time. Oneburner brings all your user and teams in a
                  single place with 99.9% uptime SLA and Data security.
                </p>
              </Col>
              <Col lg={5}>
                <p>Data protection and control</p>
                <p>Reporting and analytics</p>
                <p>
                  Use single sign-on and multi-factor authentication to secure
                  accounts
                </p>
                <p>Enterprise integration with other tools</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  color: #fff;
  background: #7837f8;

  & h4 {
    margin: auto;
    font-size: 2rem;
    font-weight: 400;
    line-height: 60px;
    text-align: center;
    margin-bottom: 2em;
  }

  & p {
    line-height: 24px;
  }
`;

export default FooterAction;
