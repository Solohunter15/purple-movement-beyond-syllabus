import React from 'react';
import { motion } from 'framer-motion';

export const EventOutcomes: React.FC = () => {
  const outcomes = [
    {
      number: '01',
      title: 'Shared Understanding',
      description: 'A unified consensus across students, faculty, and industry on the core priorities of education in the AI era.'
    },
    {
      number: '02',
      title: 'Practical Ideas',
      description: 'Actionable classroom prototypes, AI-assisted self-learning tools, and project-based evaluation models.'
    },
    {
      number: '03',
      title: 'Pilot Initiatives',
      description: 'Immediate rollout of flipped classroom sandboxes and peer learning hubs in partner institutions.'
    },
    {
      number: '04',
      title: 'Collaborative Framework',
      description: 'An open, decentralized model for continuous curriculum iteration beyond rigid bureaucratic cycles.'
    },
    {
      number: '05',
      title: 'Working Groups',
      description: 'Interdisciplinary teams of students, educators, and mentors leading domain-specific educational reform.'
    },
    {
      number: '06',
      title: 'Future Roadmap',
      description: 'A multi-year strategic roadmap submitted to government & academic bodies for systemic implementation.'
    }
  ];

  return (
    <section id="outcomes" className="py-28 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            EXPECTED OUTCOMES / PROTOTYPES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#F4F3F7] tracking-tight">
            WHAT WE HOPE TO BUILD
          </h2>
          <p className="text-sm text-[#9F9CAE] font-sans">
            Concrete artifacts and ongoing initiatives, not just speeches.
          </p>
        </div>

        {/* 6 Outcomes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111019] rounded-2xl p-7 border-2 border-white/5 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#8000FF]/5 group"
            >
              <div>
                <span className="text-sm font-mono-tech font-bold text-[#00F5A0] block mb-4 group-hover:scale-105 origin-left transition-transform">
                  {item.number}
                </span>

                <h3 className="font-display font-black text-2xl uppercase text-[#F4F3F7] mb-3 group-hover:text-[#00F5A0] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#9F9CAE] leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-[#F4F3F7]/70 font-bold group-hover:text-[#F4F3F7] transition-colors">
                <span>DELIVERABLE</span>
                <span className="text-[#00F5A0]">↗</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
