import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Button from "../../general/button";

const Learn = () => {
  return (
    <Root>
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col xl={10} className="py-5">
            <h2 className="mb-5">
              Want to learn more on how we can impact your enterprise?
            </h2>
            <Button>Contact Sales</Button>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  text-align: center;
  background: rgba(204, 204, 204, 0.1);

  h2 {
    margin: auto;
    color: #333333;
    max-width: 600px;
    font-weight: 700;
  }
`;

export default Learn;
