import { Award, Palette, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import './About.css';

const About = () => {
  const fabrics = [
    { name: 'Super Tencile (Indian Tencile)', image: '/tencel.jpeg' },
    { name: 'Valentino Crepe', image: '/valentino crepe.jpg' },
    { name: 'Monalisa', image: '/Monalisa.jpg' },
    { name: 'Double Bull', image: '/Double Bull.jpg' },
    { name: 'Road Rib', image: '/Road Rib.jpg' },
    { name: 'Mars (Baby Pique) with Plain & Jacquard Collar Cuff', image: '/Mars (Baby Pique) with Plain & Jacquard Collar Cuff.jpg' },
    { name: 'Mars Melange with Melange Collar Cuff', image: '/Mars Melange with Melange Collar Cuff.jpg' },
    { name: 'Micro 4 Way Lycra 255 & 230 GSM', image: '/Micro 4 Way Lycra 255 & 230 GSM.jpg' },
    { name: '4 Way Lycra Twill Spandex', image: '/4 Way Lycra Twill Spandex.jpg' },
    { name: 'TinTin Spandex', image: '/TinTin Spandex.jpg' },
    { name: 'Knitted Corduroy', image: '/Knitted Corduroy.jpg' },
    { name: '2 Way', image: '/2 way.jpg' }
  ];

  const whatSetsUsApart = [
    {
      icon: <Award size={50} />,
      title: 'Unique Designs',
      description: 'Exclusive patterns and textures tailored to modern fashion needs.'
    },
    {
      icon: <Palette size={50} />,
      title: 'Color Standards',
      description: 'Vibrant, lasting shades that elevate every garment.'
    },
    {
      icon: <CheckCircle size={50} />,
      title: 'Quality Assurance',
      description: 'Fabrics engineered for strength, comfort, and longevity.'
    }
  ];

  return (
    <div className="about">
      <HeroSection
        className="about-hero"
        title="Pugazh Overseas Polyester Market Innovators"
        description="Building bridges across continents through quality products and trusted partnerships. Your gateway to global trade excellence."
      />

      {/* Heritage & Vision Section */}
      <section className="section heritage-vision-section">
        <div className="container">
          <div className="heritage-vision-content">
            {/* Heritage */}
            <div className="heritage-card">
              <h2 className="heritage-title">Our Heritage</h2>
              <p className="heritage-text">
                Founded in 2020, Pugazh Overseas emerged from the legacy of <strong>Sri Rajamani Fabrics</strong>, a trusted name with deep insight into the pulse of polyester fabric demand. With this foundation, we set out to redefine standards in the polyester market by introducing unique designs, colors, and uncompromising quality.
              </p>
            </div>

            {/* Vision */}
            <div className="vision-card">
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-text">
                We aim to be a benchmark in the industry by consistently delivering fabrics that combine innovation, durability, and style. Each collection reflects our commitment to excellence and our understanding of evolving market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Fabrics Section */}
      <section className="section signature-fabrics-section">
        <div className="container">
          <div className="signature-fabrics-content">
            <h2 className="section-title">Our Signature Fabrics</h2>
            <p className="section-subtitle">
              We specialize in distinctive polyester fabrics that stand out for their texture, finish, and versatility:
            </p>
            <div className="fabrics-grid">
              {fabrics.map((fabric, index) => (
                <div key={index} className="fabric-item">
                  <div className="fabric-image-wrapper">
                    <img src={fabric.image} alt={fabric.name} className="fabric-image" />
                  </div>
                  <span className="fabric-name">{fabric.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section what-sets-us-apart-section">
        <div className="container">
          <div className="what-sets-content">
            <h2 className="section-title">What Sets Us Apart</h2>
            <div className="apart-items-grid">
              {whatSetsUsApart.map((item, index) => (
                <div key={index} className="apart-item">
                  <div className="apart-icon">
                    {item.icon}
                  </div>
                  <h3 className="apart-title">{item.title}</h3>
                  <p className="apart-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
