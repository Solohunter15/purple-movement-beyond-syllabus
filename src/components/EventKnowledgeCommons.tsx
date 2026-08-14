import React from 'react';
import { motion } from 'framer-motion';

export const EventKnowledgeCommons: React.FC = () => {
  return (
    <section id="commons" className="py-28 relative overflow-hidden bg-[#8000FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Tags (Screenshot 4) */}
        <div className="flex items-center justify-between text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-white/80 mb-20">
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

        {/* Main Content Grid (Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Massive Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="font-display font-black text-7xl sm:text-9xl md:text-[10rem] leading-[0.82] uppercase tracking-tight text-white select-none">
              <div>KNOWLEDGE</div>
              <div>COMMONS</div>
            </h2>

            {/* Subtitle */}
            <div className="mt-8 space-y-1 text-base sm:text-xl font-bold uppercase tracking-wider text-white/90 font-sans">
              <div>EVERY CONVERSATION LEAVES EVIDENCE.</div>
              <div>EVERY IDEA REMAINS ACCESSIBLE.</div>
            </div>
          </motion.div>

          {/* Right Column: Circular Explorer Button (Screenshot 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-end"
          >
            <a
              href="https://mlearn.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-44 h-44 rounded-full border border-white/60 flex flex-col items-center justify-center text-center p-4 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[11px] font-mono-tech uppercase font-bold tracking-widest text-white leading-tight">
                EXPLORE<br />THE ARCHIVE ↗
              </span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
