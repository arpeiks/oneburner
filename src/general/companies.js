import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Companies = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <span className="mb-2">
              Over 500+ companies bond teams together with Oneburner
            </span>
            <div>
              {[
                "paystack",
                "egyptair",
                "dangote",
                "stanbic",
                "mtn",
                "gtbank",
                "skooleeo",
              ].map((i) => (
                <img
                  alt=""
                  key={i}
                  className="img-fluid m-3 mt-0"
                  src={`/images/${i}.jpg`}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  margin: auto;
  text-align: center;

  span {
    display: block;
    color: #01001d;
  }

  img {
  }

  .icons {
    width: 6%;
    flex-basis: 6%;

    @media (max-width: 350px) {
      width: 20%;
      flex-basis: 20%;
    }

    @media (max-width: 440px) and (min-width: 351px) {
      width: 15%;
      flex-basis: 15%;
    }

    @media (max-width: 620px) and (min-width: 441px) {
      width: 12%;
      flex-basis: 12%;
    }

    @media (max-width: 960px) and (min-width: 621px) {
      width: 10%;
      flex-basis: 10%;
    }
  }
`;

export default Companies;
