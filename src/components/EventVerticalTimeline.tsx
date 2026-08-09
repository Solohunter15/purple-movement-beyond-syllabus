import React from 'react';
import { motion } from 'framer-motion';

export const EventVerticalTimeline: React.FC = () => {
  const steps = [
    {
      phase: '01',
      title: 'Today',
      subtitle: 'Grassroots Dialogue',
      description: 'Engaging student leaders, faculty, and industry pioneers to map core educational friction points.'
    },
    {
      phase: '02',
      title: 'National Consultation',
      subtitle: 'Open Forum Assembly',
      description: 'Statewide consultation gathering public submissions and structural reform proposals.'
    },
    {
      phase: '03',
      title: 'Collaborative Discussions',
      subtitle: 'Stakeholder Workshops',
      description: 'Deep-dive sessions bringing policymakers, educators, and students into direct alignment.'
    },
    {
      phase: '04',
      title: 'Working Groups',
      subtitle: 'Domain Task Forces',
      description: 'Forming dedicated working groups for curriculum, AI tools, evaluation, and industry integration.'
    },
    {
      phase: '05',
      title: 'Recommendations',
      subtitle: 'Policy Draft Publication',
      description: 'Synthesizing consultation outcomes into an authoritative, actionable reform blueprint.'
    },
    {
      phase: '06',
      title: 'Framework',
      subtitle: 'Beyond Syllabus Standard',
      description: 'Establishing the open, decentralized framework for institutional adoption and faculty training.'
    },
    {
      phase: '07',
      title: 'Pilot Initiatives',
      subtitle: 'Campus Implementation',
      description: 'Deploying flipped classroom sandboxes and proof-of-work learning hubs across partner institutions.'
    }
  ];

  return (
    <section id="timeline" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            MOVEMENT ROADMAP
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            The Journey of System Change
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
            Emphasizing continuous action and institutional transformation, not static deadlines.
          </p>
        </div>

        {/* Vertical Journey Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-black/10 space-y-10 ml-4 sm:ml-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[1.95rem] sm:-left-[2.45rem] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-black/20 group-hover:border-[#6F3FF5] group-hover:bg-[#6F3FF5] transition-all flex items-center justify-center shadow-2xs">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 group-hover:bg-white transition-colors" />
              </div>

              {/* Step Card */}
              <div className="editorial-glass-card rounded-2xl p-6 border border-black/5 hover:border-[#6F3FF5]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-tech font-bold text-[#6F3FF5] uppercase">
                    PHASE {step.phase}
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#737373] uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#1E1E1E] mb-2 font-normal">
                  {step.title}
                </h3>

                <p className="text-xs text-[#737373] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
