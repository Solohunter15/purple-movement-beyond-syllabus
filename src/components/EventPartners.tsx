import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG } from '../config/partnersConfig';

export const EventPartners: React.FC = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block mb-2 font-semibold">
            // COMMUNITY PARTNERS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1E1E1E]">
            Organisations Powering the Movement
          </h2>
        </div>

        {/* Spatial Logo Slider */}
        <div className="w-full overflow-hidden py-6 spatial-glass-pill rounded-2xl border border-black/5 shadow-2xs">
          <div className="animate-marquee-slow flex items-center gap-16">
            {[...COMMUNITY_PARTNERS_CONFIG, ...COMMUNITY_PARTNERS_CONFIG].map((partner, idx) => (
              <motion.div
                key={`${partner.id}-${idx}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 shrink-0 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl spatial-inset bg-white p-2 flex items-center justify-center border border-black/5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-[#737373] group-hover:text-[#1E1E1E] transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
