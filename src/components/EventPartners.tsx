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
            Hover over any partner logo to learn more about their mission and role.
          </p>
        </div>

        {/* Clean Partner Logo Card Grid (Sample Reference Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-black/5 p-8 flex flex-col items-center justify-center min-h-[320px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Centered Logo Frame (matching sample reference image) */}
              <div className="w-36 h-36 rounded-2xl bg-white p-4 border border-black/5 shadow-xs flex items-center justify-center transition-all duration-500 group-hover:scale-90 group-hover:-translate-y-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500"
                />
              </div>

              {/* Revealed on Hover: Partner Name & 2-3 Line Bio */}
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out text-center flex flex-col items-center overflow-hidden w-full">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#6F3FF5]/10 text-[#6F3FF5] font-semibold mb-1">
                  {partner.category}
                </span>

                <h3 className="font-serif-editorial text-2xl text-[#1E1E1E] font-medium mb-1">
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
