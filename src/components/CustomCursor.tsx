import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<TrailPoint>({ x: -100, y: -100 });
  const [trail, setTrail] = useState<TrailPoint[]>(Array(8).fill({ x: -100, y: -100 }));
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string>('EXPLORE');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef<TrailPoint>({ x: -100, y: -100 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('a, button, [role="button"], .editorial-glass-card');
      if (clickable) {
        setIsHovered(true);
        const text = clickable.getAttribute('data-cursor-text') || 
                     (clickable.tagName === 'A' ? 'GO' : 
                      clickable.tagName === 'BUTTON' ? 'CLICK' : 'VIEW');
        setHoverText(text);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Kinetic Particle Ribbon Loop
    let currentPos = { x: -100, y: -100 };
    const animate = () => {
      currentPos.x += (targetPos.current.x - currentPos.x) * 0.35;
      currentPos.y += (targetPos.current.y - currentPos.y) * 0.35;
      setPosition({ ...currentPos });

      setTrail((prevTrail) => {
        const newTrail = [currentPos];
        for (let i = 0; i < prevTrail.length - 1; i++) {
          const prev = prevTrail[i];
          const curr = prevTrail[i + 1];
          newTrail.push({
            x: curr.x + (prev.x - curr.x) * 0.45,
            y: curr.y + (prev.y - curr.y) * 0.45
          });
        }
        return newTrail;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* 1. Kinetic Ribbon Trail Nodes */}
      {trail.map((point, index) => {
        const size = Math.max(3, 14 - index * 1.4);
        const opacity = (1 - index / trail.length) * 0.5;
        return (
          <div
            key={index}
            className="fixed top-0 left-0 rounded-full bg-gradient-to-r from-[#6F3FF5] to-[#a855f7] shadow-[0_0_10px_rgba(111,63,245,0.5)] transition-transform"
            style={{
              transform: `translate3d(${point.x - size / 2}px, ${point.y - size / 2}px, 0)`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity
            }}
          />
        );
      })}

      {/* 2. Outer Spatial Glass Lens & Halo */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-all duration-300 ease-out flex items-center justify-center border ${
          isHovered
            ? 'w-16 h-16 bg-[#6F3FF5]/15 border-[#6F3FF5] backdrop-blur-md shadow-[0_0_25px_rgba(111,63,245,0.4)]'
            : 'w-8 h-8 bg-white/40 border-[#6F3FF5]/40 backdrop-blur-[2px] shadow-xs'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 32 : 16)}px, ${position.y - (isHovered ? 32 : 16)}px, 0)`
        }}
      >
        {/* Contextual Action Tooltip Text */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="text-[9px] font-mono-tech font-bold uppercase tracking-widest text-[#6F3FF5]"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Central Core Quantum Precision Point */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-[#6F3FF5] transition-all duration-150 shadow-[0_0_8px_rgba(111,63,245,0.8)] ${
          isHovered ? 'w-2 h-2 opacity-60' : 'w-2.5 h-2.5 opacity-100'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 4 : 5)}px, ${position.y - (isHovered ? 4 : 5)}px, 0)`
        }}
      />

      {/* 4. Click Shockwave Wave Pulse */}
      {isClicked && (
        <motion.div
          initial={{ opacity: 0.8, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-[#6F3FF5] shadow-[0_0_20px_rgba(111,63,245,0.6)]"
          style={{
            transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`
          }}
        />
      )}
    </div>
  );
};
