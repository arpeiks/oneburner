import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="pt-5">
      <Root>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xl={11}>
              <Row>
                <Col xl={5} md={4}>
                  <img
                    alt=""
                    height="86"
                    className="mb-3"
                    src="/images/logo.jpg"
                  />
                  <p>No 1 CRM solution in Africa</p>
                  <FLink>Terms of User</FLink> | <FLink>Privacy Policy</FLink>
                  <br />
                  <br />
                  <br />
                  <FLink>
                    <span className="font-weight-bold">Get in touch</span>
                  </FLink>
                  <br />
                  <FLink className="phone">+234-80-000-0000</FLink>
                </Col>
                <Col xl={7} md={8} className="mb-5">
                  <Row>
                    <FLinks
                      header="Product"
                      links={[
                        "Features",
                        "Enterprise",
                        "Security",
                        "Trust",
                        "Customer Stories",
                        "Pricing",
                        "Integrations",
                        "Oneburner Partners",
                      ]}
                    />

                    <FLinks
                      header="Company"
                      links={[
                        "About Us",
                        "Contact Us",
                        "Careers",
                        "In the News",
                      ]}
                    />

                    <FLinks
                      header="OneBurner For Teams"
                      links={[
                        "Engineering",
                        "Financial Services",
                        "CRM and Sales",
                        "IT",
                        "Marketing",
                        "Customer Support",
                        "Human Resources",
                        "Project Management",
                        "Remote Work",
                      ]}
                    />

                    <FLinks
                      header="Resources"
                      links={[
                        "Community",
                        "Guides",
                        "Templates",
                        "Video Tutorials",
                        "Professional Services",
                        "Knowledge Base",
                        "Blog",
                        "Webinars",
                        "Find a Partner",
                      ]}
                    />
                  </Row>
                </Col>

                <Col className="mt-5">
                  <p className="copyright">
                    &copy; 2020 Oneburner.com. All Rights Reserved.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Root>
    </footer>
  );
};

const FLink = ({ children }) => (
  <Link to="" className="link">
    {children}
  </Link>
);

const FLinks = ({ header, links }) => (
  <Col xs={6} lg={3}>
    <div className="flinks mt-5">
      <h6 className="header">{header}</h6>
      {links.map((i) => (
        <FLink key={i}>{i}</FLink>
      ))}
    </div>
  </Col>
);

const Root = styled.div`
  a {
    font-weight: normal;
    text-decoration: none;
    color: rgba(69, 69, 69, 0.8);
  }

  p {
    color: #454545;
  }

  h6.header {
    font-weight: bold;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }

  .flinks {
    a {
      display: block;
      line-height: 28px;
    }
  }

  .copyright {
    margin: 0;
    padding: 2em;
    border-top: 1px solid rgba(69, 69, 69, 0.13);
  }
`;

export default Footer;
