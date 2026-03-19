import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import SiteSwitcher from '../components/SiteSwitcher';
import HamburgerIcon from '../components/HamburgerIcon';
import logo2 from '../assets/logo2.png';
import './Rajmani.css';

const Rajmani = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rajmani-site">
      {/* Navbar */}
      <nav className="rajmani-navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/rajmani" className="nav-logo">
              <div className="logo-container">
                <img src={logo2} alt="Raja Mani Fabrics Logo" className="logo-image" />
              </div>
            </Link>
            
            <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
              <Link 
                to="/rajmani" 
                className="nav-link active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#products" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
              <div className="mobile-site-switcher">
                <SiteSwitcher />
              </div>
            </div>

            {isOpen && (
              <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
            )}
            
            <div className="nav-actions">
              <button className="nav-toggle" onClick={toggleMenu}>
                <HamburgerIcon isOpen={isOpen} />
              </button>
              <div className="desktop-site-switcher">
                <SiteSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="rajmani-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Raja Mani Fabrics</h1>
            <p className="hero-subtitle">Premium Textile Solutions</p>
            <p className="hero-description">
              Leading manufacturer and supplier of high-quality fabrics for all your textile needs. 
              From premium cotton to luxury blends, we deliver excellence in every thread.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Fabric Varieties</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="rajmani-products" id="products">
        <div className="container">
          <h2>Our Products</h2>
          <p>Premium quality fabrics for all your textile needs</p>
          <div className="products-grid">
            <div className="product-card">
              <Package size={40} />
              <h3>Cotton Fabrics</h3>
              <p>Premium quality cotton fabrics in various weights and textures</p>
            </div>
            <div className="product-card">
              <Package size={40} />
              <h3>Silk Fabrics</h3>
              <p>Luxurious silk fabrics for high-end garments and applications</p>
            </div>
            <div className="product-card">
              <Package size={40} />
              <h3>Polyester Blends</h3>
              <p>Durable polyester blend fabrics for various industrial uses</p>
            </div>
            <div className="product-card">
              <Package size={40} />
              <h3>Custom Fabrics</h3>
              <p>Tailored fabric solutions designed to your specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="rajmani-about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Raja Mani Fabrics</h2>
              <p>
                With over 25 years of experience in the textile industry, Raja Mani Fabrics has established 
                itself as a trusted name in premium fabric manufacturing and supply. We specialize in a wide 
                range of high-quality fabrics including cotton, silk, polyester, and custom blends.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred 
                choice for fashion designers, garment manufacturers, and textile enthusiasts across the region.
              </p>
              <div className="features">
                <div className="feature">
                  <Package size={24} />
                  <div>
                    <h4>Premium Quality</h4>
                    <p>Only the finest materials and craftsmanship</p>
                  </div>
                </div>
                <div className="feature">
                  <Package size={24} />
                  <div>
                    <h4>Wide Variety</h4>
                    <p>500+ fabric types and patterns available</p>
                  </div>
                </div>
                <div className="feature">
                  <Package size={24} />
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>Tailored fabrics for specific requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Package size={80} />
                <h3>Premium Fabrics</h3>
                <p>Quality You Can Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="rajmani-contact" id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Ready to explore our premium fabric collection? Contact us today!</p>
          <div className="contact-grid">
            <div className="contact-card">
              <Mail size={32} />
              <h3>Email Us</h3>
              <p>info@rajmanifabrics.com</p>
            </div>
            <div className="contact-card">
              <Phone size={32} />
              <h3>Call Us</h3>
              <p>+91 78451 60516</p>
            </div>
            <div className="contact-card">
              <MapPin size={32} />
              <h3>Visit Us</h3>
              <p>Tiruppur, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rajmani-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h2 className="footer-company-name">Raja Mani Fabrics</h2>
              <p className="footer-description">
                Premium textile solutions with over 25 years of excellence in fabric manufacturing and supply.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Icons</h3>
              <div className="contact-icons">
                <Mail size={20} />
                <Phone size={20} />
                <MapPin size={20} />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Raja Mani Fabrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rajmani;