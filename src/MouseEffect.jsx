import React, { useEffect, useRef } from 'react';

// A ring that follows the pointer and grows over links and buttons.
// Event delegation covers elements rendered after mount (other routes), and the ring is
// disabled for touch input, where there is no pointer to follow.
function MouseEffect() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia?.('(pointer: fine)').matches) return undefined;

    const handleMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.add('visible');
    };
    const handleOver = (e) => {
      cursor.classList.toggle('hovered', Boolean(e.target.closest?.('a, button')));
    };
    const handleLeave = () => cursor.classList.remove('visible');

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"></div>;
}

export default MouseEffect;
