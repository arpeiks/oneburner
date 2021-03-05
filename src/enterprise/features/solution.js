import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Button from "../../general/button";

const Testimony = () => {
  return (
    <Root>
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col xl={10} className="py-5">
            <h1 className="mb-4">
              Modern solution buily for your enterprise growth
            </h1>
            <p className="mb-3">
              Centralize your team in a secure, flexible and managed platform
            </p>
            <Button>Request a demo</Button>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(/images/solution.jpg);

  @media (min-width: 950px) {
    padding-top: 5em;
    padding-bottom: 5em;
    background-size: contain;
  }

  h1 {
    margin: auto;
    color: #462686;
    font-weight: 700;
    max-width: 600px;
  }

  p {
    margin: auto;
    color: rgba(51, 51, 51, 0.8);
  }
`;

export default Testimony;
