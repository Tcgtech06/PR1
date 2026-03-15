import { Package, Leaf, Shirt, Gem, Coffee, Wheat } from 'lucide-react';
import './Products.css';

const Products = () => {
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

  const features = [
    "Quality Certified Products",
    "Competitive Pricing",
    "Custom Packaging",
    "Timely Delivery",
    "Export Documentation",
    "Quality Assurance"
  ];

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Product Range</h1>
            <p className="hero-description">
              Discover our extensive collection of premium quality products, 
              carefully sourced and exported to meet international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Our Products Stand Out</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <Package size={24} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2 className="section-title">Quality Assurance</h2>
              <p className="quality-description">
                At Pugazh Overseas, quality is our top priority. We implement rigorous 
                quality control measures at every step of the process to ensure our 
                products meet international standards.
              </p>
              <div className="quality-points">
                <div className="quality-point">
                  <div className="point-number">01</div>
                  <div className="point-content">
                    <h4>Source Verification</h4>
                    <p>Direct sourcing from verified suppliers and manufacturers</p>
                  </div>
                </div>
                <div className="quality-point">
                  <div className="point-number">02</div>
                  <div className="point-content">
                    <h4>Quality Testing</h4>
                    <p>Comprehensive testing and inspection before shipment</p>
                  </div>
                </div>
                <div className="quality-point">
                  <div className="point-number">03</div>
                  <div className="point-content">
                    <h4>Certification</h4>
                    <p>All necessary certifications and documentation provided</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quality-image">
              <div className="quality-card">
                <Gem size={60} />
                <h3>Premium Quality</h3>
                <p>Certified & Tested</p>
              </div>
            </div>
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