import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Button from "../../general/button";

const FooterAction = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <h4>Choose better way to work</h4>
        <p className="mb-5">
          No credit card details | No additional installation | No time wasting
        </p>
        <Button>Start my free trial</Button>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  color: #fff;
  text-align: center;
  background: #7837f8;

  & h4 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 60px;
  }

  & p {
    line-height: 24px;
  }
`;

export default FooterAction;
