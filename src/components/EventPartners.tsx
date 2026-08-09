import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG } from '../config/partnersConfig';

export const EventPartners: React.FC = () => {
  return (
    <section id="partners" className="py-28 relative overflow-hidden bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            COMMUNITY PARTNERS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            Organisations Powering the Movement
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
            Collaborative ecosystems and partners driving learning innovation.
          </p>
        </div>

        {/* Editorial Partner Card Grid / Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="spatial-glass-card rounded-3xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Logo Frame matching speaker card styling */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-black/5 bg-white flex items-center justify-center p-8 shadow-inner">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-[#1E1E1E] border border-black/5 shadow-xs font-semibold">
                    {partner.category}
                  </span>
                </div>

                {/* Partner Info */}
                <h3 className="font-serif-editorial text-2xl text-[#1E1E1E] font-normal group-hover:text-[#6F3FF5] transition-colors mb-2">
                  {partner.name}
                </h3>

                <p className="text-xs text-[#737373] leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono-tech text-[#737373]">
                <span>COMMUNITY PARTNER</span>
                <span className="text-[#6F3FF5] font-semibold">ECOSYSTEM</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
