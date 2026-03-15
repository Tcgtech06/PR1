import { ArrowRight, Globe, Shield, Truck, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Globe size={40} />,
      title: "Global Reach",
      description: "Connecting businesses across continents with our extensive international network."
    },
    {
      icon: <Shield size={40} />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure only the finest products reach our clients."
    },
    {
      icon: <Truck size={40} />,
      title: "Reliable Logistics",
      description: "Efficient shipping and logistics solutions for timely delivery worldwide."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to providing exceptional service and support."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Products Exported" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your Gateway to 
                <span className="gradient-text"> Global Trade</span>
              </h1>
              <p className="hero-description">
                Pugazh Overseas connects businesses worldwide with premium quality products 
                and reliable export services. Experience seamless international trade with 
                our trusted expertise.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Explore Products <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <Globe size={80} className="hero-icon" />
                <h3>Worldwide Shipping</h3>
                <p>Fast & Secure Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Pugazh Overseas?</h2>
          <p className="section-subtitle">
            We provide comprehensive export solutions with a commitment to excellence and customer satisfaction.
          </p>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Pugazh Overseas</h2>
              <p className="about-description">
                With over 15 years of experience in international trade, Pugazh Overseas 
                has established itself as a trusted partner for businesses seeking quality 
                products and reliable export services.
              </p>
              <div className="about-points">
                <div className="about-point">
                  <CheckCircle size={20} />
                  <span>ISO Certified Quality Management</span>
                </div>
                <div className="about-point">
                  <CheckCircle size={20} />
                  <span>Extensive Global Network</span>
                </div>
                <div className="about-point">
                  <CheckCircle size={20} />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <div className="about-card">
                <Star size={60} className="about-icon" />
                <h3>Excellence in Service</h3>
                <p>Committed to Quality & Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Expand Your Business Globally?</h2>
            <p className="cta-description">
              Let us help you reach new markets with our comprehensive export solutions.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Started Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;