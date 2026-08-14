import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const EventKnowledgeCommons: React.FC = () => {
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
    <section id="commons" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#0F0724] to-[#07060A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Tags (Screenshot 4) */}
        <div className="flex items-center justify-between text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-white/80 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            OPEN ARCHIVE / 03
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            SEARCHABLE. LINKABLE. PUBLIC.
          </motion.div>
        </div>

        {/* Main Content Grid (Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Massive Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <h2 className="font-display font-black text-7xl sm:text-9xl md:text-[10rem] leading-[0.82] uppercase tracking-tight text-white select-none">
              <motion.div variants={wordVariants}>KNOWLEDGE</motion.div>
              <motion.div variants={wordVariants} className="text-[#8000FF]">COMMONS</motion.div>
            </h2>

            {/* Subtitle */}
            <motion.div 
              variants={wordVariants}
              className="mt-8 space-y-1 text-base sm:text-xl font-bold uppercase tracking-wider text-white/90 font-sans"
            >
              <div>EVERY CONVERSATION LEAVES EVIDENCE.</div>
              <div>EVERY IDEA REMAINS ACCESSIBLE.</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Explorer Button (Screenshot 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-end"
          >
            <a
              href="https://mlearn.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-44 h-44 rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                style={{ rotate }}
                className="absolute inset-0 rounded-full border border-white/40 group-hover:border-white group-hover:bg-white/10 transition-colors duration-300"
              />
              <span className="relative z-10 text-[11px] font-mono-tech uppercase font-bold tracking-widest text-white leading-tight">
                EXPLORE<br />THE ARCHIVE ↗
              </span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
