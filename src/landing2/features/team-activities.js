import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Root from "../components/ImgText";
import ShadowBox from "../components/shadow-box";

const TeamActivities = () => {
  return (
    <ShadowBox>
      <Root className="py-5">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xl={10}>
              <Row className="justify-content-between align-items-center">
                <Col xs={12} sm={6} md={5} className="order-1 order-sm-2 mb-5">
                  <img
                    alt=""
                    className="img-fluid"
                    src="/images/team-activities.jpg"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} className="order-2 order-sm-1">
                  <h2>Manage team activities all in one place</h2>
                  <p>
                    Keep your team organized and informed with activities that
                    are up to date.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Root>
    </ShadowBox>
  );
};

export default TeamActivities;
