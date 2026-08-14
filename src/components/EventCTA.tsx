import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
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
    <section id="cta" className="py-32 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-[#0A0A0C] uppercase leading-[0.88] max-w-4xl tracking-tight"
        >
          EDUCATION CANNOT BE TRANSFORMED BY ONE STAKEHOLDER.{' '}
          <span className="block mt-4 text-[#8000FF]">
            LET'S BUILD IT TOGETHER.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg text-[#666666] max-w-2xl font-normal leading-relaxed font-sans"
        >
          Whether you are a student, educator, founder, or policymaker, your perspective is essential to shaping the future of learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleJoinClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#8000FF] hover:bg-[#6c00db] text-white text-xs font-mono-tech uppercase font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md hover:scale-[1.02]"
          >
            <span>JOIN BEYOND SYLLABUS</span>
            <span>↗</span>
          </button>

          <button
            onClick={handleSharePerspectiveClick}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-black/5 text-[#0A0A0C] border-2 border-[#0A0A0C] text-xs font-mono-tech uppercase font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <span>SHARE YOUR PERSPECTIVE</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
