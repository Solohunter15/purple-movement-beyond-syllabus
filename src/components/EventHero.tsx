import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 35;
      const y = (clientY / window.innerHeight - 0.5) * 35;
      const tiltX = (clientY / window.innerHeight - 0.5) * -12;
      const tiltY = (clientX / window.innerWidth - 0.5) * 12;
      setMousePos({ x, y, tiltX, tiltY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePlatformRedirect = () => {
    window.open(EVENT_CONFIG.PLATFORM_URL, '_blank');
  };

  const handleRegistrationRedirect = () => {
    window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-20 bg-mesh-dark starfield">
      {/* Background Floating Purple Ambient Rays & Orbs */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        {/* Glow Orb 1 */}
        <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] rounded-full bg-purple-600/25 blur-[150px] animate-pulse-glow" />
        
        {/* Glow Orb 2 */}
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-indigo-600/20 blur-[180px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

        {/* Abstract Floating Skeuo-Glass Rings */}
        <div className="absolute top-32 right-[12%] w-28 h-28 rounded-full border border-purple-400/30 skeuo-glass-card animate-float-slow hidden md:block opacity-70" />
        <div className="absolute bottom-40 left-[10%] w-36 h-36 rounded-full border border-indigo-400/25 skeuo-inset-container animate-float-reverse hidden md:block opacity-60" />
      </div>

      {/* Grid Radial Mask Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.tiltX}deg) rotateY(${mousePos.tiltY}deg)`
        }}
      >
        {/* Event Date & Venue Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full skeuo-inset-container text-purple-300 text-xs font-bold tracking-wider uppercase mb-8 shadow-2xl border border-purple-500/30"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            {EVENT_CONFIG.EVENT_DATE}
          </span>
          <span className="text-purple-500">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            {EVENT_CONFIG.EVENT_VENUE}
          </span>
        </motion.div>

        {/* Event Name & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          {EVENT_CONFIG.EVENT_NAME}
          <span className="gradient-text-purple block mt-2 text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-[0_10px_20px_rgba(168,85,247,0.3)]">
            {EVENT_CONFIG.EVENT_SUBTITLE}
          </span>
        </motion.h1>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed drop-shadow"
        >
          {EVENT_CONFIG.EVENT_DESCRIPTION}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Button 1: Explore Platform */}
          <button
            onClick={handlePlatformRedirect}
            className="w-full sm:w-auto px-8 py-4 rounded-full skeuo-button-primary text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group shadow-2xl"
          >
            <span>Explore Platform</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Button 2: Register for Event */}
          <button
            onClick={handleRegistrationRedirect}
            className="w-full sm:w-auto px-8 py-4 rounded-full skeuo-button-secondary text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span>Register for Event</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-slate-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest font-semibold"
        >
          <span>Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 text-purple-400" />
        </motion.a>
      </div>
    </section>
  );
};

