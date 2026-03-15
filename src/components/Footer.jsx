import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Globe className="logo-icon" />
              <span>Pugazh Overseas</span>
            </div>
            <p className="footer-description">
              Your trusted partner for international trade and export services. 
              Connecting businesses globally with quality products and reliable service.
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
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Export Services</a></li>
              <li><a href="#">Import Solutions</a></li>
              <li><a href="#">Logistics Support</a></li>
              <li><a href="#">Quality Assurance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@pugazhoverseas.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Pugazh Overseas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;