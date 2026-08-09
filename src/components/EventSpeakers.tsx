import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_SPEAKERS_CONFIG } from '../config/speakersConfig';

export const EventSpeakers: React.FC = () => {
  return (
    <section id="speakers" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            SPEAKERS & KEYNOTES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            Voices Shaping the AI Era
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
            Leading practitioners, academic visionaries, and community founders.
          </p>
        </div>

        {/* Editorial Speaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_SPEAKERS_CONFIG.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="spatial-glass-card rounded-3xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Large Portrait Frame */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 border border-black/5 bg-slate-100 shadow-inner">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`w-full h-full object-cover ${speaker.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#1E1E1E] backdrop-blur-md shadow-xs font-semibold">
                    {speaker.category}
                  </span>
                </div>

                {/* Speaker Info */}
                <h3 className="font-serif-editorial text-2xl text-[#1E1E1E] font-normal group-hover:text-[#6F3FF5] transition-colors mb-1">
                  {speaker.name}
                </h3>

                <p className="text-xs text-[#6F3FF5] font-medium mb-4">
                  {speaker.designation} • <strong className="text-[#1E1E1E]">{speaker.organization}</strong>
                </p>

                {/* One-Line Quote */}
                {speaker.topic && (
                  <p className="text-xs text-[#737373] italic leading-relaxed border-l-2 border-[#6F3FF5]/40 pl-3">
                    "{speaker.topic}"
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono-tech text-[#737373]">
                <span>KEYNOTE SPEAKER</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
