import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/services.css"; // Make sure this path is correct
import ServicesList from "../components/UI/ServicesList";

const Services = () => {
  return (
    <Helmet title="Services">
      {/* Top Hero Section with Background */}
      <section className="services__hero">
        <Container>
          <h2>Our Services</h2>
          <p>Premium Blinds, Curtains, and Smart Automation Solutions for Every Space</p>
        </Container>
      </section>

      {/* Services Listing Section */}
      <section className="services__section">
        <Container>
          <Row>
            
            <ServicesList/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Services;
