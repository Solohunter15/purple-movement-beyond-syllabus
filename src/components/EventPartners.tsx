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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COMMUNITY_PARTNERS_CONFIG.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -6, 0],
                transition: { 
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    delay: idx * 0.2,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.6, delay: idx * 0.05 }
                }
              }}
              viewport={{ once: true }}
              className="group relative bg-[#111019] rounded-2xl border-2 border-white/5 p-4 flex flex-col items-center justify-center min-h-[170px] hover:border-[#8000FF] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg hover:shadow-[#8000FF]/5"
            >
              {/* Centered Logo Frame */}
              <div className="w-24 h-24 rounded-xl bg-white/95 p-2 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-80 group-hover:-translate-y-2 shrink-0 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-0.5 transition-transform duration-300"
                />
              </div>

              {/* Revealed on Hover */}
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-36 transition-all duration-300 ease-in-out text-center flex flex-col items-center overflow-hidden w-full mt-1">
                <span className="text-[8px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#8000FF]/15 text-[#00F5A0] font-bold mb-1">
                  {partner.category}
                </span>

                <h3 className="font-display font-black text-lg text-[#F4F3F7] uppercase mb-1 leading-tight group-hover:text-[#00F5A0] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-[11px] text-[#9F9CAE] leading-snug line-clamp-3 font-sans">
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
