import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Instagram, TrendingUp, Users, Compass, Heart, Award, ShieldCheck } from 'lucide-react';
import SiteSwitcher from '../components/SiteSwitcher';
import HamburgerIcon from '../components/HamburgerIcon';
import useScrollReveal from '../hooks/useScrollReveal';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import './Rajmani.css';

const Rajmani = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [journeyTyping, setJourneyTyping] = useState(false);
  const [typedText, setTypedText] = useState('');

  const heroImages = [img1, img2, img3, img4];

  const journeyFullText = `Sri Rajamani Fabrics was born from the vision of a young entrepreneur, Mr. Mahalingam, whose determination, dedication, and commitment laid the foundation for what we are today..

With just ₹50,000 and a small team, he set out to create a business that understood the needs of its clients and delivered fabrics with quality, reliability, and satisfaction.

From those humble beginnings, we have grown into one of the leading polyester fabric sellers in South India. Our success is built on listening to our customers, fulfilling their requirements with care, and ensuring that every product we deliver adds value to their lives.`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal hooks for different sections
  const productsRef = useScrollReveal('.product-card', 'scroll-reveal', 0.1);
  const contactRef = useScrollReveal('.contact-card', 'scroll-reveal', 0.1);
  const impactRef = useScrollReveal('.impact-content > *', 'scroll-reveal', 0.1);
  const horizonsRef = useScrollReveal('.horizons-content > *', 'scroll-reveal', 0.1);
  const valuesRef = useScrollReveal('.value-card', 'scroll-reveal', 0.1);

  // Journey section typing animation
  const journeyRef = useRef(null);

  useEffect(() => {
    const journeySection = journeyRef.current;
    if (!journeySection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !journeyTyping) {
          setJourneyTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(journeySection);
    return () => observer.disconnect();
  }, [journeyTyping]);

  // Typing effect
  useEffect(() => {
    if (!journeyTyping) return;

    let currentIndex = 0;
    const typingSpeed = 15; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= journeyFullText.length) {
        setTypedText(journeyFullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [journeyTyping]);

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
                <img src="/raj.jpeg" alt="Raja Mani Fabrics Logo" className="logo-image" />
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

      {/* Marquee Animation */}
      <div className="marquee-container">
        <div className="marquee-content">
          <img src="/slide.jpeg" alt="Fabric showcase" className="marquee-image" />
          <img src="/slide.jpeg" alt="Fabric showcase" className="marquee-image" />
          <img src="/slide.jpeg" alt="Fabric showcase" className="marquee-image" />
          <img src="/slide.jpeg" alt="Fabric showcase" className="marquee-image" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="rajmani-hero">
        {/* Text content */}
        <div className="hero-content">
          <h1 className="hero-title">Raja Mani Fabrics</h1>
          <h2 className="hero-subtitle">Weaving Dreams into Reality</h2>
          <p className="hero-description">
            From humble beginnings in 2012 to becoming South India's trusted fabric partner, 
            we serve millions with colorful, durable, and affordable polyester fabrics. 
            Our journey is built on dedication, quality, and making fashion dreams accessible to all.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">14+</span>
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
          <p>Our wide range of fabrics caters to diverse needs and styles, including:</p>
          <br />
          <div className="products-grid" ref={productsRef}>
            {[
              {
                title: "Superpoly Series",
                items: "Superpoly 180 & 220 GSM",
                image: "/super poly series.jpeg"
              },
              {
                title: "Lycra & Spandex",
                items: "2 Way Print, 2 Way Plain, 4 Way Lycra",
                image: "/Lycra & Spandex.jpg"
              },
              {
                title: "Specialized Textures",
                items: "Diamond (Waffle), Kitkat Matty Print, Scuba Sandwich",
                image: "/Specialized Textures.jpg"
              },
              {
                title: "Performance Knitted",
                items: "Dot Knit Grindle, Creape Non-Spandex",
                image: "/Performance Knitted.jpg"
              },
              {
                title: "Non-Spandex Classics",
                items: "Karara Non-Spandex, Tin Tin Non-Spandex, Twill Non-Spandex",
                image: "/Non-Spandex Classics.jpg"
              },
              {
                title: "Polyester Basics",
                items: "PP 90, 110 & 140, NS Lycra",
                image: "/Polyester Basics.jpg"
              },
              {
                title: "Knitted Specialties",
                items: "Saleena Dot Knit, Lacosta, Honey Comb, Micro Nirmal Knit",
                image: "/Knitted Specialties.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.items}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '50px', fontSize: '1.1rem', fontWeight: 500, color: 'var(--rajmani-blue)' }}>
            Each product is crafted with precision and care, ensuring long-lasting quality and vibrant appeal.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="rajmani-about" id="about" ref={journeyRef}>
        <div className="container">
          <h2 className="journey-title">Our Journey</h2>
          <div className="journey-layout">
            <div className="journey-content">
              {journeyTyping && (
                <>
                  <p className="journey-typed-text journey-para-1">
                    {typedText.slice(0, 177)}
                    {typedText.length < 177 && typedText.length > 0 && (
                      <span className="typing-cursor">|</span>
                    )}
                  </p>
                  {typedText.length >= 177 && (
                    <p className="journey-typed-text journey-para-2">
                      {typedText.slice(179, 355)}
                      {typedText.length < 355 && (
                        <span className="typing-cursor">|</span>
                      )}
                    </p>
                  )}
                  {typedText.length >= 355 && (
                    <p className="journey-typed-text journey-para-3">
                      {typedText.slice(357)}
                      {typedText.length < journeyFullText.length && (
                        <span className="typing-cursor">|</span>
                      )}
                    </p>
                  )}
                </>
              )}

            </div>
            
            {/* Timeline - Desktop Only */}
            <div className="journey-timeline">
              <div className="timeline-line"></div>
              <div className={`timeline-item ${typedText.length >= 50 ? 'timeline-visible' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2012</div>
                  <div className="timeline-text">Founded by Mr. Mahalingam</div>
                </div>
              </div>
              <div className={`timeline-item ${typedText.length >= 237 ? 'timeline-visible' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">Starting Capital</div>
                  <div className="timeline-text">₹50,000 with small team</div>
                </div>
              </div>
              <div className={`timeline-item ${typedText.length >= 429 ? 'timeline-visible' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">Today</div>
                  <div className="timeline-text">Leading seller in Tiruppur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="rajmani-impact">
        <div className="container">
          <div className="impact-content" ref={impactRef}>
            <div className="impact-text">
              <h2 className="impact-title">Our Impact</h2>
              <p className="impact-text-1">
                We specialize in fabrics for the domestic market, serving millions of people across the region. 
                Nearly 70% of the population relies on garments made from our fabrics — colorful, durable, 
                and affordable materials that bring confidence and comfort to everyday life.
              </p>
              <p className="impact-text-2">
                For us, this is more than business; it is a way of participating in the fashion dreams 
                of common people and making them accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizons Section */}
      <section className="rajmani-horizons">
        <div className="container">
          <div className="horizons-content" ref={horizonsRef}>
            <div className="horizons-text">
              <h2 className="horizons-title">Expanding Horizons</h2>
              <p className="horizons-text-1">
                While our roots remain strong in the domestic market, we have also taken bold steps into the 
                premium fashion industry. With the launch of <strong>Pugazh Overseas</strong>, we entered the 
                high-value fashion world, bringing the same moral values, dedication, and customer-first 
                approach that have defined us from the start.
              </p>
              <p className="horizons-text-2">
                This expansion allows us to serve not only everyday wear but also premium fashion needs, 
                making Sri Rajamani Fabrics a trusted name across multiple segments of the textile industry. 
                We are proud to see our vision grow and encompass a wider range of high-end fashion requirements.
              </p>
              <Link to="/" className="horizons-link">
                Explore Pugazh Overseas <Compass size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="rajmani-values" id="values">
        <div className="container">
          <h2 className="section-header">Our Values</h2>
          <div className="values-grid" ref={valuesRef}>
            <div className="value-card">
              <Award size={40} />
              <h3>Commitment to Quality</h3>
              <p>Every fabric we produce meets high standards of durability and design.</p>
            </div>
            <div className="value-card">
              <Heart size={40} />
              <h3>Customer Satisfaction</h3>
              <p>We believe in building long-term relationships by fulfilling client needs with care.</p>
            </div>
            <div className="value-card">
              <Compass size={40} />
              <h3>Innovation & Growth</h3>
              <p>From domestic fabrics to premium fashion, we continuously evolve to meet changing demands.</p>
            </div>
            <div className="value-card">
              <ShieldCheck size={40} />
              <h3>Integrity</h3>
              <p>Our journey is guided by honesty, responsibility, and respect for our customers and partners.</p>
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
          <div style={{ 
            background: 'rgba(27, 107, 79, 0.1)', 
            display: 'inline-block', 
            padding: '8px 20px', 
            borderRadius: '20px', 
            marginBottom: '30px',
            border: '1px solid rgba(27, 107, 79, 0.2)'
          }}>
            <span style={{ fontWeight: '600', color: 'var(--rajmani-blue)' }}>GSTIN/UIN: 33AUGPM1373E1ZX</span>
          </div>
          <br />
          <div className="contact-grid" ref={contactRef}>
            <a 
              href="https://maps.app.goo.gl/KfaiXPzUsxBGfBxb7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <MapPin size={32} />
              <h3>Visit Us</h3>
              <div style={{ textAlign: 'center', color: 'var(--dark-gray)', lineHeight: '1.6' }}>
                <p style={{ fontWeight: '700', color: 'var(--rajmani-blue)' }}>SRI RAJAMANI FABRICS</p>
                <p>98/1, Pichampalaym Ittari Road,</p>
                <p>Tiruppur - 641602</p>
              </div>
            </a>
            <div className="contact-card numbers-card">
              <Phone size={32} />
              <h3>Quick Contacts</h3>
              <div className="phone-list">
                <div className="phone-item">
                  <span className="phone-label">MD:</span>
                  <a href="tel:+919095958484" className="phone-link">90 9595 8484</a>
                </div>
                <div className="phone-item">
                  <span className="phone-label">Accounts:</span>
                  <a href="tel:+918248208186" className="phone-link">8248 20 8186</a>
                </div>
                <div className="phone-item">
                  <span className="phone-label">Order Enquiry:</span>
                  <div className="phone-links">
                    <a href="https://wa.me/918122988599" className="phone-link">8122 988 599</a>
                    <span className="phone-sep">/</span>
                    <a href="https://wa.me/917868981707" className="phone-link">78 68 98 1707</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="mailto:info@rajmanifabrics.com" className="contact-card">
              <Mail size={32} />
              <h3>Email Us</h3>
              <p>info@rajmanifabrics.com</p>
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
                Premium textile solutions with over 14 years of excellence in fabric manufacturing and supply.
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
                  href="https://maps.app.goo.gl/KfaiXPzUsxBGfBxb7" 
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