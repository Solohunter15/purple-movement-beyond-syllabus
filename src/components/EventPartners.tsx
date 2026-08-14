import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG } from '../config/partnersConfig';

export const EventPartners: React.FC = () => {
  return (
    <section id="partners" className="py-20 relative overflow-hidden bg-[#07060A] text-[#F4F3F7] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            COMMUNITY PARTNERS
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#F4F3F7] tracking-tight">
            ORGANISATIONS POWERING THE MOVEMENT
          </h2>
          <p className="text-xs sm:text-sm text-[#9F9CAE] font-sans">
            Hover over any partner card to explore their mission.
          </p>
        </div>

        {/* Compact Partner Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group relative bg-[#111019] rounded-2xl border-2 border-white/5 p-4 sm:p-5 flex flex-col items-center justify-between h-48 hover:border-[#8000FF] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg hover:shadow-[#8000FF]/15"
            >
              {/* Default State: Centered Wide Logo Frame */}
              <div className="w-full h-24 rounded-xl bg-white flex items-center justify-center p-3 shadow-inner group-hover:scale-95 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Partner Name Label */}
              <div className="w-full text-center mt-2 px-1">
                <span className="text-[11px] font-mono-tech uppercase font-bold text-[#F4F3F7]/85 truncate block group-hover:text-[#00F5A0] transition-colors tracking-wide">
                  {partner.name}
                </span>
              </div>

              {/* Hover Overlay: Smooth Reveal with Full Mission Description */}
              <div className="absolute inset-0 bg-[#141220]/95 backdrop-blur-md p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none rounded-2xl z-20 border border-[#8000FF]/50 transform translate-y-2 group-hover:translate-y-0 text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[9px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#8000FF]/25 text-[#00F5A0] font-bold border border-[#8000FF]/40 truncate">
                      {partner.category}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xs sm:text-sm uppercase text-[#F4F3F7] leading-tight mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-[11px] text-[#9F9CAE] leading-relaxed font-sans font-normal">
                    {partner.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono-tech text-[#00F5A0] font-bold">
                  <span>PARTNER MISSION</span>
                  <span>↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
