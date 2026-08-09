import React, { useState, useEffect } from 'react';

export const SpatialBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAF8]">
      {/* 1. Dynamic Cursor Spatial Light Field */}
      <div
        className="absolute w-[45rem] h-[45rem] rounded-full bg-gradient-to-r from-[#6F3FF5]/10 via-[#9333EA]/5 to-transparent blur-[160px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 360}px, ${mousePos.y - 360}px, 0)`
        }}
      />

      {/* 2. Floating Ambient Color Fields */}
      <div className="absolute top-[-10%] left-[-5%] w-[55rem] h-[55rem] rounded-full bg-gradient-to-br from-[#6F3FF5]/8 via-purple-500/4 to-transparent blur-[180px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-bl from-purple-500/8 via-[#6F3FF5]/4 to-transparent blur-[180px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[65%] left-[-8%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-indigo-500/6 via-[#6F3FF5]/3 to-transparent blur-[200px] animate-pulse-glow" style={{ animationDelay: '6s' }} />

      {/* 3. Spatial Architectural Light Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6F3FF50a_1px,transparent_1px),linear-gradient(to_bottom,#6F3FF50a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_80%,transparent_100%)]" />

      {/* 4. Floating 3D Geometric Spatial Nodes & Glass Rings */}
      <div className="absolute top-24 left-[10%] w-48 h-48 rounded-full border border-[#6F3FF5]/20 bg-white/40 backdrop-blur-md animate-float-slow opacity-60 hidden lg:block shadow-xs" />
      <div className="absolute top-[45%] right-[8%] w-64 h-64 rounded-3xl border border-purple-300/30 bg-purple-50/20 backdrop-blur-md rotate-12 animate-float-reverse opacity-50 hidden lg:block" />
      <div className="absolute top-[75%] left-[6%] w-56 h-56 rounded-full border-2 border-dashed border-[#6F3FF5]/20 animate-orbit opacity-40 hidden lg:block" />
    </div>
  );
};
