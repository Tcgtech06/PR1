import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@pugazhoverseas.com", "sales@pugazhoverseas.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: ["123 Export Street", "Chennai, Tamil Nadu 600001", "India"],
      description: "Our office location"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      description: "When we're available"
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-description">
              Ready to start your global trade journey? Get in touch with our expert team 
              for personalized solutions and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Multiple ways to reach us. Choose what works best for you.
          </p>
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="card contact-card">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <h3 className="contact-title">{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="contact-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="form-container">
              <div className="form-header">
                <MessageSquare size={40} />
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={60} />
                <h4>Our Location</h4>
                <p>123 Export Street<br />Chennai, Tamil Nadu 600001<br />India</p>
                <div className="map-note">
                  <p>We're located in the heart of Chennai's business district, 
                  easily accessible by public transport and with ample parking facilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What products do you export?</h4>
              <p>We export a wide range of products including agricultural products, textiles, handicrafts, food items, and industrial goods. Contact us for a detailed catalog.</p>
            </div>
            <div className="faq-item">
              <h4>Which countries do you ship to?</h4>
              <p>We ship to over 50 countries worldwide. Our main markets include USA, Europe, Middle East, Southeast Asia, and Africa.</p>
            </div>
            <div className="faq-item">
              <h4>What are your minimum order quantities?</h4>
              <p>Minimum order quantities vary by product. We work with businesses of all sizes and can accommodate both small and large orders.</p>
            </div>
            <div className="faq-item">
              <h4>How do you ensure product quality?</h4>
              <p>We have ISO certified quality management systems and conduct thorough inspections at every stage of the process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;