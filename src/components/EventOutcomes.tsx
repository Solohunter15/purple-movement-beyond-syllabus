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
    <section id="outcomes" className="py-28 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            EXPECTED OUTCOMES / PROTOTYPES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#0A0A0C] tracking-tight">
            WHAT WE HOPE TO BUILD
          </h2>
          <p className="text-sm text-[#666666] font-sans">
            Concrete artifacts and ongoing initiatives, not just speeches.
          </p>
        </div>

        {/* 6 Outcomes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-7 border-2 border-black/10 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-sm"
            >
              <div>
                <span className="text-sm font-mono-tech font-bold text-[#8000FF] block mb-4">
                  {item.number}
                </span>

                <h3 className="font-display font-black text-2xl uppercase text-[#0A0A0C] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#666666] leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-mono-tech text-[#0A0A0C] font-bold">
                <span>DELIVERABLE</span>
                <span className="text-[#8000FF]">↗</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
