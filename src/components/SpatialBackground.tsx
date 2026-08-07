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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
      {/* 1. Dynamic Cursor Light Field */}
      <div
        className="absolute w-[42rem] h-[42rem] rounded-full spatial-orb-glow transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 336}px, ${mousePos.y - 336}px, 0)`
        }}
      />

      {/* 2. Floating Ambient Spatial Color Fields */}
      <div className="absolute top-[-10%] left-[-5%] w-[55rem] h-[55rem] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[160px] animate-pulse-glow" />
      <div className="absolute top-[30%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-bl from-purple-500/10 via-indigo-500/5 to-transparent blur-[180px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[65%] left-[-8%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-blue-500/8 via-indigo-500/4 to-transparent blur-[200px] animate-pulse-glow" style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-[-10%] right-[10%] w-[48rem] h-[48rem] rounded-full bg-gradient-to-tl from-violet-500/10 via-purple-500/5 to-transparent blur-[170px] animate-pulse-glow" style={{ animationDelay: '9s' }} />

      {/* 3. Spatial Architectural Tech Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f10c_1px,transparent_1px),linear-gradient(to_bottom,#6366f10c_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_75%,transparent_100%)]" />

      {/* 4. Floating 3D Geometric Spatial Nodes & Rings */}
      <div className="absolute top-24 left-[12%] w-48 h-48 rounded-full border border-indigo-200/50 bg-white/30 backdrop-blur-md animate-float-slow opacity-60 hidden lg:block shadow-sm" />
      <div className="absolute top-[45%] right-[8%] w-64 h-64 rounded-3xl border border-purple-200/40 bg-indigo-50/20 backdrop-blur-md rotate-12 animate-float-reverse opacity-50 hidden lg:block" />
      <div className="absolute top-[75%] left-[6%] w-56 h-56 rounded-full border-2 border-dashed border-indigo-300/30 animate-orbit opacity-40 hidden lg:block" />

      {/* 5. Floating Ideology Watermark Pills */}
      <div className="absolute top-40 right-[18%] opacity-25 font-mono text-[10px] tracking-[0.3em] font-extrabold uppercase text-indigo-700 bg-white/60 px-4 py-1.5 rounded-full border border-indigo-200/60 hidden xl:block shadow-2xs">
        // FROM_PROTEST_TO_PURPOSE
      </div>
      <div className="absolute top-[38%] left-[4%] opacity-20 font-mono text-[10px] tracking-[0.3em] font-extrabold uppercase text-indigo-700 bg-white/60 px-4 py-1.5 rounded-full border border-indigo-200/60 hidden xl:block shadow-2xs">
        // CAPABILITY_COMMONS_2026
      </div>
      <div className="absolute top-[68%] right-[5%] opacity-20 font-mono text-[10px] tracking-[0.3em] font-extrabold uppercase text-indigo-700 bg-white/60 px-4 py-1.5 rounded-full border border-indigo-200/60 hidden xl:block shadow-2xs">
        // BEYOND_SYLLABUS_INITIATIVE
      </div>

      {/* 6. Subtle Continuous Glowing Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent opacity-40" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent opacity-30" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent opacity-30" />
    </div>
  );
};
