import { ArrowRight, Scissors, Shirt, Package, Users, Star, CheckCircle, Layers, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import FabricFlow from '../components/FabricFlow';
import './Home.css';

const Home = () => {
  const [showHero, setShowHero] = useState(false);
  const heroObserverRef = useRef(null);
  const aboutPointsRef = useScrollReveal('.about-point-animate', 'about-point-visible', 0.2);
  const headingRevealRef = useScrollReveal('.typing-heading-animate', 'focus-in-view', 0.15);
  const visionRef = useScrollReveal('.vision-content', 'scroll-reveal', 0.15);
  const signatureFabricsRef = useScrollReveal('.signature-fabric-card', 'scroll-reveal', 0.05);

  useEffect(() => {
    const heroSection = heroObserverRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHero(false);
          // Shorter delay for smoother transition
          setTimeout(() => setShowHero(true), 30);
        } else {
          setShowHero(false);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly earlier
      }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  const features = [
    { 
      icon: <Layers size={40} />, 
      title: "Premium Fabrics", 
      description: "300+ varieties of high-quality polyester knitted fabrics for diverse applications." 
    },
    { 
      icon: <Award size={40} />, 
      title: "Quality Assurance", 
      description: "Rigorous quality control processes ensure only the finest fabrics reach our clients." 
    },
    { 
      icon: <Package size={40} />, 
      title: "Reliable Supply", 
      description: "Consistent inventory and timely delivery across India through our logistics network." 
    },
    { 
      icon: <Shirt size={40} />, 
      title: "Fabric Expertise", 
      description: "Specialized in uniforms, sportswear, casual wear, and premium suiting materials." 
    }
  ];

  const stats = [
    { number: "300+", label: "Fabric Varieties" },
    { number: "All India", label: "Delivery Network" },
    { number: "14+", label: "Years Experience" },
    { number: "1000+", label: "Satisfied Clients" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroObserverRef}>
        <FabricFlow />
        <div className="container">
          {showHero && (
            <div className="hero-content">
              <div className="hero-text">
                  <p className="hero-slogan">Innovating Polyester, Inspiring Fashion.</p>
                  <h1 className="hero-title">
                    Your Gateway to
                    <span className="gradient-text"> Premium Fabrics</span>
                  </h1>
                  <p className="hero-description">
                    Leading polyester knitted fabric traders in South India. We offer 300+ varieties 
                    of premium quality fabrics with All India delivery through our trusted logistics network.
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
                  <Layers size={80} className="hero-icon" />
                  <h3>Premium Fabrics</h3>
                  <p>300+ Polyester Varieties</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div ref={headingRevealRef}>
            <h2 className="section-title typing-heading-animate">Why Choose Pugazh Overseas?</h2>
          </div>
          <p className="section-subtitle">
            We provide comprehensive export solutions with a commitment to excellence and customer satisfaction.
          </p>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div className="feature-icon">{feature.icon}</div>
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
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '20px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }} ref={visionRef}>
            <h2 className="section-title vision-content">Our Vision</h2>
            <p className="section-subtitle vision-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--dark-gray)' }}>
              We aim to be a benchmark in the industry by consistently delivering fabrics that combine <strong>innovation</strong>, <strong>durability</strong>, and <strong>style</strong>. Each collection reflects our commitment to excellence and our understanding of evolving market trends.
            </p>
          </div>
        </div>
      </section>

      {/* Our Signature Fabrics Section */}
      <section className="section" style={{ background: 'var(--light-gray)', paddingTop: '20px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">Our Signature Fabrics</h2>
            <p className="section-subtitle">
              We specialize in distinctive polyester fabrics that stand out for their texture, finish, and versatility:
            </p>
          </div>
          <div className="grid grid-4" ref={signatureFabricsRef}>
            {[
              { name: 'Valentino Crepe', image: '/valentino crepe.jpg' },
              { name: 'Super Tensile', image: '/super tensile.jpg' },
              { name: 'Monalisa', image: '/Monalisa.jpg' },
              { name: 'Double Bull', image: '/Double Bull.jpg' },
              { name: 'Road Rib', image: '/Road Rib.jpg' },
              { name: 'Mars (Baby Pique) with Plain & Jacquard Collar Cuff', image: '/Mars (Baby Pique) with Plain & Jacquard Collar Cuff.jpg' },
              { name: 'Mars Melange with Melange Collar Cuff', image: '/Mars Melange with Melange Collar Cuff.jpg' },
              { name: 'Micro 4 Way Lycra 255 & 230 GSM', image: '/Micro 4 Way Lycra 255 & 230 GSM.jpg' },
              { name: '4 Way Lycra Twill Spandex', image: '/4 Way Lycra Twill Spandex.jpg' },
              { name: 'TinTin Spandex', image: '/TinTin Spandex.jpg' },
              { name: 'Knitted Corduroy', image: '/Knitted Corduroy.jpg' },
              { name: '2 Way', image: '/2 way.jpg' },
            ].map((fabric, index) => (
              <div key={index} className="card signature-fabric-card">
                <div className="fabric-image-container">
                  <img src={fabric.image} alt={fabric.name} className="fabric-image" />
                </div>
                <div className="fabric-name">{fabric.name}</div>
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
                Building on a legacy of over 14 years in the textile industry, Pugazh Overseas 
                was established in <strong>2019</strong> as a trusted partner for businesses seeking quality 
                products and reliable export services.
              </p>
              <div className="about-points" ref={aboutPointsRef}>
                <div className="about-point about-point-animate" style={{ animationDelay: '0s' }}>
                  <CheckCircle size={20} />
                  <span>ISO Certified Quality Management</span>
                </div>
                <div className="about-point about-point-animate" style={{ animationDelay: '0.3s' }}>
                  <CheckCircle size={20} />
                  <span>Extensive Global Network</span>
                </div>
                <div className="about-point about-point-animate" style={{ animationDelay: '0.6s' }}>
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
                <Scissors size={60} className="about-icon" />
                <h3>Fabric Excellence</h3>
                <p>Precision in Every Thread</p>
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
