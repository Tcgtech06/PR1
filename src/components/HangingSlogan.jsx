import './HangingSlogan.css';
import sloganBoardImg from '../assets/slogan-board-nobg.png';

const HangingSlogan = () => {
  return (
    <div className="hanging-slogan-container">
      <img src={sloganBoardImg} alt="Innovating Polyester, Inspiring Fashion" className="slogan-board-image" />
    </div>
  );
};

export default HangingSlogan;
