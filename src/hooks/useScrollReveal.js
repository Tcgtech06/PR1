import { useEffect, useRef } from 'react';

/**
 * Adds `animClass` to each matched element when the container scrolls into view.
 * Once animated, elements stay visible for better performance.
 *
 * @param {string} selector  - CSS selector for children to animate (default: direct children)
 * @param {string} animClass - class to toggle (default: 'scroll-reveal')
 * @param {number} threshold - IntersectionObserver threshold (default: 0.1)
 */
const useScrollReveal = (selector = null, animClass = 'scroll-reveal', threshold = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container];

    // Add initial hidden state
    targets.forEach(el => {
      if (!el.classList.contains(animClass)) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    });

    const reveal = () => {
      targets.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.classList.add(animClass);
        }, index * 100); // Stagger animation
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        // Once animated, stop observing for better performance
        observer.unobserve(container);
      }
    }, { 
      threshold,
      rootMargin: '50px 0px -50px 0px'
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, animClass, threshold]);

  return ref;
};

export default useScrollReveal;
