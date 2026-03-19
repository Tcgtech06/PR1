import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import SiteSwitcher from './SiteSwitcher';
import HamburgerIcon from './HamburgerIcon';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <div className="logo-container">
              <img src={logo} alt="Pugazh Overseas Logo" className="logo-image" />
            </div>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
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
  );
};

export default Navbar;