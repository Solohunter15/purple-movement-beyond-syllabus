import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Users, Code, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBeginJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBeginJourney }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12 bg-mesh-dark">
      {/* Floating Abstract Shapes with Parallax */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        {/* Glow Orb 1 */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px] animate-pulse-glow" />
        
        {/* Glow Orb 2 */}
        <div className="absolute bottom-1/4 right-1/6 w-[30rem] h-[30rem] rounded-full bg-indigo-600/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        
        {/* Geometric Abstract Glass Shapes */}
        <div className="absolute top-28 right-[15%] w-24 h-24 rounded-2xl glass-panel border border-white/10 rotate-12 animate-float-slow hidden lg:flex items-center justify-center">
          <Code className="w-10 h-10 text-purple-400/70" />
        </div>

        <div className="absolute bottom-32 left-[12%] w-28 h-28 rounded-full glass-panel border border-white/10 -rotate-12 animate-float-reverse hidden lg:flex items-center justify-center">
          <Users className="w-12 h-12 text-indigo-400/70" />
        </div>

        <div className="absolute top-1/3 left-[8%] w-16 h-16 rounded-xl glass-panel border border-purple-500/20 rotate-45 animate-float-slow hidden md:flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-pink-400/70" />
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Movement Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-lg shadow-purple-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span>Stepping into a Movement • The Purple Movement</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Beyond the Classroom.{' '}
          <span className="gradient-text-purple block mt-1">
            Beyond Expectations.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-3xl font-light leading-relaxed"
        >
          Learn practical skills. Connect with vibrant communities. Build real projects, and unlock opportunities that textbooks never taught.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onBeginJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#why-beyond"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 border border-white/15"
          >
            <Compass className="w-5 h-5 text-purple-400" />
            <span>Explore the Ecosystem</span>
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl glass-panel p-4 rounded-2xl border border-white/10"
        >
          <div className="flex flex-col items-center p-2">
            <span className="text-2xl font-bold text-white">15,000+</span>
            <span className="text-xs text-purple-300/80">Active Students</span>
          </div>
          <div className="flex flex-col items-center p-2 border-l border-white/10">
            <span className="text-2xl font-bold text-white">1,200+</span>
            <span className="text-xs text-purple-300/80">Projects Shipped</span>
          </div>
          <div className="flex flex-col items-center p-2 border-l border-white/10">
            <span className="text-2xl font-bold text-white">350+</span>
            <span className="text-xs text-purple-300/80">Industry Mentors</span>
          </div>
          <div className="flex flex-col items-center p-2 border-l border-white/10">
            <span className="text-2xl font-bold text-white">85+</span>
            <span className="text-xs text-purple-300/80">Campus Guilds</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#why-beyond"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-slate-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
