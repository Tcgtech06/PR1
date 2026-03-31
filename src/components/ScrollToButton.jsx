import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './ScrollToButton.css';

const ScrollToButton = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold to switch between "scroll to bottom" and "scroll to top"
      if (window.scrollY > 300) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isScrolledDown) {
      // Scroll to Top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to Bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <button 
      className={`scroll-to-button ${isScrolledDown ? 'up' : 'down'}`}
      onClick={handleClick}
      aria-label={isScrolledDown ? "Scroll to Top" : "Scroll to Bottom"}
    >
      {isScrolledDown ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
    </button>
  );
};

export default ScrollToButton;
