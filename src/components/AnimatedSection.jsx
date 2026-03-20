import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'animate-on-scroll',
  delay = 0,
  threshold = 0.1 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);
  
  const delayClass = delay > 0 ? `animate-stagger-${Math.min(delay, 6)}` : '';
  
  return (
    <div 
      ref={ref} 
      className={`${animationType} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;