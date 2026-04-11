import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './SiteSwitcher.css';

const SiteSwitcher = () => {
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
      name: '',
      icon: <img src="/raj.jpeg" alt="Raja Mani" className="site-logo" />,
      description: 'Premium Textile Solutions',
      url: '/rajmani'
    }
  ];

  const handleSiteSwitch = () => {
    // Directly switch to the other site
    if (currentSite === 'rajamani') {
      window.location.href = '/';
    } else {
      window.location.href = '/rajmani';
    }
  };

  const otherSite = sites.find(site => site.id !== currentSite);

  return (
    <div className="site-switcher">
      <button 
        className="site-switcher-button"
        onClick={handleSiteSwitch}
      >
        <div className="switch-info">
          <span className="switch-text">SWITCH TO</span>
          <div className="site-info">
            {otherSite.icon}
            {otherSite.name && <span className="site-name">{otherSite.name}</span>}
          </div>
        </div>
      </button>
    </div>
  );
};

export default SiteSwitcher;