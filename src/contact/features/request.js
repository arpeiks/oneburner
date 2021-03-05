import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Button from "../../general/button";

const Request = () => {
  return (
    <Root>
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col xl={11} className="py-5">
            <Row className="justify-content-between">
              <Col xl={5} lg={6} className="mb-5">
                <div className="form-root p-4">
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Work Email</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Product of Interest</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Company Size</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Work Email</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button>Contact Us</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6} className="mt-5">
                <h4 className="mb-4">Request a call from an expert</h4>
                <p className="mb-5">
                  Having thoughts on whoch product works best for you Fill the
                  form and our expert will reach out to you.
                </p>
                <h4 className="mb-4">Our offices around Africa</h4>
                <Row>
                  {[
                    {
                      country: "Nigeria",
                      state: " Island, Lagos.",
                      phone: "+234-(0)-8000000000",
                      address: "33a, Adeola Odeku, Victoria",
                    },
                    {
                      state: "Accra",
                      country: "Ghana",
                      phone: "+233-(0)-277619819",
                      address: "45, El-Senoussi Street,",
                    },
                    {
                      country: "South Africa",
                      phone: "+27-(0)-857926978",
                      state: " Shepstone, Kwazulu-Natal",
                      address: "474, Cheriton Drive, Port",
                    },
                    {
                      country: "Egypt",
                      state: " St., Giza.",
                      phone: "+20-(0)-35924295",
                      address: "72, Gameat El-Dewal El-Arabia",
                    },
                    {
                      country: "Kenya",
                      state: "Area, Niarobi",
                      phone: "+254-(0)-20536766",
                      address: "41, Enterprise Rd., Industrial",
                    },
                    {
                      country: "Tunisia",
                      phone: "+216-(0)-77367410",
                      address: "13, Rue de Makthar,",
                      state: " DhraaGovernorate Kasserine",
                    },
                    {
                      country: "Mali",
                      state: "Bamako.",
                      phone: "+223-(0)-78175387",
                      address: "22, Badalabougou Est.,",
                    },
                    {
                      country: "Tanzania",
                      state: "Dar Salaam",
                      phone: "+255-(0)-222120119",
                      address: "Mbezi Beach, P.O.B: 70339,",
                    },
                    {
                      country: "Togo",
                      state: "Lome",
                      phone: "+228-(0)-22229600",
                      address: "10, E rue des Echis,",
                    },
                  ].map((i) => (
                    <Office
                      phone={i.phone}
                      state={i.state}
                      address={i.address}
                      country={i.country}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background: rgba(204, 204, 204, 0.1);

  & .form-root {
    margin: auto;
    // max-width: 440px;
    background: #fff;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.08);

    @media (min-width: 500px) {
      padding: 4em !important;
      max-width: unset !important;
    }

    @media (max-width: 990px) {
      max-width: 600px !important;
    }
  }

  h4 {
    font-weight: normal;
  }

  label {
    font-weight: 300 !important;
  }

  button {
    width: 100%;
    margin-top: 2em;
    box-shadow: none;
  }

  & .office {
    h6 {
      color: #455a64;
      font-weight: 600;
      text-transform: uppercase;
    }

    p,
    a {
      font-size: 14px;
      color: rgba(1, 0, 29, 0.6);
    }
  }
`;

const Office = ({ state, phone, address, country }) => (
  <Col sm={6} md={4} className="mb-5">
    <div className="office">
      <h6 className="mb-3">{country}</h6>
      <p className="mb-0">{address}</p>
      <p className="mt-0 mb-3">{state}</p>
      <Link to="">{phone}</Link>
    </div>
  </Col>
);

export default Request;
