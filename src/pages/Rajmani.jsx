import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import SiteSwitcher from '../components/SiteSwitcher';
import HamburgerIcon from '../components/HamburgerIcon';
import useScrollReveal from '../hooks/useScrollReveal';
import logo2 from '../assets/logo2.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import './Rajmani.css';

const Rajmani = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [img1, img2, img3, img4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Crossfade every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal hooks for different sections
  const productsRef = useScrollReveal('.product-card', 'scroll-reveal', 0.1);
  const aboutRef = useScrollReveal('.feature', 'scroll-reveal', 0.1);
  const contactRef = useScrollReveal('.contact-card', 'scroll-reveal', 0.1);

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
        {/* Text content */}
        <div className="hero-content">
          <h1 className="hero-title">Raja Mani Fabrics</h1>
          <h2 className="hero-subtitle">Premium Textile Solutions</h2>
          <p className="hero-description">
            Leading manufacturer and supplier of high-quality fabrics for all your textile needs.{' '}
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

        {/* Slideshow */}
        <div className="hero-slideshow">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            >
              <img src={img} alt={`Hero display ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Silk Wave SVG */}
        <svg
          className="silk-waves"
          viewBox="0 0 1800 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="silkGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fdfaf6" />
              <stop offset="50%" stopColor="#e8dccf" />
              <stop offset="100%" stopColor="#d6c2a8" />
            </linearGradient>
            <linearGradient id="silkGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8dccf" />
              <stop offset="50%" stopColor="#d6c2a8" />
              <stop offset="100%" stopColor="#c9b090" />
            </linearGradient>
            <linearGradient id="silkGrad3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d6c2a8" />
              <stop offset="100%" stopColor="#c2a882" />
            </linearGradient>
          </defs>
          <g className="wave-group">
            <path
              fill="url(#silkGrad1)"
              className="silk-wave silk-wave--1"
              d="M0,120 C300,80 600,160 900,120 C1200,80 1500,140 1800,110 L1800,300 L0,300 Z"
            />
            <path
              fill="url(#silkGrad2)"
              className="silk-wave silk-wave--2"
              d="M0,130 C300,100 600,140 900,130 C1200,100 1500,150 1800,120 L1800,300 L0,300 Z"
            />
            <path
              fill="url(#silkGrad3)"
              className="silk-wave silk-wave--3"
              d="M0,140 C300,120 600,120 900,140 C1200,160 1500,130 1800,150 L1800,300 L0,300 Z"
            />
          </g>
        </svg>
      </section>

      {/* Products Section */}
      <section className="rajmani-products" id="products">
        <div className="container">
          <h2>Our Products</h2>
          <p>Premium quality fabrics for all your textile needs</p>
          <br />
          <div className="products-grid" ref={productsRef}>
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
              <div className="features" ref={aboutRef}>
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
          <br />
          <div className="contact-grid" ref={contactRef}>
            <a href="mailto:info@rajmanifabrics.com" className="contact-card">
              <Mail size={32} />
              <h3>Email Us</h3>
              <p>info@rajmanifabrics.com</p>
            </a>
            <a href="tel:+917845160516" className="contact-card">
              <Phone size={32} />
              <h3>Call Us</h3>
              <p>+91 78451 60516</p>
            </a>
            <a 
              href="https://www.google.com/maps/place/Sri+Rajamani+Fabrics/data=!4m7!3m6!1s0x3ba90795b19a1483:0xdd6a74907bfb2ed0!8m2!3d11.1313575!4d77.3383085!16s%2Fg%2F11vf9z5216!19sChIJgxSasZUHqTsR0C77e5B0at0?authuser=0&hl=en&rclk=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <MapPin size={32} />
              <h3>Visit Us</h3>
              <p>Tiruppur, Tamil Nadu</p>
            </a>
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
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-icons">
                <a href="mailto:info@rajmanifabrics.com" className="footer-contact-link">
                  <Mail size={20} />
                </a>
                <a href="tel:+917845160516" className="footer-contact-link">
                  <Phone size={20} />
                </a>
                <a 
                  href="https://www.google.com/maps/place/Sri+Rajamani+Fabrics/data=!4m7!3m6!1s0x3ba90795b19a1483:0xdd6a74907bfb2ed0!8m2!3d11.1313575!4d77.3383085!16s%2Fg%2F11vf9z5216!19sChIJgxSasZUHqTsR0C77e5B0at0?authuser=0&hl=en&rclk=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link"
                >
                  <MapPin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Raja Mani Fabrics. All rights reserved.</p>
            <p className="developed-by">
              Developed By{' '}
              <a 
                href="https://tcgtech.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tcg-tech-link"
              >
                <span className="tcg-t">T</span>
                <span className="tcg-c">C</span>
                <span className="tcg-g">G</span>
                <span className="tcg-tech"> TECH</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rajmani;