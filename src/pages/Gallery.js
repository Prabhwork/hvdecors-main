import React, { useState } from 'react';
import '../styles/gallery.css';

// Import all your images
import blind1 from '../assets/all-images/blind1.jpg';
import blind2 from '../assets/all-images/blind2.jpg';
import blind3 from '../assets/all-images/blind3.jpg';
import blind4 from '../assets/all-images/blind4.jpg';
import blind5 from '../assets/all-images/blind5.jpg';
import blind6 from '../assets/all-images/blind6.jpg';

import gallery1 from '../assets/all-images/gallery1.jpg';
import gallery2 from '../assets/all-images/gallery2.jpg';
import gallery3 from '../assets/all-images/gallery3.jpg';
import gallery4 from '../assets/all-images/gallery4.jpg';
import gallery5 from '../assets/all-images/gallery5.jpg';
import gallery6 from '../assets/all-images/gallery6.jpg';

import Pelmet1 from '../assets/all-images/pelmet1.jpg';
import Pelmet2 from '../assets/all-images/pelmet2.jpg';
import Pelmet3 from '../assets/all-images/pelmet3.jpg';
import Pelmet4 from '../assets/all-images/pelmet4.jpg';
import Pelmet5 from '../assets/all-images/pelmet5.jpg';
import Pelmet6 from '../assets/all-images/pelmet6.jpg';

import acc1 from '../assets/all-images/acc1.jpg';
import acc2 from '../assets/all-images/acc2.jpg';
import acc3 from '../assets/all-images/acc3.jpg';
import acc4 from '../assets/all-images/acc4.jpg';
import acc5 from '../assets/all-images/acc5.jpg';
import acc6 from '../assets/all-images/acc6.jpg';

import motor1 from '../assets/all-images/motor1.jpg';
import motor2 from '../assets/all-images/motor2.jpg';
import motor3 from '../assets/all-images/motor3.jpg';

import bgImage from '../assets/all-images/blind3.jpg'; // hero bg

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Curtains');
  const [selectedImage, setSelectedImage] = useState(null);

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

    // Blinds
    { category: 'Blinds', image: blind1 },
    { category: 'Blinds', image: blind2 },
    { category: 'Blinds', image: blind3 },
    { category: 'Blinds', image: blind4 },
    { category: 'Blinds', image: blind5 },
    { category: 'Blinds', image: blind6 },

    // Pelmets
    { category: 'Pelmets', image: Pelmet1 },
    { category: 'Pelmets', image: Pelmet2 },
    { category: 'Pelmets', image: Pelmet3 },
    { category: 'Pelmets', image: Pelmet4 },
    { category: 'Pelmets', image: Pelmet5 },
    { category: 'Pelmets', image: Pelmet6 },

    // Accessories
    { category: 'Accessories', image: acc1 },
    { category: 'Accessories', image: acc2 },
    { category: 'Accessories', image: acc3 },
    { category: 'Accessories', image: acc4 },
    { category: 'Accessories', image: acc5 },
    { category: 'Accessories', image: acc6 },

    // Motorization
    { category: 'Motorization', image: motor1 },
    { category: 'Motorization', image: motor2 },
    { category: 'Motorization', image: motor3 },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);
  const categories = ['Curtains', 'Blinds', 'Pelmets', 'Accessories', 'Motorization'];

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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
          <div 
            className="product-card" 
            key={index}
            onClick={() => openImage(product.image)}
          >
            <img src={product.image} alt={`${activeCategory} example`} className="product-image" />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;