import React from 'react';
import { motion } from 'framer-motion';

export const EventWhyNow: React.FC = () => {
  return (
    <section id="why-now" className="py-28 relative overflow-hidden bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block mb-3 font-semibold">
              // WHY NOW?
            </span>
            
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E] leading-[1.1]">
              You Made Power Listen.{' '}
              <span className="block mt-2 italic text-[#6F3FF5] relative inline-block">
                Now let's Build Together.
                {/* Purple Underline Grows on Scroll */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#6F3FF5] origin-left"
                />
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Narrative & Movement Transition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-[#737373] text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              One resignation is not a revolution. Another individual can enter the same broken system and repeat the same failures. Real transformation requires moving from anger to action, accountability to reform, and protest to prototypes.
            </p>

            <p>
              The AI era demands that we shift from an examination-centric society to a capability society. Rather than criticizing broken institutions from the outside, Beyond Syllabus brings every stakeholder to the table to build the alternative together.
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono-tech uppercase tracking-wider text-[#1E1E1E] font-semibold">
              <span className="text-[#6F3FF5]">PROTEST → PROTOTYPE</span>
              <span>•</span>
              <span className="text-[#6F3FF5]">ANGER → ACTION</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
