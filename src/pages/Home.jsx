import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ServicesList from "../components/UI/ServicesList";
import Background from "../components/UI/Background";
import Brand from "./Brand";
import Gallery from "./Gallery";
import GalleryMain from "./GalleryMain";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
<section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
            </Col>
            <GalleryMain/>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
           
            <Brand />
          </Row>
        </Container>
      </section>
      <section>
        
            <Background/>
          
      </section>
      <section className="services__section1">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
 
      

      <section>
       
      </section>
    </Helmet>
  );
};

export default Home;
