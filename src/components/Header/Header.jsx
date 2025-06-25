import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/all-images/logo.png";
import "../../styles/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__top">
        <Container>
          <div className="header__mobile-row">
            <div className="logo d-flex align-items-center">
              <Link to="/" className="d-flex align-items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "50px", width: "auto" }}
                />
              </Link>
            </div>

            <a
              href="https://wa.me/918377875838"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp className="whatsapp-icon" /> Message
            </a>

            <div className="hamburger-menu" onClick={toggleMenu}>
              <GiHamburgerMenu size={24} />
            </div>
          </div>
        </Container>
      </div>

      {menuOpen && (
        <div className="dropdown-menu-custom">
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            &#10005;
          </div>

          <div className="menu-links">
            <Link to="/home" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About us</Link>
            <Link to="/products" onClick={toggleMenu}>Products</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>

            <hr />
            <Link to="/brands" onClick={toggleMenu}>Brands</Link>
            <Link to="/gallery" onClick={toggleMenu}>Gallery</Link> {/* ✅ Added Gallery */}
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </div>

          <div className="bottom-section">
            <p>
              +91 83778 75838 |{" "}
              <a href="mailto:hvdecors@gmail.com">hvdecors@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
