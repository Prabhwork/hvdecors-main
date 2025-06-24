import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../assets/all-images/honeycomb.jpg";
import workshopImg from "../assets/all-images/roman.jpg";
import "../styles/about.css"; // Ensure you have the correct path to your CSS file

const About = () => {
  return (
    <div className="about-page">
      {/* Top Banner with Background Image */}
      <section className="about__hero-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center text-white">
              <h2 className="section__title text-white">About HV Decors</h2>
              <p className="section__description1" color="#ffffff">
                Premium window décor with elegant designs and smart automation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                <h4 className="section__subtitle">Our Story</h4>
                <h2 className="section__title">
                  Transforming Spaces with Elegant Window Solutions
                </h2>
                <p className="section__description">
                  At HV Decors, we craft high-quality curtains, blinds, and motorized shading systems that blend aesthetics with functionality.
                </p>
                <p className="section__description">
                  Our expert team ensures every project—from selection to installation—is tailored to meet your design vision, comfort, and light control needs.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-phone-line"></i> +91 99103 20803
                  </p>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-mail-line"></i> hvdecors@gmail.com
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="HV Decors Workshop" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose HV Decors Section */}
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={workshopImg} alt="Why HV Decors" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">Why Choose HV Decors?</h2>

                <p className="section__description">
                  <i className="ri-leaf-line"></i> We deliver stylish and functional window coverings with a commitment to precision and personalization.
                </p>

                <div className="craftsmanship-list">
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Custom Curtains & Blinds</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Smart Motorization Systems</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> On-Site Measurement & Installation</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Residential & Commercial Solutions</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Premium Fabric & Material Selection</p>
                </div>

          
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
