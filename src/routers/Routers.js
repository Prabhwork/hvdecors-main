import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

import Background from "../components/UI/Background";
import Brand from "../pages/Brand";
import ProductInventory from "../pages/ProductInventory";
import Services from "../pages/Services";
import BrandMain from "../pages/BrandMain";
import Gallery from "../pages/Gallery";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/background" element={<Background />} />
      <Route path="/brand" element={<Brand/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductInventory/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/brands" element={<BrandMain />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />

   
    </Routes>
  );
};

export default Routers;
