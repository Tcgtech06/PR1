import { Package, Leaf, Shirt, Gem, Coffee, Wheat, Activity, MessageSquare } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import useScrollReveal from '../hooks/useScrollReveal';
import './Products.css';

const Products = () => {
  // Scroll reveal hooks for different sections
  const productsGridRef = useScrollReveal('.product-card', 'scroll-reveal', 0.1);
  const featuresRef = useScrollReveal('.feature-card', 'scroll-reveal', 0.1);

  const WHATSAPP_NUMBER = "+91 78451 60516";

  const handleWhatsAppInquiry = (productName, productDetails = null) => {
    let message = `Hello Pugazh Overseas,\n\nI am interested in *${productName}*.\n`;
    
    if (productDetails) {
      if (productDetails.description) {
        message += `\nDescription: ${productDetails.description}\n`;
      }
      if (productDetails.specs) {
        message += `\nSpecifications:\n`;
        productDetails.specs.forEach(spec => {
          message += `• ${spec.label}: ${spec.value}\n`;
        });
      }
      if (productDetails.details) {
        message += `\nDetails: ${productDetails.details}\n`;
      }
      if (productDetails.products) {
        message += `\nKey Products: ${productDetails.products.join(', ')}\n`;
      }
    }
    
    message += `\nCan you please provide more details and pricing information?\n\nThank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  const productCategories = [
    {
      image: "/Mars Melange with Melange Collar Cuff.jpg",
      title: "Mars Melange (Baby Pique)",
      fabricName: "Mars Melange (Baby Pique)",
      gsm: "195-200",
      width: "44\" Tubular",
      colours: "20+",
      description: "Premium quality Mars Melange fabric with baby pique texture, perfect for polo shirts and casual wear."
    }
  ];

  const fabricSpecifications = [
    {
      name: "Micro Polyester Fabric",
      icon: <Shirt size={40} />,
      specs: [
        { label: "Width", value: "58 / 60 inches" },
        { label: "GSM", value: "95 – 100 GSM" },
        { label: "Content", value: "100% Polyester" },
        { label: "Colours", value: "50+ Shades" }
      ],
      details: "Soft, smooth matte finish. Lightweight and breathable.",
      description: "Ideal for school & corporate shirts, and formal trousers with consistent dyeing quality."
    },
    {
      name: "Spun Polyester Fabric",
      icon: <Package size={40} />,
      specs: [
        { label: "Width", value: "58 / 60 inches" },
        { label: "GSM", value: "120 – 135 GSM" },
        { label: "Content", value: "100% Spun Poly" },
        { label: "Colours", value: "30+ Shades" }
      ],
      details: "Wrinkle-resistant, durable weave. Cotton-like feel.",
      description: "Suitable for suiting fabrics, formal trousers, and heavy-duty workwear uniforms."
    },
    {
      name: "Lycra / Spandex Fabric",
      icon: <Activity size={40} />,
      specs: [
        { label: "Width", value: "58 / 60 inches" },
        { label: "GSM", value: "180 – 220 GSM" },
        { label: "Content", value: "92% Poly, 8% Lycra" },
        { label: "Colours", value: "40+ Shades" }
      ],
      details: "4-way stretchable, high elasticity. Recovery and comfort.",
      description: "Perfect for sportswear, gym wear, cycling shorts, and athletic performance uniforms."
    },
    {
      name: "Dot-Knit Sublimation",
      icon: <Activity size={40} />,
      specs: [
        { label: "Width", value: "58 / 60 inches" },
        { label: "GSM", value: "130 – 145 GSM" },
        { label: "Content", value: "100% Polyester" },
        { label: "Colours", value: "White (Sublimation Ready)" }
      ],
      details: "High whiteness index. Vivid sublimation prints.",
      description: "Used extensively for custom sports jerseys and team promotional wear."
    },
    {
      name: "Honey-Comb Fabric",
      icon: <Gem size={40} />,
      specs: [
        { label: "Width", value: "58 / 60 inches" },
        { label: "GSM", value: "140 – 160 GSM" },
        { label: "Content", value: "100% Polyester" },
        { label: "Colours", value: "20+ Shades" }
      ],
      details: "Textured honeycomb surface. Moisture-wicking.",
      description: "Premium breathable fabric used for polo shirts and performance sportswear."
    },
    {
      name: "Collar Cuffs",
      icon: <Shirt size={40} />,
      specs: [
        { label: "Width", value: "1 – 4 Inches (Custom)" },
        { label: "GSM", value: "—" },
        { label: "Content", value: "Polyester / Poly Blend" },
        { label: "Colours", value: "100+ Shades" }
      ],
      details: "Ready-to-use ribbed collar and cuff pairs.",
      description: "Available in ribbed and flat-knit styles with consistent colour matching across batches."
    }
  ];

  return (
    <div className="products">
      <HeroSection
        className="products-hero"
        title="Our Product Range"
        description="Discover our extensive collection of premium quality products, carefully sourced and exported to meet international standards."
      />

      {/* Products Categories Grid */}
      <section className="section products-grid">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Premium quality polyester knitted fabrics for all your textile needs.
          </p>
          
          <div className="grid grid-3" ref={productsGridRef}>
            {productCategories.map((product, index) => (
              <div key={index} className="card product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-specs">
                  <div className="spec-row">
                    <span className="spec-label">Fabric Name:</span>
                    <span className="spec-value">{product.fabricName}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">GSM:</span>
                    <span className="spec-value">{product.gsm}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Width:</span>
                    <span className="spec-value">{product.width}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Colours:</span>
                    <span className="spec-value">{product.colours}</span>
                  </div>
                </div>
                <p className="product-description">{product.description}</p>
                <button 
                  className="whatsapp-inquiry-btn"
                  onClick={() => handleWhatsAppInquiry(product.title, {
                    description: `Fabric Name: ${product.fabricName}\nGSM: ${product.gsm}\nWidth: ${product.width}\nColours: ${product.colours}\n\n${product.description}`
                  })}
                >
                  <MessageSquare size={18} />
                  Enquire on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Specifications Cards Grid */}
      <section className="section fabric-specs-section">
        <div className="container">
          <h2 className="section-title">Fabric Specifications</h2>
          <p className="section-subtitle">
            Detailed technical specifications for our most popular polyester knitted fabrics.
          </p>
          
          <div className="grid grid-3" ref={featuresRef}>
            {fabricSpecifications.map((fabric, index) => (
              <div key={index} className="card product-card fabric-spec-card">
                <div className="product-icon">
                  {fabric.icon}
                </div>
                <h3 className="product-title">{fabric.name}</h3>
                
                <div className="spec-details-list">
                  {fabric.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="spec-item">
                      <span className="spec-label">{spec.label}:</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <p className="product-description" style={{ marginTop: '15px' }}>
                  <strong>{fabric.details}</strong>
                  <br />
                  {fabric.description}
                </p>
                <button 
                  className="whatsapp-inquiry-btn"
                  onClick={() => handleWhatsAppInquiry(fabric.name, {
                    specs: fabric.specs,
                    details: fabric.details,
                    description: fabric.description
                  })}
                >
                  <MessageSquare size={18} />
                  Enquire on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default Products;