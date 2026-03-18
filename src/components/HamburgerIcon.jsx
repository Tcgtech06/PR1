import './HamburgerIcon.css';

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
      <span className="line line-top"></span>
      <span className="line line-middle"></span>
      <span className="line line-bottom"></span>
    </div>
  );
};

export default HamburgerIcon;