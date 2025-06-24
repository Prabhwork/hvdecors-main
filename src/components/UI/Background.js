import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './background.css';


import roller from '../../assets/all-images/roller.jpg';
import roman from '../../assets/all-images/roman.jpg';
import zebra from '../../assets/all-images/zebra.jpg';
import Venetian from '../../assets/all-images/venetian.jpg';
import honeycomb from '../../assets/all-images/honeycomb.jpg';
import vertical from '../../assets/all-images/vertical.jpg';
import panel from '../../assets/all-images/panel.jpg';
import skylight from '../../assets/all-images/skylight.jpg';
import monsoon from '../../assets/all-images/monsoon.jpg';

import curtain1 from '../../assets/all-images/curtain1.jpg';
import curtain2 from '../../assets/all-images/curtain2.jpg';
import curtain3 from '../../assets/all-images/curtain3.jpg';
import curtain4 from '../../assets/all-images/curtain4.jpg';
import curtain5 from '../../assets/all-images/curtain5.jpg';
import curtain6 from '../../assets/all-images/curtain6.jpg';
import curtain7 from '../../assets/all-images/curtain7.jpg';
import curtain8 from '../../assets/all-images/curtain8.jpg';
import curtain9 from '../../assets/all-images/curtain9.jpg';

import awning1 from '../../assets/all-images/aw.jpg'; // Replace with correct image
import motor1 from '../../assets/all-images/moter.jpg'; // Replace with correct image

const Background = () => {
  const [activeCategory, setActiveCategory] = useState('Blinds');

  const products = [
    // ----- Blinds -----
    {
      name: 'Roller',
      category: 'Blinds',
      image: roller,
      description: `Embrace the perfect harmony of style and functionality with our exquisite roller blinds. These sleek and versatile window coverings offer effortless operation and precise light control. Discover a wide range of fabrics and patterns that harmonize with any interior decor.`,
    },
    {
      name: 'Roman',
      category: 'Blinds',
      image: roman,
      description: `Experience the allure of Roman blinds, tailored with soft fabrics that gracefully fold into a cascade of timeless style. They provide privacy and gentle diffusion of natural light.`,
    },
    {
      name: 'Zebra',
      category: 'Blinds',
      image: zebra,
      description: `Zebra blinds feature alternating sheer and solid fabric bands, allowing effortless control over light and privacy while offering a contemporary, elegant look.`,
    },
    {
      name: 'Venetian',
      category: 'Blinds',
      image: Venetian,
      description: `Venetian blinds feature horizontal slats for a refined and sophisticated look, adding classic charm to any space with adjustable light control.`,
    },
    {
      name: 'Honeycomb',
      category: 'Blinds',
      image: honeycomb,
      description: `Honeycomb blinds offer a cellular structure that traps air, enhancing insulation and energy efficiency while keeping your room comfortable.`,
    },
    {
      name: 'Vertical',
      category: 'Blinds',
      image: vertical,
      description: `Vertical blinds allow complete control over light and privacy with the ability to tilt slats to the desired angle. Ideal for large windows or sliding doors.`,
    },
    {
      name: 'Panel',
      category: 'Blinds',
      image: panel,
      description: `Panel blinds have wide panels that glide smoothly along a track system, creating a clean, uncluttered look for modern interiors.`,
    },
    {
      name: 'Skylight',
      category: 'Blinds',
      image: skylight,
      description: `Skylight blinds are designed to fit a variety of skylight shapes, enhancing your interior aesthetics while managing sunlight and heat.`,
    },
    {
      name: 'Monsoon',
      category: 'Blinds',
      image: monsoon,
      description: `Monsoon blinds are made from weather-resistant materials, offering protection against sun and rain for your balconies and patios.`,
    },

    // ----- Curtain Systems -----
    {
      name: 'Track',
      category: 'Curtain Systems',
      image: curtain1,
      description: `Curtain Tracks: Smooth and silent curtain movement with modern aesthetics.`,
    },
    {
      name: 'Curtain Rods',
      category: 'Curtain Systems',
      image: curtain2,
      description: `Curtain Rods provide sturdy, elegant support for various curtain types and designs.`,
    },
    {
      name: 'Pelmets',
      category: 'Curtain Systems',
      image: curtain3,
      description: `Choose from a range of fabrics, styles, and trims, allowing you to tailor your Curtain Pelmets to seamlessly complement your curtain design and interior décor.`,
    },
    {
      name: 'Finials',
      category: 'Curtain Systems',
      image: curtain4,
      description: `Finials add the perfect decorative touch to curtain rods for a complete window look.`,
    },
    {
      name: 'Rings',
      category: 'Curtain Systems',
      image: curtain5,
      description: `Curtain Rings ensure smooth glide and complement various drapery styles.`,
    },
    {
      name: 'Hold Back',
      category: 'Curtain Systems',
      image: curtain6,
      description: `Hold Backs keep your curtains elegantly pulled to the side while adding flair.`,
    },
    {
      name: 'Tie Backs',
      category: 'Curtain Systems',
      image: curtain7,
      description: `Tie Backs enhance your curtains' appearance with a charming and neat drape.`,
    },
    {
      name: 'Brackets',
      category: 'Curtain Systems',
      image: curtain8,
      description: `Brackets provide secure mounting for rods or tracks, ensuring proper curtain support.`,
    },
    {
      name: 'Curtains',
      category: 'Curtain Systems',
      image: curtain9,
      description: `Our range of curtain fabrics and designs suit every interior, from sheer elegance to blackout practicality.`,
    },

    // ----- Awnings (with special layout) -----
    {
      name: 'Awnings',
      category: 'Awnings',
      image: awning1,
      features: [
        {
          heading: 'Embrace Outdoor Comfort and Style',
          description: 'Step into a world of outdoor comfort and style with our Awnings, a versatile shading solution that elevates your outdoor living spaces.',
        },
        {
          heading: 'Protection from the Elements',
          description: 'Awnings provide shade and shelter, protecting you from harsh sun rays, rain showers, and UV radiation.',
        },
        {
          heading: 'Enhanced Energy Efficiency',
          description: 'Experience reduced cooling costs as Awnings prevent excessive heat from entering your home.',
        },
        {
          heading: 'Versatility for Any Space',
          description: 'Whether it’s a patio, deck, or window, our Awnings come in various styles and sizes to suit your needs.',
        },
      ],
    },

    // ----- Motorization -----
    {
      name: 'Motorization',
      category: 'Motorization',
      image: motor1,
      features: [
        {
          heading: 'Smart, Seamless, and Effortless',
          description: 'Experience the future of window coverings with our Curtain and Blind Automation, where smart technology meets modern convenience.',
        },
        {
          heading: 'Smart Home Integration',
          description: 'Integrate your curtains and blinds into your smart home system and control them remotely using your smartphone or voice assistants.',
        },
        {
          heading: 'Scheduled Shading Solutions',
          description: 'Set up automatic schedules to open or close your curtains at specific times for energy savings and security.',
        },
        {
          heading: 'Sun and Temperature Sensors',
          description: 'Automate curtain movement based on sunlight or room temperature using sensors.',
        },
       
      ],
    },
  
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="background-wrapper">
      <div className="product-filters">
        {['Blinds', 'Curtain Systems', 'Awnings', 'Motorization'].map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {(activeCategory === 'Awnings' || activeCategory === 'Motorization') ? (
        <div className="awnings-layout">
          <img src={filteredProducts[0].image} alt={filteredProducts[0].name} className="awnings-img" />
          <div className="awnings-content">
            <h2>{filteredProducts[0].name}</h2>
            {filteredProducts[0].features.map((feature, index) => (
              <div className="feature-block" key={index}>
                <h4>{feature.heading}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-section">
          {filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="name-tag">{product.name}</div>
              <div className="overlay">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="buttons">
              
                  <Link to="/contact">
                    <button className="enquire-btn">Enquire Now →</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Background;
