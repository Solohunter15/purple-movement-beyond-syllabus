import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../config/eventConfig';
import { useTheme } from '../context/ThemeContext';

export const EventCTA: React.FC = () => {
  const { isDayMode } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Text scaling on entry scroll
  const textScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 1]);

  const handleJoinClick = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      window.open(EVENT_CONFIG.PLATFORM_URL || EVENT_CONFIG.REGISTRATION_URL, '_blank');
    }, 300);
  };

  const handleSharePerspectiveClick = () => {
    window.open(EVENT_CONFIG.PERSPECTIVE_URL, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className={`py-32 relative overflow-hidden transition-colors duration-300 border-t ${
        isDayMode
          ? 'bg-[#F7F6FB] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#07060A] text-[#F4F3F7] border-white/10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Massive Headline */}
        <motion.h2
          style={{ scale: textScale, opacity: textOpacity }}
          className={`font-display font-black text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.88] max-w-4xl tracking-tight origin-center ${
            isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
          }`}
        >
          EDUCATION CANNOT BE TRANSFORMED BY ONE STAKEHOLDER.{' '}
          <span className={`block mt-4 ${isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}`}>
            LET'S BUILD IT TOGETHER.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-8 text-base sm:text-lg max-w-2xl font-normal leading-relaxed font-sans ${
            isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
          }`}
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
            className="w-full sm:w-auto px-8 py-4 bg-[#8000FF] hover:bg-[#6c00db] text-white text-xs font-mono-tech uppercase font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md hover:scale-[1.02] rounded-xs"
          >
            <span>JOIN BEYOND SYLLABUS</span>
            <span>↗</span>
          </button>

          <button
            onClick={handleSharePerspectiveClick}
            className={`w-full sm:w-auto px-8 py-4 text-xs font-mono-tech uppercase font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] rounded-xs ${
              isDayMode
                ? 'bg-white hover:bg-[#EDE8F7] text-[#0A0713] border-2 border-[#D8D1EC] hover:border-[#7500EB] shadow-xs'
                : 'bg-transparent hover:bg-white/5 text-[#F4F3F7] border-2 border-white/20 hover:border-white/50'
            }`}
          >
            <span>SHARE YOUR PERSPECTIVE</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

