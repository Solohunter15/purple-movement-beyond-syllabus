import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      <div
        className={`fixed top-0 left-0 rounded-full bg-[#6F3FF5] transition-transform duration-100 ease-out pointer-events-none ${
          isHovered ? 'w-6 h-6 opacity-30 -translate-x-3 -translate-y-3' : 'w-2.5 h-2.5 opacity-70 -translate-x-1.25 -translate-y-1.25'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />
    </div>
  );
};
