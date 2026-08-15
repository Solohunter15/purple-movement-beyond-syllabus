import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../config/eventConfig';
import { useTheme } from '../context/ThemeContext';

export const EventThemeDark: React.FC = () => {
  const { isDayMode } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 3D Perspective transforms
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [22, 0, -22]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.88]);

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
    <section
      ref={sectionRef}
      id="theme-question"
      className={`py-32 relative overflow-hidden transition-colors duration-300 border-t flex flex-col justify-between [perspective:1200px] ${
        isDayMode
          ? 'bg-[#F7F6FB] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#07060A] text-white border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto">
        
        {/* Top Centered Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-xs sm:text-sm font-mono-tech uppercase font-bold tracking-[0.2em] max-w-2xl mb-8 ${
            isDayMode ? 'text-[#625D73]' : 'text-white/80'
          }`}
        >
          WHAT IF THE FUTURE OF EDUCATION IS NOT SOMETHING WE WAIT FOR?
        </motion.p>

        {/* Massive Center Headline */}
        <motion.div
          style={{ rotateX, scale, transformStyle: "preserve-3d" }}
          className="font-display font-black text-7xl sm:text-9xl md:text-[11rem] leading-[0.82] uppercase tracking-tighter select-none mb-12"
        >
          <div className={isDayMode ? 'text-[#0A0713]' : 'text-white'}>WHAT IF</div>
          <div className={isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}>WE BUILD IT?</div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button
            onClick={handleJoinClick}
            className={`px-8 py-4 text-xs font-mono-tech uppercase font-black tracking-widest flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 rounded-xs ${
              isDayMode
                ? 'bg-[#7500EB] hover:bg-[#6200c7] text-white shadow-purple-500/20'
                : 'bg-[#00F5A0] hover:bg-[#00d084] text-[#000000] shadow-emerald-500/20'
            }`}
          >
            <span>JOIN THE MOVEMENT</span>
            <span>↗</span>
          </button>
        </motion.div>

      </div>

      {/* Date Ticker at Bottom */}
      <div
        className={`w-full pt-6 pb-2 mt-20 transition-colors ${
          isDayMode
            ? 'border-t border-[#E4DFF2] bg-[#F7F6FB]'
            : 'border-t border-white/10 bg-[#07060A]'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 text-xs font-mono-tech uppercase font-bold overflow-x-auto no-scrollbar ${
            isDayMode ? 'text-[#241F33]/50' : 'text-white/50'
          }`}
        >
          <span className={isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}>JULY</span>
          <span>→</span>
          <span className={isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}>AUG 15</span>
          <span>→</span>
          <span>SEP 05</span>
          <span>→</span>
          <span className={isDayMode ? 'text-[#008F5B]' : 'text-[#00F5A0]'}>OCT 02</span>
          <span>→</span>
          <span>NOV 14</span>
          <span>→</span>
          <span className={isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}>DEC</span>
        </div>
      </div>

    </section>
  );
};

