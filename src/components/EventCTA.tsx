import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventCTA: React.FC = () => {
  const handleJoinClick = () => {
    confetti({
      particleCount: 90,
      spread: 70,
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
    <section id="cta" className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Large Clean Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#1E1E1E] leading-[1.1] max-w-4xl"
        >
          Education cannot be transformed by one stakeholder.{' '}
          <span className="block mt-2 italic text-[#6F3FF5]">
            Let's build it together.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#737373] max-w-2xl font-normal leading-relaxed"
        >
          Whether you are a student, educator, founder, or policymaker, your perspective is essential to shaping the future of learning.
        </motion.p>

        {/* Spatial Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={handleJoinClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full spatial-button-primary font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Join Beyond Syllabus</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={handleSharePerspectiveClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full spatial-button-secondary text-[#1E1E1E] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Share Your Perspective</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
