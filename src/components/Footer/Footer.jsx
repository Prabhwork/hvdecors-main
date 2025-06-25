import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import logo from "../../assets/all-images/logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="hv-footer">
      <div className="footer-top">
        {/* Logo and About */}
        <div className="footer-section logo-section">
          <img src={logo} alt="HV Decors" className="footer-logo" />
          <p>
            Creating custom blinds, curtains, and smart window décor to enhance your lifestyle with modern interior solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><FaPhoneAlt /> +91 83778 75838</li>
            <li><FaEnvelope /> hvdecors@gmail.com</li>
          </ul>

          <Link to="/gallery">
            <button
              className="enquire-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Gallery
            </button>
          </Link>
        </div>
      </div>

      <div className="footer-bottom-text">
        © {new Date().getFullYear()} HV Decors — Enhancing Interiors, One Window at a Time.
      </div>
    </footer>
  );
};

export default Footer;
