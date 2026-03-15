import { useState } from 'react';
import { ChevronDown, Globe, Shirt } from 'lucide-react';
import './SiteSwitcher.css';

const SiteSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSite, setCurrentSite] = useState('pugazh');

  const sites = [
    {
      id: 'pugazh',
      name: 'Pugazh Overseas',
      icon: <Globe size={20} />,
      description: 'Global Trade Solutions',
      url: '#'
    },
    {
      id: 'rajamani',
      name: 'Raja Mani Fabrics',
      icon: <Shirt size={20} />,
      description: 'Premium Textile Solutions',
      url: '#'
    }
  ];

  const handleSiteSwitch = (siteId) => {
    setCurrentSite(siteId);
    setIsOpen(false);
    // Here you would implement the actual site switching logic
    if (siteId === 'rajamani') {
      alert('Switching to Raja Mani Fabrics - Feature coming soon!');
    }
  };

  const currentSiteData = sites.find(site => site.id === currentSite);

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
          {sites.map((site) => (
            <button
              key={site.id}
              className={`site-option ${currentSite === site.id ? 'active' : ''}`}
              onClick={() => handleSiteSwitch(site.id)}
            >
              <div className="site-info">
                {site.icon}
                <div className="site-details">
                  <span className="site-name">{site.name}</span>
                  <span className="site-description">{site.description}</span>
                </div>
              </div>
              {currentSite === site.id && (
                <div className="active-indicator"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SiteSwitcher;