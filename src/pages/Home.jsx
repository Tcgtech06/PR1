import { ArrowRight, Scissors, Shirt, Package, Users, Star, CheckCircle, Layers, Zap, Award, Target, Eye, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import FabricFlow from '../components/FabricFlow';
import GalleryCarousel from '../components/GalleryCarousel';
import './Home.css';

const Home = () => {
  const headingRevealRef = useScrollReveal('.typing-heading-animate', 'focus-in-view', 0.15);
  const visionRef = useScrollReveal('.vision-content', 'scroll-reveal', 0.15);

  // Hero Section is at the top of the page, so it should render immediately on load.
  // We don't need an IntersectionObserver for the hero content.

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
      <section className="hero">
        <FabricFlow />
        <div className="container">
          <div className="hero-content">
              <div className="hero-text">
                  <p className="hero-slogan">Innovating Polyester, Inspiring Fashion.</p>
                  <h1 className="hero-title">
                    Welcome to the Future of Polyester
                  </h1>
                  <p className="hero-description">
                    Pugazh Overseas blends the trusted legacy of Sri Rajamani Fabrics with a modern passion for textile innovation. Since 2020, we have redefined the polyester market by delivering high-performance fabrics that don't compromise on style.
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
        </div>
      </section>

      {/* Features Section */}
      <section className="section features" style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(34, 197, 94, 0.08) 50%, #ffffff 100%)', paddingTop: '70px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: '1' }}>
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
      <section className="stats-section" style={{ background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, #ffffff 50%, rgba(30, 64, 175, 0.05) 100%)', paddingTop: '70px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: '1' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>Our Achievements</h2>
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 15px rgba(30, 64, 175, 0.1)', border: '2px solid rgba(30, 64, 175, 0.15)' }}>
                <div className="stat-number" style={{ color: 'var(--primary-color)' }}>{stat.number}</div>
                <div className="stats-label" style={{ color: 'var(--dark-gray)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="our-vision-section" style={{ background: 'linear-gradient(135deg, var(--light-gray) 0%, #f0f9ff 100%)', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Decorative Background Elements */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'rgba(34, 197, 94, 0.08)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', background: 'rgba(30, 64, 175, 0.06)', borderRadius: '50%' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={visionRef}>
            {/* Header */}
            <div className="vision-header" style={{ textAlign: 'center', marginBottom: '70px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'rgba(34, 197, 94, 0.15)', borderRadius: '50%', marginBottom: '25px' }}>
                <Eye size={50} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h2 className="vision-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '15px' }}>Our Vision & Legacy</h2>
              <div style={{ height: '4px', width: '60px', background: 'linear-gradient(90deg, var(--primary-color), var(--light-green))', margin: '0 auto 15px' }}></div>
              <p className="vision-subtitle" style={{ fontSize: '1.15rem', color: 'var(--dark-gray)' }}>Building the Future of Premium Fabric Excellence</p>
            </div>

            {/* Main Content Grid */}
            <div className="vision-grid">
              {/* Left Column - Story */}
              <div>
                <h3 className="vision-subheading" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Target size={35} style={{ color: 'var(--primary-color)' }} />
                  Our Journey & Purpose
                </h3>
                <div style={{ background: 'rgba(255, 255, 255, 0.9)', border: '2px solid rgba(34, 197, 94, 0.2)', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 20px rgba(34, 197, 94, 0.08)' }}>
                  <p className="vision-text" style={{ color: 'var(--dark-gray)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '20px' }}>
                    From a modest <strong>100 sq. ft. facility</strong> to an impressive <strong>50,000 sq. ft. powerhouse</strong>, Pugazh Overseas has grown into South India's most trusted fabric supplier.
                  </p>
                  <p className="vision-text" style={{ color: 'var(--dark-gray)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '20px' }}>
                    As part of the <strong>Sri Rajamani Fabrics family</strong>, we combine heritage expertise with innovation, delivering <strong>300+ premium polyester varieties</strong> trusted by manufacturers, designers, and retailers nationwide.
                  </p>
                  <p className="vision-text" style={{ color: 'var(--dark-gray)', lineHeight: '1.9', fontSize: '1.05rem' }}>
                    We don't just sell fabrics— we build partnerships. Every piece reflects our commitment to <strong>quality</strong>, <strong>reliability</strong>, and <strong>customer success</strong>.
                  </p>
                </div>
              </div>

              {/* Right Column - Stats & Values */}
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Lightbulb size={35} style={{ color: 'var(--primary-color)' }} />
                  Our Core Values
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { icon: CheckCircle, title: 'Innovation First', desc: 'Constantly evolving with market trends and fabric technology' },
                    { icon: Award, title: 'Quality Obsessed', desc: 'Zero compromise on material excellence and durability' },
                    { icon: Users, title: 'Customer Centric', desc: 'Your satisfaction is our success metric' },
                    { icon: Layers, title: 'Variety Guaranteed', desc: '300+ fabric types for every need and purpose' }
                  ].map((value, idx) => (
                    <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.95)', border: '2px solid rgba(34, 197, 94, 0.15)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '15px', boxShadow: '0 2px 8px rgba(34, 197, 94, 0.06)', transition: 'all 0.3s ease' }}>
                      <value.icon size={35} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                      <div>
                        <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px', fontWeight: '600' }}>{value.title}</h4>
                        <p style={{ color: 'var(--dark-gray)', fontSize: '0.95rem' }}>{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(30, 64, 175, 0.08) 100%)', border: '2px solid rgba(34, 197, 94, 0.25)', borderRadius: '20px', padding: '50px', boxShadow: '0 8px 32px rgba(34, 197, 94, 0.1)' }}>
              <h3 style={{ color: 'var(--text-dark)', textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Our Growth Story</h3>
              <div className="growth-stats-grid">
                {[
                  { number: '13+', label: 'Years of Excellence', icon: <Award size={40} /> },
                  { number: '50,000', label: 'Sq. Ft. Facility', icon: <Layers size={40} /> },
                  { number: '300+', label: 'Fabric Varieties', icon: <Shirt size={40} /> },
                  { number: '1000+', label: 'Satisfied Clients', icon: <Users size={40} /> }
                ].map((stat, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.88)', borderRadius: '15px', padding: '25px', border: '2px solid rgba(34, 197, 94, 0.15)', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.08)' }}>
                    <div style={{ color: 'var(--primary-color)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                    <h4 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '8px' }}>{stat.number}</h4>
                    <p style={{ color: 'var(--dark-gray)', fontSize: '0.95rem' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Gallery Carousel Section */}
      <GalleryCarousel />

    </div>
  );
};

export default Home;
