import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import Background from "../components/UI/Background";
import "../styles/product.css";

const ProductInventory = () => {
  return (
    <Helmet title="Products">
      {/* Hero Section with Background */}
      <section className="products__hero-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title text-white">Our Products</h2>
              <p className="section__description text-white">
                Discover our premium range of blinds, curtains, and automation solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Content Section */}
      <section className="products__section">
        <Container>
          <Row>
            <Background/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductInventory;
