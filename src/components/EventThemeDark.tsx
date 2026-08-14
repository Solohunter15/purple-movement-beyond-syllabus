import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventThemeDark: React.FC = () => {
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

  return (
    <section id="theme-question" className="py-32 relative overflow-hidden bg-[#000000] text-white border-t border-white/10 flex flex-col justify-between">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto">
        
        {/* Top Centered Subtitle (Screenshot 3) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-mono-tech uppercase font-bold tracking-[0.2em] text-white/80 max-w-2xl mb-8"
        >
          WHAT IF THE FUTURE OF EDUCATION IS NOT SOMETHING WE WAIT FOR?
        </motion.p>

        {/* Massive Center Headline (Screenshot 3) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-7xl sm:text-9xl md:text-[11rem] leading-[0.82] uppercase tracking-tighter select-none mb-12"
        >
          <div className="text-white">WHAT IF</div>
          <div className="text-[#8000FF]">WE BUILD IT?</div>
        </motion.div>

        {/* Electric Mint Green Action Button (Screenshot 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button
            onClick={handleJoinClick}
            className="px-8 py-4 bg-[#00F5A0] hover:bg-[#00d084] text-[#000000] text-xs font-mono-tech uppercase font-black tracking-widest flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 rounded-xs"
          >
            <span>JOIN THE MOVEMENT</span>
            <span>↗</span>
          </button>
        </motion.div>

      </div>

      {/* Date Ticker at Bottom (Screenshot 3) */}
      <div className="w-full border-t border-white/10 pt-6 pb-2 mt-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 text-xs font-mono-tech uppercase font-bold text-white/50 overflow-x-auto no-scrollbar">
          <span className="text-[#8000FF]">AUG 15</span>
          <span>→</span>
          <span>SEP 05</span>
          <span>→</span>
          <span className="text-[#00F5A0]">OCT 02</span>
          <span>→</span>
          <span>NOV 14</span>
          <span>→</span>
          <span className="text-[#8000FF]">DEC</span>
        </div>
      </div>

    </section>
  );
};
