import { Users, Target, Award, Globe, CheckCircle, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
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

  return (
    <div className="about">
      <HeroSection
        className="about-hero"
        title="About Pugazh Overseas"
        description="Building bridges across continents through quality products and trusted partnerships. Your gateway to global trade excellence."
      />

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">About Us</h2>
              <p className="story-description">
                As one of South India's premier <strong>Polyester Knitted fabric</strong> suppliers, our journey began with a simple mission: to deliver exceptional quality textiles to businesses nationwide. Over the years, we have grown into a trusted partner for school and corporate uniforms, sportswear, casual wear, and premium suiting.
              </p>
              <p className="story-description">
                Our extensive catalog features over 300 varieties of premium textiles. From versatile <strong>Micro</strong> and <strong>Spun Polyester fabrics</strong> to our celebrated spandex and lycra collections, we ensure every woven thread meets world-class standards. We also specialize in high-performance sublimation fabrics like <strong>Dot-knit</strong> and <strong>Honey-Comb</strong>.
              </p>
              <p className="story-description">
                Beyond standard offerings, we pride ourselves on delivering bespoke solutions. Whether you need custom <strong>Collar Cuffs</strong>, essential accessories like <strong>Zippers</strong> and <strong>Elastics</strong>, or timely nation-wide delivery through our dedicated logistics network, Pugazh Overseas is your complete textile sourcing partner.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">300+</span>
                  <span className="stat-label">Fabric Varieties</span>
                </div>
                <div className="stat">
                  <span className="stat-number">All India</span>
                  <span className="stat-label">Delivery</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Custom</span>
                  <span className="stat-label">Specifications</span>
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

      {/* About MD Section */}
      <section className="section story-section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="story-content">
            <div className="story-image" style={{ order: -1 }}>
              <div className="story-card" style={{ background: 'var(--white)' }}>
                <Users size={80} />
                <h3>Founder's Vision</h3>
                <p>A True Entrepreneurial Spirit</p>
              </div>
            </div>
            <div className="story-text">
              <h2 className="section-title">About Our Managing Director</h2>
              <p className="story-description">
                At the young age of 23, driven by an unwavering entrepreneurial spirit, Mr. Mahalingam, CEO of Sri Rajamani Fabrics & Pugazh Overseas, embarked on a remarkable journey with a close friend. Armed with a dream and determination, they set up a modest service-based business in a humble 100 sq.ft building. Little did they know that this was just the beginning of an extraordinary success story that would captivate the hearts of many.
              </p>
              <p className="story-description">
                Within a mere two years, their venture not only flourished but flourished exponentially! Witnessing the tremendous growth, they took a bold step and opened a new branch, expanding their reach and influence. To diversify their offerings, they also ventured into small-scale trading in the same service field, demonstrating their adaptability and foresight.
              </p>
              <p className="story-description">
                But Mr. Mahalingam was not content with resting on his laurels. Instead, he dared to dream bigger and bolder. Recognizing an untapped opportunity, he took a daring leap into the unknown, establishing a trading business that directly competed with the leading concern in the market. This audacious move was met with skepticism, but he knew that great rewards come to those who embrace calculated risks.
              </p>
              <p className="story-description">
                Through sheer resilience, hard work, and an unwavering commitment to quality, Mr. Mahalingam's venture soon blossomed into a roaring success. Today, he stands tall as one of Tamil Nadu's foremost polyester fabric sellers, a name synonymous with trust, excellence, and innovation.
              </p>
              <p className="story-description" style={{ fontWeight: 600, color: 'var(--primary-blue)' }}>
                From the modest 100 sq.ft building to an impressive 20,000 sq.ft facility, Mr. Mahalingam's journey is an awe-inspiring testament to the power of vision and perseverance.
              </p>
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

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <h2 className="section-title typing-heading">Why Choose Pugazh Overseas?</h2>
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