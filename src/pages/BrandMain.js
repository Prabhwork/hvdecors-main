import React from 'react';
import './brands.css'; // Ensure this CSS file exists
import Brand from './Brand';

const BrandMain = () => {
 

  return (
    <div className="brand-main">
      {/* Top Background Banner */}
      <section className="brand__hero">
        <div className="container">
          <h2>Our Brands</h2>
          <p>We represent innovation across industries – here are our flagship ventures.</p>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="brand__section">
        <Brand/>
      </section>
    </div>
  );
};

export default BrandMain;
