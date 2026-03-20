import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, MessageSquare } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  // Scroll reveal hooks for different sections
  const contactInfoRef = useScrollReveal('.contact-card', 'scroll-reveal', 0.1);
  const formRef = useScrollReveal('.contact-form', 'scroll-reveal', 0.1);

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
      details: ["info@pugazhoverseas.com"],
      description: "Send us an email anytime",
      link: "mailto:info@pugazhoverseas.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+91 78451 60516"],
      description: "Mon-Fri 9AM-6PM IST",
      link: "tel:+917845160516"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      title: "WhatsApp",
      details: ["+91 78451 60516"],
      description: "Chat with us on WhatsApp",
      link: "https://wa.me/917845160516"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: ["Pugazh Overseas Head Office", "10, 1st Floor, Opp Sivan Theatre", "Cross Street, Pitchampalayam Pudur", "Tiruppur, Tamil Nadu 641602"],
      description: "Our office location",
      link: "https://maps.google.com/?q=Pugazh+Overseas+Tiruppur+Tamil+Nadu"
    }
  ];

  return (
    <div className="contact">
      <HeroSection
        className="contact-hero"
        title="Contact Us"
        description="Ready to start your global trade journey? Get in touch with our expert team for personalized solutions and competitive quotes."
      />

      {/* Contact Info Cards */}
      <section className="section contact-info">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Multiple ways to reach us. Choose what works best for you.
          </p>
          <div className="grid grid-4" ref={contactInfoRef}>
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card contact-card contact-card-link"
              >
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
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;