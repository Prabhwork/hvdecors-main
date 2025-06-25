import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Top Hero Section with Background Image */}
      <section className="about__hero-section text-white d-flex align-items-center">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 className="section__title1">About HV Decors</h1>
              <p className="section__description1">
                Premium window décor with elegant designs and smart automation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="10">
              <h4 className="section__subtitle">Our Story</h4>
              <h2 className="section__title mb-4">
                Transforming Spaces with Elegant Window Solutions
              </h2>
              <p className="section__description">
                At HV Decors, we craft high-quality curtains, blinds, and motorized shading systems that blend aesthetics with functionality.
              </p>
              <p className="section__description">
                Our expert team ensures every project—from selection to installation—is tailored to meet your design vision, comfort, and light control needs.
              </p>
              <div className="about__section-item mt-4">
                <p><i className="ri-phone-line me-2"></i> +91 83778 75838</p>
                <p><i className="ri-mail-line me-2"></i> hvdecors@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose HV Decors Section */}
      <section className="choose-us-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="10">
              <h2 className="section__title mb-4">Why Choose HV Decors?</h2>
              <p>
                <i className="ri-leaf-line me-2"></i> Stylish and functional window coverings with a commitment to precision and personalization.
              </p>
              <ul className="list-unstyled mt-3">
                <li><i className="ri-checkbox-circle-line me-2 text-success"></i> Custom Curtains & Blinds</li>
                <li><i className="ri-checkbox-circle-line me-2 text-success"></i> Smart Motorization Systems</li>
                <li><i className="ri-checkbox-circle-line me-2 text-success"></i> On-Site Measurement & Installation</li>
                <li><i className="ri-checkbox-circle-line me-2 text-success"></i> Residential & Commercial Solutions</li>
                <li><i className="ri-checkbox-circle-line me-2 text-success"></i> Premium Fabric & Material Selection</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default About;
