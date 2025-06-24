import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Helmet title="Contact">
      {/* Top Hero Section with Background Image */}
      <section className="contact__hero-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center text-white">
              <h2 className="section__title text-white">Contact HV Decors</h2>
              <p className="section__description">
                Get in touch with us for curtains, blinds, and motorized window solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="contact__section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h2 className="section__title">Get in Touch</h2>
              <p className="section__description">
                Have a query about our blinds, curtains, or motorized solutions?
                Fill the form and our team will contact you soon.
              </p>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Company Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Business Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone Number" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Submit Inquiry
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h4 className="fw-bold mb-3">HV Decors Office</h4>
                <p className="section__description mb-0">
                  HV Decors Pvt. Ltd., Building 5A, Kirti Nagar Industrial Area,
                  New Delhi - 110015, India
                </p>

                <div className="d-flex align-items-center gap-2 mt-4">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 98765 43210</p>
                </div>

                <div className="d-flex align-items-center gap-2 mt-2">
                  <h6 className="fs-6 mb-0">Email:</h6>
                  <p className="section__description mb-0">
                    contact@hvdecors.com
                  </p>
                </div>

                <div className="mt-4">
                  <h6 className="section__subtitle">We do not accept online payments</h6>
                  <p className="section__description">
                    All orders are confirmed and processed manually by our sales team.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
