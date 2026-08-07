import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventThemeDark: React.FC = () => {
  return (
    <section id="theme-question" className="py-32 relative overflow-hidden bg-transparent text-[#1E1E1E]">
      {/* Subtle Light Ambient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#6F3FF5]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Section Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#6F3FF5] font-semibold mb-6 block"
        >
          // THE CENTRAL QUESTION
        </motion.span>

        {/* Large Light Editorial Serif Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] text-[#1E1E1E]"
        >
          Power Listened.{' '}
          <span className="block mt-2 italic text-[#6F3FF5]">
            What Must We Build Together Next?
          </span>
        </motion.h2>

        {/* Central Question Glassmorphic Callout Box (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl editorial-glass-card bg-white/80 border border-black/10 shadow-xl text-left max-w-3xl"
        >
          <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block mb-3 font-bold">
            // SUBMIT YOUR RESPONSE
          </span>

          <p className="font-serif-editorial text-xl sm:text-2xl text-[#1E1E1E] italic leading-relaxed">
            "If you had ONE opportunity to redesign India's education system for the AI era, what is the ONE structural change you would implement first—and why?"
          </p>

          <div className="mt-8 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-sans text-[#737373]">
              Open Consultation • Submissions incorporated into policy recommendations
            </span>
            
            <a
              href={EVENT_CONFIG.PERSPECTIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full editorial-button-primary text-xs font-mono-tech uppercase font-semibold tracking-wider flex items-center gap-1.5 shrink-0"
            >
              <span>Submit Perspective</span>
              <span>↗</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
