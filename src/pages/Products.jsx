import { Package, Leaf, Shirt, Gem, Coffee, Wheat, Activity, MessageSquare } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import './Products.css';

const Products = () => {
  const WHATSAPP_NUMBER = "+91 78451 60516";

  const handleWhatsAppInquiry = (productName) => {
    const message = `Hello Pugazh Overseas, I am interested in ${productName}. Can you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  const productCategories = [
    {
      icon: <Leaf size={40} />,
      title: "Agricultural Products",
      description: "Fresh spices, grains, pulses, and organic produce sourced directly from farmers.",
      products: ["Turmeric", "Black Pepper", "Cardamom", "Rice", "Lentils", "Tea Leaves"]
    },
    {
      icon: <Shirt size={40} />,
      title: "Textiles & Garments",
      description: "High-quality cotton fabrics, traditional wear, and modern fashion garments.",
      products: ["Cotton Fabrics", "Silk Sarees", "Casual Wear", "Traditional Clothing", "Home Textiles"]
    },
    {
      icon: <Gem size={40} />,
      title: "Handicrafts & Jewelry",
      description: "Exquisite handcrafted items and traditional jewelry pieces.",
      products: ["Wooden Crafts", "Metal Artifacts", "Traditional Jewelry", "Decorative Items"]
    },
    {
      icon: <Coffee size={40} />,
      title: "Food & Beverages",
      description: "Premium quality processed foods, beverages, and specialty items.",
      products: ["Instant Mixes", "Pickles", "Snacks", "Beverages", "Condiments"]
    },
    {
      icon: <Package size={40} />,
      title: "Industrial Goods",
      description: "Quality industrial products and machinery components.",
      products: ["Auto Parts", "Machinery", "Tools", "Electronic Components"]
    },
    {
      icon: <Wheat size={40} />,
      title: "Organic Products",
      description: "Certified organic products for health-conscious consumers worldwide.",
      products: ["Organic Spices", "Natural Oils", "Herbal Products", "Organic Grains"]
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
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">
            We specialize in various product categories, ensuring quality and authenticity in every shipment.
          </p>
          
          <div className="grid grid-3">
            {productCategories.map((category, index) => (
              <div key={index} className="card product-card">
                <div className="product-icon">
                  {category.icon}
                </div>
                <h3 className="product-title">{category.title}</h3>
                <p className="product-description">{category.description}</p>
                <div className="product-list">
                  <h4>Key Products:</h4>
                  <ul>
                    {category.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="whatsapp-inquiry-btn"
                  onClick={() => handleWhatsAppInquiry(category.title)}
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
          
          <div className="grid grid-3">
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
                  onClick={() => handleWhatsAppInquiry(fabric.name)}
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
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Interested in Our Products?</h2>
            <p className="cta-description">
              Contact us for detailed product catalogs, pricing, and custom requirements.
            </p>
            <a href="/contact" className="btn btn-primary btn-large">
              Request Product Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;