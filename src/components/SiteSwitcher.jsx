import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import './SiteSwitcher.css';

const SiteSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSite, setCurrentSite] = useState('pugazh');

  // Detect current site based on URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/rajmani')) {
      setCurrentSite('rajamani');
    } else {
      setCurrentSite('pugazh');
    }
  }, []);

  const sites = [
    {
      id: 'pugazh',
      name: 'Pugazh Overseas',
      icon: <img src={logo} alt="Pugazh" className="site-logo" />,
      description: 'Global Trade Solutions',
      url: '/'
    },
    {
      id: 'rajamani',
      name: 'Raja Mani Fabrics',
      icon: <img src={logo2} alt="Raja Mani" className="site-logo" />,
      description: 'Premium Textile Solutions',
      url: '/rajmani'
    }
  ];

  const handleSiteSwitch = (siteId) => {
    setCurrentSite(siteId);
    setIsOpen(false);
    // Implement actual site switching logic
    if (siteId === 'rajamani') {
      window.location.href = '/rajmani';
    } else if (siteId === 'pugazh') {
      window.location.href = '/';
    }
  };

  const currentSiteData = sites.find(site => site.id === currentSite);
  const otherSites = sites.filter(site => site.id !== currentSite);

  return (
    <div className="site-switcher">
      <button 
        className="site-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="site-info">
          {currentSiteData.icon}
          <div className="site-details">
            <span className="site-name">{currentSiteData.name}</span>
            <span className="site-description">{currentSiteData.description}</span>
          </div>
        </div>
        <ChevronDown 
          size={16} 
          className={`chevron ${isOpen ? 'open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="site-switcher-dropdown">
          {otherSites.map((site) => (
            <button
              key={site.id}
              className="site-option"
              onClick={() => handleSiteSwitch(site.id)}
            >
              <div className="site-info">
                {site.icon}
                <div className="site-details">
                  <span className="site-name">{site.name}</span>
                  <span className="site-description">{site.description}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SiteSwitcher;