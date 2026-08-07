import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventHero: React.FC = () => {
  const handleJoinClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
    }, 300);
  };

  const handleSharePerspectiveClick = () => {
    window.open(EVENT_CONFIG.PERSPECTIVE_URL, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Brand Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full editorial-inset text-[#6F3FF5] text-xs font-mono-tech uppercase tracking-[0.2em] mb-6 shadow-2xs bg-white/60 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#6F3FF5]" />
          <span>The Purple Movement Initiative</span>
        </motion.div>

        {/* Hero Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#1E1E1E] leading-[1.05] max-w-4xl"
        >
          BEYOND SYLLABUS
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 text-xl sm:text-2xl font-serif-editorial italic text-[#6F3FF5]"
        >
          Building the Future of Education Together
        </motion.h2>

        {/* Small Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-[#737373] max-w-2xl font-normal leading-relaxed"
        >
          Bringing students, educators, industry, researchers, policymakers and communities together to explore the future of learning in the AI era.
        </motion.p>

        {/* Editorial Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={handleJoinClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full editorial-button-primary font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 group"
          >
            <span>Join the Movement</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={handleSharePerspectiveClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full editorial-button-secondary text-[#1E1E1E] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2"
          >
            <span>Share Your Perspective</span>
          </motion.button>
        </motion.div>

        {/* Quiet Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-20 text-[#737373] hover:text-[#6F3FF5] transition-colors flex flex-col items-center gap-1.5 text-[11px] font-mono-tech uppercase tracking-widest"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-[#6F3FF5]" />
        </motion.a>
      </div>
    </section>
  );
};
