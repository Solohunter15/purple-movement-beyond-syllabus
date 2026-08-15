import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const EventKnowledgeCommons: React.FC = () => {
  const { isDayMode } = useTheme();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [1000, 3000], [0, 240]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, skewY: 5 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section
      id="commons"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        isDayMode
          ? 'bg-gradient-to-b from-[#EBE4FB] via-[#F4F0FD] to-[#F7F6FB] text-[#0A0713]'
          : 'bg-gradient-to-b from-[#0F0724] to-[#07060A] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Tags */}
        <div
          className={`flex items-center justify-between text-xs font-mono-tech uppercase font-bold tracking-[0.25em] mb-20 ${
            isDayMode ? 'text-[#625D73]' : 'text-white/80'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OPEN ARCHIVE / 03
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SEARCHABLE. LINKABLE. PUBLIC.
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Massive Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h2
              className={`font-display font-black text-7xl sm:text-9xl md:text-[10rem] leading-[0.82] uppercase tracking-tight select-none ${
                isDayMode ? 'text-[#0A0713]' : 'text-white'
              }`}
            >
              <motion.div variants={wordVariants}>KNOWLEDGE</motion.div>
              <motion.div
                variants={wordVariants}
                className={isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}
              >
                COMMONS
              </motion.div>
            </h2>

            {/* Subtitle */}
            <motion.div 
              variants={wordVariants}
              className={`mt-8 space-y-1 text-base sm:text-xl font-bold uppercase tracking-wider font-sans ${
                isDayMode ? 'text-[#241F33]' : 'text-white/90'
              }`}
            >
              <div>EVERY CONVERSATION LEAVES EVIDENCE.</div>
              <div>EVERY IDEA REMAINS ACCESSIBLE.</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Explorer Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-end"
          >
            <a
              href="https://app.mulearn.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-44 h-44 rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                style={{ rotate }}
                className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                  isDayMode
                    ? 'border-[#7500EB]/40 group-hover:border-[#7500EB] group-hover:bg-[#7500EB]/10'
                    : 'border-white/40 group-hover:border-white group-hover:bg-white/10'
                }`}
              />
              <span
                className={`relative z-10 text-[11px] font-mono-tech uppercase font-bold tracking-widest leading-tight ${
                  isDayMode ? 'text-[#7500EB]' : 'text-white'
                }`}
              >
                EXPLORE<br />THE ARCHIVE ↗
              </span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

