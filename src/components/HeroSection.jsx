import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ className = '', title, description }) => {
  const heroRef = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(false);
        requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`hero-section ${className}`} ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          {show && <>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
          </>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
