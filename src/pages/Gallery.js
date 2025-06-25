import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/gallery.css';

import blind1 from '../assets/all-images/blind1.jpg';
import blind2  from '../assets/all-images/blind2.jpg';
import blind3 from '../assets/all-images/blind3.jpg';
import blind4 from '../assets/all-images/blind4.jpg';
import blind5 from '../assets/all-images/blind5.jpg';
import blind6 from '../assets/all-images/blind6.jpg';
import blind7 from '../assets/all-images/blind7.jpg';
import blind8 from '../assets/all-images/blind8.jpg';
import blind9 from '../assets/all-images/blind9.jpg';


import gallery1 from '../assets/all-images/gallery1.jpg';
import gallery2 from '../assets/all-images/gallery2.jpg';
import gallery3 from '../assets/all-images/gallery3.jpg';
import gallery4 from '../assets/all-images/gallery4.jpg';
import gallery5 from '../assets/all-images/gallery5.jpg';
import gallery6 from '../assets/all-images/gallery6.jpg';
import gallery7 from '../assets/all-images/gallery7.jpg';
import gallery8 from '../assets/all-images/gallery8.jpg';
import gallery9 from '../assets/all-images/gallery9.jpg';
import gallery10 from '../assets/all-images/gallery10.jpg';

import gallery11 from '../assets/all-images/gallery11.jpg';
import gallery12 from '../assets/all-images/gallery12.jpg';
import gallery13 from '../assets/all-images/gallery13.jpg';
import gallery14 from '../assets/all-images/gallery14.jpg';
import gallery15 from '../assets/all-images/gallery15.jpg';

import Pelmet1 from '../assets/all-images/pelmet1.jpg';
import Pelmet2 from '../assets/all-images/pelmet2.jpg';
import Pelmet3 from '../assets/all-images/pelmet3.jpg';
import Pelmet4 from '../assets/all-images/pelmet4.jpg';
import Pelmet5 from '../assets/all-images/pelmet5.jpg';
import Pelmet6 from '../assets/all-images/pelmet6.jpg';
import Pelmet7 from '../assets/all-images/pelmet7.jpg';
import Pelmet8 from '../assets/all-images/pelmet8.jpg';
import Pelmet9 from '../assets/all-images/pelmet9.jpg';
import Pelmet10 from '../assets/all-images/pelmet10.jpg';
import Pelmet11 from '../assets/all-images/pelmet11.jpg';
import Pelmet12 from '../assets/all-images/pelmet12.jpg';
import Pelmet13 from '../assets/all-images/pelmet13.jpg';
import Pelmet14 from '../assets/all-images/pelmet14.jpg';
import Pelmet15 from '../assets/all-images/pelmet15.jpg';

import acc1 from '../assets/all-images/acc1.jpg';
import acc2 from '../assets/all-images/acc2.jpg';
import acc3 from '../assets/all-images/acc3.jpg';
import acc4 from '../assets/all-images/acc4.jpg';
import acc5 from '../assets/all-images/acc5.jpg';
import acc6 from '../assets/all-images/acc6.jpg';
import acc7 from '../assets/all-images/acc7.jpg';
import acc8 from '../assets/all-images/acc8.jpg';
import acc9 from '../assets/all-images/acc9.jpg';


import motor1 from '../assets/all-images/motor1.jpg';
import motor2 from '../assets/all-images/motor2.jpg';
import motor3 from '../assets/all-images/motor3.jpg';



import bgImage from '../assets/all-images/blind3.jpg'; // hero bg

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Curtains');

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    // Curtains
    { category: 'Curtains', image: gallery1 },
    { category: 'Curtains', image: gallery2 },
    { category: 'Curtains', image: gallery3 },
    { category: 'Curtains', image: gallery4 },
    { category: 'Curtains', image: gallery5 },
    { category: 'Curtains', image: gallery6 },
    { category: 'Curtains', image: gallery7 },
    { category: 'Curtains', image: gallery8 },
    { category: 'Curtains', image: gallery9 },
    { category: 'Curtains', image: gallery10 },
    { category: 'Curtains', image: gallery11 },
    { category: 'Curtains', image: gallery12 },
    { category: 'Curtains', image: gallery13 },
    { category: 'Curtains', image: gallery14 },
    { category: 'Curtains', image: gallery15 },

    // Blinds
    { category: 'Blinds', image: blind1 },
    { category: 'Blinds', image: blind2 },
    { category: 'Blinds', image: blind3 },
    { category: 'Blinds', image: blind4 },
    { category: 'Blinds', image: blind5 },
    { category: 'Blinds', image: blind6 },
    { category: 'Blinds', image: blind7 },
    { category: 'Blinds', image: blind8 },
    { category: 'Blinds', image: blind9 },

    // Pelmets
    { category: 'Pelmets', image: Pelmet1 },
    { category: 'Pelmets', image: Pelmet2 },
    { category: 'Pelmets', image: Pelmet3 },
    { category: 'Pelmets', image: Pelmet4 },
    { category: 'Pelmets', image: Pelmet5 },
    { category: 'Pelmets', image: Pelmet6 },
    { category: 'Pelmets', image: Pelmet7 },
    { category: 'Pelmets', image: Pelmet8 },
    { category: 'Pelmets', image: Pelmet9 },
    { category: 'Pelmets', image: Pelmet10 },
    { category: 'Pelmets', image: Pelmet11 },
    { category: 'Pelmets', image: Pelmet12 },
    { category: 'Pelmets', image: Pelmet13 },
    { category: 'Pelmets', image: Pelmet14 },
    { category: 'Pelmets', image: Pelmet15 },
    

    // Accessories
    { category: 'Accessories', image: acc1  },
    { category: 'Accessories', image: acc2  },
    { category: 'Accessories', image: acc3  },
    { category: 'Accessories', image: acc4  },
    { category: 'Accessories', image: acc5  },
    { category: 'Accessories', image: acc6  },
    { category: 'Accessories', image: acc7  },
    { category: 'Accessories', image: acc8  },
    { category: 'Accessories', image: acc9  },

    // Motorization
    { category: 'Motorization', image: motor1 },
    { category: 'Motorization', image: motor2 },
    { category: 'Motorization', image: motor3 },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const categories = ['Curtains', 'Blinds', 'Pelmets', 'Accessories', 'Motorization'];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Our Work Gallery</h1>
          <p className="hero-subtitle">
            Discover our beautiful range of Curtains, Blinds, Accessories, and Automation.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="product-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="product-section">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt="gallery" className="product-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
