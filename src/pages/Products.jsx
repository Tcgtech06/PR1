import { MessageSquare } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import useScrollReveal from '../hooks/useScrollReveal';
import './Products.css';

const Products = () => {
  // Scroll reveal hooks for different sections
  const productsGridRef = useScrollReveal('.product-card', 'scroll-reveal', 0.1);

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
      image: "/Mars Melange.jpeg",
      title: "Mars Melange (Baby Pique)",
      fabricName: "Mars Melange (Baby Pique)",
      gsm: "195-200",
      width: "44\" Tubular",
      colours: "20+",
      description: "Premium quality Mars Melange fabric with baby pique texture, perfect for polo shirts and casual wear."
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

      {/* CTA Section */}
    </div>
  );
};

export default Products;