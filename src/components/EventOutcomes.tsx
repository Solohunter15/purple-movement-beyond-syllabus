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
    <section id="outcomes" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            EXPECTED OUTCOMES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            What We Hope To Build Together
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
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
              className="editorial-glass-card rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono-tech font-bold text-[#6F3FF5] block mb-4">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#737373] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
