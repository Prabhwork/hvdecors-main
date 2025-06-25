import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contact.css";
import axios from 'axios';


const Contact = () => {
  const initialState = {
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ success: null, message: '' });
  const [buttonText, setButtonText] = useState("Submit Inquiry");

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzr0YRPUrge-9xEg9i97YEcrc5g43onOf0kUA5t3OPI3C-1k_ON2sFc1U0Ej6RDoBXs/exec';

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.trim().length < 3) return "Please enter a valid name (min 3 characters).";
    if (!email || !emailRegex.test(email)) return "Please enter a valid email address.";
    if (!phone || !phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number.";
    if (!message || message.trim().length < 20) return "Message must be at least 20 characters.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus({ success: false, message: error });
      return;
    }

    setButtonText("Sending...");

    try {
      const response = await axios.post(scriptURL, formData, {
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });

      if (response.status === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData(initialState);
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Network error. Please try again." });
    } finally {
      setButtonText("Submit Inquiry");
    }
  };

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

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Business Email"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  {buttonText}
                </button>

                {status.message && (
                  <p className={`mt-2 ${status.success ? "text-success" : "text-danger"}`}>
                    {status.message}
                  </p>
                )}
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h4 className="fw-bold mb-3">HV Decors Office</h4>
                <p className="section__description mb-0">
                  HV Decors, Kirti Nagar Industrial Area, New Delhi - 110015, India
                </p>

                <div className="d-flex align-items-center gap-2 mt-4">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 83778 75838</p>
                </div>

                <div className="d-flex align-items-center gap-2 mt-2">
                  <h6 className="fs-6 mb-0">Email:</h6>
                  <p className="section__description mb-0">hvdecors@gmail.com</p>
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
