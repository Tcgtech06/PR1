import { useEffect, useRef } from 'react';

/**
 * Adds `animClass` to each matched element when the container scrolls into view,
 * removes it when it leaves — so the animation replays every time.
 *
 * @param {string} selector  - CSS selector for children to animate (default: direct children)
 * @param {string} animClass - class to toggle (default: 'scroll-reveal')
 * @param {number} threshold - IntersectionObserver threshold (default: 0.2)
 */
const useScrollReveal = (selector = null, animClass = 'scroll-reveal', threshold = 0.2) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container];

    const reset = () => targets.forEach(el => {
      el.classList.remove(animClass);
    });

    const reveal = () => {
      targets.forEach(el => {
        void el.offsetWidth; // force reflow per element
        el.classList.add(animClass);
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reset();
        reveal();
      } else {
        reset();
      }
    }, { threshold });

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, animClass, threshold]);

  return ref;
};

export default useScrollReveal;
