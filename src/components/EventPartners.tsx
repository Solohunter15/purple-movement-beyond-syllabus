import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG } from '../config/partnersConfig';

export const EventPartners: React.FC = () => {
  return (
    <section id="partners" className="py-20 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            COMMUNITY PARTNERS
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#0A0A0C] tracking-tight">
            ORGANISATIONS POWERING THE MOVEMENT
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] font-sans">
            Hover over any partner card to explore their mission.
          </p>
        </div>

        {/* Compact Partner Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative bg-white rounded-2xl border-2 border-black/10 p-4 flex flex-col items-center justify-center min-h-[170px] hover:border-[#8000FF] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Centered Logo Frame */}
              <div className="w-24 h-24 rounded-xl bg-white p-2 border border-black/5 flex items-center justify-center transition-all duration-300 group-hover:scale-80 group-hover:-translate-y-2 shrink-0 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-0.5 transition-transform duration-300"
                />
              </div>

              {/* Revealed on Hover */}
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-36 transition-all duration-300 ease-in-out text-center flex flex-col items-center overflow-hidden w-full mt-1">
                <span className="text-[8px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#8000FF]/10 text-[#8000FF] font-bold mb-1">
                  {partner.category}
                </span>

                <h3 className="font-display font-black text-lg text-[#0A0A0C] uppercase mb-1 leading-tight">
                  {partner.name}
                </h3>

                <p className="text-[11px] text-[#666666] leading-snug line-clamp-3 font-sans">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
