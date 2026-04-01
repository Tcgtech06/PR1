import { Mail, Phone, MapPin, Globe, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-company-name">Pugazh Overseas</h2>
            <p className="footer-description">
              We are one of the leading Polyester Knitted fabric sellers in South India. We deal with various kinds of polyester knitted fabrics and maintain 300+ varieties. We supply accessories and deliver goods all over India through our logistic partners.
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--primary-color)', opacity: 0.9, fontWeight: '600' }}>
              GSTIN/UIN: 33AHSPL3761C1ZD
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1BESbGZsez/" target="_blank" rel="noopener noreferrer" className="social-link" title="Follow us on Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/p/DWkoL4REiNn/?igsh=MTAxdTRldWl6a2IwOQ==" target="_blank" rel="noopener noreferrer" className="social-link" title="Follow us on Instagram">
                <Instagram size={20} />
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
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <a href="mailto:pugazhoverseas@gmail.com" className="contact-item" title="Email Us">
                <Mail size={20} />
              </a>
              <a href="tel:+917845160516" className="contact-item" title="Call Us">
                <Phone size={20} />
              </a>
              <a href="https://maps.app.goo.gl/v9Ykq4zwqHFQegdKA" target="_blank" rel="noopener noreferrer" className="contact-item" title="Find Us">
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Pugazh Overseas. All rights reserved.</p>
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
  );
};

export default Footer;