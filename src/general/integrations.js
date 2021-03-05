import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Integrations = () => {
  return (
    <Root className="py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={10}>
            <h2 className="mb-5">
              Integrate with your favorite tools easily in one click
            </h2>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              {[
                "slack",
                "gmail",
                "linkedin",
                "mailchimp",
                "dropbox",
                "facebook",
                "onenote",
                "messenger",
                "whatsapp",
                "sendgrid",
                "github",
                "outlook",
                "box",
                "onenote",
                "teams",
                "sharepoint",
                "youtube",
                "zeplin",
                "excel",
                "powerpoint",
                "access",
                "wordpress",
              ].map((i) => (
                <div className="icons m-3 mb-5 text-center">
                  <img
                    alt=""
                    key={i}
                    className="img-fluid"
                    src={`/images/${i}.jpg`}
                  />
                </div>
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

  h2 {
    margin: auto;
    color: #333333;
    max-width: 540px;
    text-align: center;
    font-weight: normal;
  }

  img {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
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

export default Integrations;
