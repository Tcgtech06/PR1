import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Pugazh Overseas Logo" className="logo-image" />
            </div>
            <p className="footer-description">
              We are one of the leading Polyester Knitted fabric sellers in South India. We deal with various kinds of polyester knitted fabrics and maintain 300+ varieties. We supply accessories and deliver goods all over India through our logistic partners.
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
              <a href="mailto:pugazhoverseas@gmail.com" className="contact-item" title="Email Us">
                <Mail size={20} />
              </a>
              <a href="tel:+917845160516" className="contact-item" title="Call Us">
                <Phone size={20} />
              </a>
              <a href="https://maps.app.goo.gl/5Z3gwoWfbJcZo2WS7?g_st=awb" target="_blank" rel="noopener noreferrer" className="contact-item" title="Find Us">
                <MapPin size={20} />
              </a>
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