import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_SPEAKERS_CONFIG } from '../config/speakersConfig';

export const EventSpeakers: React.FC = () => {
  return (
    <section id="speakers" className="py-28 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            VOICES & KEYNOTES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#0A0A0C] tracking-tight">
            VOICES SHAPING EDUCATION
          </h2>
          <p className="text-sm text-[#666666] font-sans">
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
              className="bg-white rounded-2xl p-6 border-2 border-black/10 flex flex-col justify-between group hover:border-[#8000FF] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Large Portrait Frame */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden mb-6 border border-black/10 bg-slate-100 shadow-inner">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`w-full h-full object-cover ${speaker.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-xs bg-[#8000FF] text-white font-bold">
                    {speaker.category}
                  </span>
                </div>

                {/* Speaker Info */}
                <h3 className="font-display font-black text-3xl text-[#0A0A0C] uppercase group-hover:text-[#8000FF] transition-colors mb-1">
                  {speaker.name}
                </h3>

                <p className="text-xs text-[#8000FF] font-bold mb-4 font-mono-tech uppercase">
                  {speaker.designation} • <strong className="text-[#0A0A0C]">{speaker.organization}</strong>
                </p>

                {/* Topic / Quote */}
                {speaker.topic && (
                  <p className="text-xs text-[#666666] italic leading-relaxed border-l-2 border-[#8000FF] pl-3 font-sans">
                    "{speaker.topic}"
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-mono-tech text-[#0A0A0C] font-bold">
                <span>KEYNOTE SPEAKER</span>
                <span className="text-[#8000FF]">↗</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
