import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Button from "../../general/button";
import BaseRoot from "../components/ImgText";

const Collaborate = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} sm={6} md={5} className="order-1 order-sm-2 mb-5">
                <img
                  alt=""
                  className="img-fluid"
                  src="/images/collaborate.jpg"
                />
              </Col>
              <Col xs={12} sm={6} md={6} className="order-2 order-sm-1">
                <h2 className="mb-5">
                  Collaborate with your team and get more done
                </h2>
                <p>
                  Communicate effectively with Oneburner for easy collaboration,
                  team work and remote work.
                </p>
                <Button>Start Free Trial</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled(BaseRoot)`
  h2 {
    color: #462686;
    font-weight: 700;
    max-width: 440px;
  }
`;

export default Collaborate;
