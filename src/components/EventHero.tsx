import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventHero: React.FC = () => {
  const handleEnterConversationClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
    }, 300);
  };

  const handleWatchLatestClick = () => {
    window.open(EVENT_CONFIG.PERSPECTIVE_URL, '_blank');
  };

  // Scroll Parallax Hooks
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -70]);
  const titleOpacity = useTransform(scrollY, [0, 450], [1, 0.35]);
  const titleScale = useTransform(scrollY, [0, 500], [1, 0.96]);
  const badgeY = useTransform(scrollY, [0, 500], [0, 60]);
  const badgeRotate = useTransform(scrollY, [0, 800], [0, 150]);
  const bannerY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#07060A] text-[#F4F3F7] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs font-mono-tech uppercase font-bold tracking-wider"
            >
              <span className="text-[#F4F3F7]/80">BRIDGE THE GAP 4.0</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#8000FF]/25 text-[#00F5A0] border border-[#8000FF]/40">
                AUG—DEC 2026
              </span>
            </motion.div>

            {/* Massive Display Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
              className="font-display font-black uppercase text-7xl sm:text-9xl md:text-[11rem] leading-[0.82] tracking-tighter select-none"
            >
              <div className="text-[#F4F3F7]">BEYOND</div>
              <div className="text-[#8000FF]">SYLLABUS</div>
            </motion.div>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#F4F3F7]/90 max-w-2xl font-sans"
            >
              A FOUR-MONTH JOURNEY TO REDESIGN EDUCATION FOR THE NEXT GENERATION.
            </motion.h2>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              {/* Primary Purple Button */}
              <button
                onClick={handleEnterConversationClick}
                className="px-7 py-3.5 bg-[#8000FF] hover:bg-[#6c00db] text-white text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-200 shadow-md hover:scale-[1.02] hover:shadow-[#8000FF]/20"
              >
                <span>ENTER THE CONVERSATION</span>
                <span>↗</span>
              </button>

              {/* Secondary White Button with Black Border */}
              <button
                onClick={handleWatchLatestClick}
                className="px-7 py-3.5 bg-transparent hover:bg-white/5 text-[#F4F3F7] border-2 border-white/20 hover:border-white/50 text-xs font-mono-tech uppercase font-bold tracking-wider cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              >
                WATCH THE LATEST SESSION
              </button>
            </motion.div>

          </div>

          {/* Right Column: Floating Sidebar Banner & Circular Interactive Badge (Screenshot 1) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end relative h-full min-h-[460px]">
            
            {/* Vertical Sideways Banner Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ y: bannerY }}
              className="absolute right-0 top-0 bottom-0 w-28 bg-[#8000FF] text-white flex items-center justify-center shadow-2xl rounded-l-xs overflow-hidden"
            >
              <span className="font-display font-black text-4xl tracking-widest uppercase whitespace-nowrap transform rotate-90 origin-center text-white/90">
                GENERATION THAT QUESTIONS
              </span>
            </motion.div>

            {/* Interactive Circular Badge Overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              style={{ y: badgeY, rotate: badgeRotate }}
              className="absolute bottom-4 right-12 z-20 group cursor-pointer"
            >
              <div className="relative w-52 h-52 rounded-full bg-[#8000FF] p-3 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {/* Outer Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-white/20 animate-spin-slow" />
                
                {/* Circular Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.5px] font-mono-tech font-bold uppercase tracking-widest fill-white">
                      <textPath href="#circlePath" startOffset="0%">
                        A GENERATION THAT BUILDS • A GENERATION THAT BUILDS •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner Crisp White Question Circle */}
                <div className="w-24 h-24 rounded-full bg-[#07060A] border-2 border-[#00F5A0] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                  <span className="font-display font-black text-6xl text-[#00F5A0] leading-none select-none">
                    ?
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Timeline Date Stepper Ticker */}
      <div className="w-full border-t border-white/10 pt-4 pb-2 mt-12 bg-[#07060A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-6 text-xs font-mono-tech uppercase font-bold text-[#F4F3F7]/70 overflow-x-auto no-scrollbar">
          <span className="text-[#8000FF]">AUG 15</span>
          <span>→</span>
          <span>SEP 05</span>
          <span>→</span>
          <span>OCT 02</span>
          <span>→</span>
          <span>NOV 14</span>
          <span>→</span>
          <span className="text-[#8000FF]">DEC</span>
        </div>
      </div>

    </section>
  );
};
