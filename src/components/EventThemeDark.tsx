import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventThemeDark: React.FC = () => {
  return (
    <section id="theme-question" className="py-24 relative overflow-hidden bg-transparent text-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single Cohesive Question Card Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="spatial-glass-card rounded-[2.5rem] p-8 sm:p-12 text-center border border-black/10 shadow-xl bg-white/80 backdrop-blur-md flex flex-col items-center"
        >
          {/* Section Tag */}
          <span className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#6F3FF5] font-semibold mb-4 block">
            THE CENTRAL QUESTION
          </span>

          {/* Large Light Editorial Serif Title */}
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-[#1E1E1E] max-w-3xl">
            Power Listened.{' '}
            <span className="block mt-2 italic text-[#6F3FF5]">
              What Must We Build Together Next?
            </span>
          </h2>

          {/* Central Question Prompt */}
          <div className="mt-8 pt-8 border-t border-black/10 w-full max-w-2xl text-center">
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block mb-3 font-bold">
              SUBMIT YOUR RESPONSE
            </span>

            <p className="font-serif-editorial text-lg sm:text-2xl text-[#1E1E1E] italic leading-relaxed">
              "If you had ONE opportunity to redesign India's education system for the AI era, what is the ONE structural change you would implement first—and why?"
            </p>

            <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <span className="text-xs font-sans text-[#737373] text-left">
                Open Consultation • Submissions incorporated into policy recommendations
              </span>
              
              <a
                href={EVENT_CONFIG.PERSPECTIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full spatial-button-primary text-xs font-mono-tech uppercase font-semibold tracking-wider flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Submit Perspective</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
