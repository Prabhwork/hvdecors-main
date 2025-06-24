// src/components/UI/BrandsSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './brand.css';

// Import brand logos
import vel from '.././assets/all-images/marvel.png';
import mac from '.././assets/all-images/SaromLogoWhite.png';
import forest from '.././assets/all-images/Ddecor_logo.png';
import tattva from '.././assets/all-images/Tattva.png';
import livin from '.././assets/all-images/livin-blinds.png';
import sarom from '.././assets/all-images/forest_group_logo.png';
import deep from '.././assets/all-images/kcfabrics_logo.png';

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const brandLogos = [vel, mac, forest, tattva, livin, sarom, deep];

  return (
    <div className="brands-section">
      <h2 className="brands-heading">Brands</h2>
      <Slider {...settings} className="brands-slider">
        {brandLogos.map((logo, index) => (
          <div className="brand-slide" key={index}>
            <img src={logo} alt={`Brand ${index}`} className="brand-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
