import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG } from '../config/partnersConfig';

export const EventPartners: React.FC = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-transparent border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            COMMUNITY PARTNERS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1E1E1E]">
            Organisations Powering the Movement
          </h2>
          <p className="text-sm text-[#737373]">
            Hover over any partner card to explore their mission.
          </p>
        </div>

        {/* Compact Partner Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white/90 backdrop-blur-md rounded-3xl border border-black/5 p-6 flex flex-col items-center justify-center min-h-[220px] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Compact Centered Logo Frame */}
              <div className="w-28 h-28 rounded-2xl bg-white p-3 border border-black/5 shadow-2xs flex items-center justify-center transition-all duration-300 group-hover:scale-85 group-hover:-translate-y-2 shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain p-1 rounded-xl transition-transform duration-300"
                />
              </div>

              {/* Revealed on Hover: Name & 2-3 Line Bio */}
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 ease-in-out text-center flex flex-col items-center overflow-hidden w-full mt-1">
                <span className="text-[9px] font-mono-tech uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#6F3FF5]/10 text-[#6F3FF5] font-semibold mb-1">
                  {partner.category}
                </span>

                <h3 className="font-serif-editorial text-xl text-[#1E1E1E] font-medium mb-1">
                  {partner.name}
                </h3>

                <p className="text-xs text-[#737373] leading-relaxed line-clamp-3 max-w-xs font-normal">
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
