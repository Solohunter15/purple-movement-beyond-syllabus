import React from 'react';
import { motion } from 'framer-motion';
import { COMMUNITY_PARTNERS_CONFIG, type PartnerLogo } from '../config/partnersConfig';

import { Building2, ArrowUpRight } from 'lucide-react';

export const EventPartners: React.FC = () => {
  const row1Partners = COMMUNITY_PARTNERS_CONFIG.filter(p => p.rowOrder === 1);
  const row2Partners = COMMUNITY_PARTNERS_CONFIG.filter(p => p.rowOrder === 2);

  const renderPartnerCard = (partner: PartnerLogo, idx: number) => (
    <motion.div
      key={partner.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group skeuo-glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl w-full max-w-sm"
    >
      <div>
        {/* Partner Logo Image Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-16 h-16 rounded-xl skeuo-inset-container p-2 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/50 transition-colors shadow-inner overflow-hidden">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full skeuo-glass-card text-purple-300 border border-purple-500/30">
            {partner.category}
          </span>
        </div>

        {/* Partner Name */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors mb-2">
          {partner.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300 font-light leading-relaxed">
          {partner.description}
        </p>
      </div>

      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono font-semibold">
        <span>// COMMUNITY_PARTNER</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.div>
  );

  return (
    <section id="partners" className="py-28 relative overflow-hidden bg-[#05050a] border-t border-purple-500/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[36rem] h-[36rem] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full skeuo-inset-container text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 shadow-inner"
          >
            <Building2 className="w-4 h-4 text-purple-400" />
            <span>Community & Ecosystem Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Organizations Powering the <span className="gradient-text-purple">Movement</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light"
          >
            Bringing together student learning communities, HR leaders, AI initiatives, and youth movements.
          </motion.p>
        </div>

        {/* Staggered Offset Layout Container */}
        <div className="space-y-8">
          {/* Row 1: 2 Cards Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
            {row1Partners.map((partner, idx) => renderPartnerCard(partner, idx))}
          </div>

          {/* Row 2: 3 Cards Centered (Off-set flow pattern) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
            {row2Partners.map((partner, idx) => renderPartnerCard(partner, idx + 2))}
          </div>
        </div>
      </div>
    </section>
  );
};
