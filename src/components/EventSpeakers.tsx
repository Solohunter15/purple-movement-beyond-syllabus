import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_SPEAKERS_CONFIG, type Speaker } from '../config/speakersConfig';

import { Sparkles, Building2, Quote, CheckCircle2 } from 'lucide-react';

export const EventSpeakers: React.FC = () => {
  const row1Speakers = FEATURED_SPEAKERS_CONFIG.filter(s => s.rowOrder === 1);
  const row2Speakers = FEATURED_SPEAKERS_CONFIG.filter(s => s.rowOrder === 2);

  const renderSpeakerCard = (speaker: Speaker, idx: number) => (
    <motion.div
      key={speaker.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group skeuo-glass-card rounded-3xl p-6 sm:p-7 border border-white/12 flex flex-col justify-between relative overflow-hidden shadow-2xl w-full max-w-md"
    >
      <div>
        {/* Speaker Photo Avatar Frame */}
        <div className="relative w-full h-64 rounded-2xl skeuo-inset-container overflow-hidden mb-6 border border-purple-500/30 shadow-inner group-hover:border-purple-400/60 transition-colors">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Subtle Ambient Radial Mask Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-80" />

          {/* Category Badge */}
          <span className="absolute top-3 right-3 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full skeuo-button-primary text-white shadow-lg">
            {speaker.category}
          </span>
        </div>

        {/* Speaker Name */}
        <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors mb-1 tracking-tight">
          {speaker.name}
        </h3>

        {/* Designation & Organization */}
        <div className="flex items-start gap-2 text-xs text-purple-300 font-semibold mb-3">
          <Building2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <span>{speaker.designation} • <strong className="text-white">{speaker.organization}</strong></span>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
          {speaker.bio}
        </p>

        {/* Keynote / Talk Topic */}
        {speaker.topic && (
          <div className="p-3.5 rounded-xl skeuo-inset-container text-xs text-purple-200 leading-relaxed font-light border border-white/5 flex items-start gap-2">
            <Quote className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 rotate-180" />
            <div>
              <span className="font-bold text-purple-300 block text-[11px] uppercase tracking-wider mb-0.5">Session Highlight:</span>
              "{speaker.topic}"
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span className="flex items-center gap-1.5 text-purple-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" /> Keynote Speaker
        </span>
        <span className="font-mono text-slate-500 font-bold">BS-2025</span>
      </div>
    </motion.div>
  );

  return (
    <section id="speakers" className="py-28 relative overflow-hidden bg-[#05050a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[36rem] h-[36rem] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

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
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Featured Speakers & Keynotes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Industry Leaders & <span className="gradient-text-purple">Visionaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light"
          >
            Keynote sessions led by founders, practitioners, and ecosystem pioneers shaping future-ready education.
          </motion.p>
        </div>

        {/* Staggered Desktop Layout Container */}
        <div className="space-y-10">
          {/* Row 1: Hierarchical Top Leaders (Deepu S. Nath & Claire C. John) - Centered 2-Card Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            {row1Speakers.map((speaker, idx) => renderSpeakerCard(speaker, idx))}
          </div>

          {/* Row 2: Secondary Speakers (Deepa Nair & Rest) - Centered Staggered Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            {row2Speakers.map((speaker, idx) => renderSpeakerCard(speaker, idx + 2))}
          </div>
        </div>
      </div>
    </section>
  );
};
