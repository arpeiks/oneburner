import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Testimony = () => {
  return (
    <Root>
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col xl={10} className="py-5">
            <p className="mb-5">
              Best. Product. Ever! We like Oneburner more and more eact day
              because it makes our work a lot easier. It's just amazing. Very
              easy to use, impressed us on multiple levels. Thank you so much
              for your help and is worth more than we paid. We were treated like
              royalty.
            </p>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  text-align: center;

  p {
    margin: auto;
    color: #333333;
    font-weight: 300;
    font-size: 1.2em;
    max-width: 840px;
    line-height: 1.8em;
  }
`;

export default Testimony;
