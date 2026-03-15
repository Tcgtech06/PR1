import { Users, Target, Award, Globe, CheckCircle, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product quality and service delivery."
    },
    {
      icon: <Users size={40} />,
      title: "Customer Focus",
      description: "Our customers' success is our priority, driving everything we do."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Vision",
      description: "Connecting businesses worldwide through reliable trade partnerships."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Continuous Growth",
      description: "Constantly evolving to meet changing market demands and opportunities."
    }
  ];

  const milestones = [
    { year: "2009", event: "Company Founded", description: "Started with a vision to connect global markets" },
    { year: "2012", event: "First International Export", description: "Successfully exported to 5 countries" },
    { year: "2015", event: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification" },
    { year: "2018", event: "Expanded Operations", description: "Opened new facilities and expanded product range" },
    { year: "2021", event: "Digital Transformation", description: "Implemented advanced logistics and tracking systems" },
    { year: "2026", event: "Global Leader", description: "Serving 50+ countries with 500+ satisfied clients" }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Pugazh Overseas</h1>
            <p className="hero-description">
              Building bridges across continents through quality products and trusted partnerships. 
              Your gateway to global trade excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                Founded in 2009, Pugazh Overseas began with a simple yet ambitious vision: 
                to connect businesses across the globe through quality products and reliable service. 
                What started as a small export business has grown into a trusted international 
                trade partner serving clients in over 50 countries.
              </p>
              <p className="story-description">
                Our journey has been marked by continuous growth, innovation, and an unwavering 
                commitment to excellence. We've built lasting relationships with suppliers, 
                manufacturers, and clients worldwide, creating a network that spans continents 
                and cultures.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="story-card">
                <Globe size={80} />
                <h3>Global Presence</h3>
                <p>Connecting Markets Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-content">
            <div className="mv-card">
              <Target size={50} />
              <h3>Our Mission</h3>
              <p>
                To facilitate seamless international trade by providing high-quality products, 
                reliable logistics, and exceptional customer service that exceeds expectations 
                and builds lasting partnerships.
              </p>
            </div>
            <div className="mv-card">
              <Award size={50} />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred global trade partner, known for our 
                commitment to quality, innovation, and sustainable business practices that 
                benefit all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These fundamental principles guide our decisions and shape our relationships with clients and partners.
          </p>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="card value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            Key milestones that have shaped our growth and success over the years.
          </p>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4 className="timeline-event">{milestone.event}</h4>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <h2 className="section-title">Why Choose Pugazh Overseas?</h2>
              <div className="choose-points">
                <div className="choose-point">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Proven Track Record</h4>
                    <p>15+ years of successful international trade operations</p>
                  </div>
                </div>
                <div className="choose-point">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>ISO certified processes ensuring consistent quality</p>
                  </div>
                </div>
                <div className="choose-point">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Global Network</h4>
                    <p>Extensive partnerships across 50+ countries</p>
                  </div>
                </div>
                <div className="choose-point">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Customer Support</h4>
                    <p>24/7 dedicated support for all your trade needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-image">
              <div className="choose-card">
                <Users size={60} />
                <h3>Trusted Partner</h3>
                <p>Your Success is Our Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;