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

        {/* Section Header — staggered tag + sweep headline + fade subtext */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-left max-w-3xl mb-16 space-y-2"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold"
          >
            EXPECTED OUTCOMES / PROTOTYPES
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              variants={{
                hidden: { y: 70, opacity: 0, skewY: 5 },
                visible: {
                  y: 0, opacity: 1, skewY: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }
                }
              }}
              className="font-display font-black text-5xl sm:text-7xl uppercase text-[#F4F3F7] tracking-tight"
            >
              WHAT WE HOPE TO BUILD
            </motion.h2>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-sm text-[#9F9CAE] font-sans"
          >
            Concrete artifacts and ongoing initiatives, not just speeches.
          </motion.p>
        </motion.div>

        {/* 6 Outcomes Cards — stagger from bottom-left with blur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 55, x: -18, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111019] rounded-2xl p-7 border-2 border-white/5 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#8000FF]/10 group"
            >
              <div>
                <motion.span
                  whileInView={{ x: [0, 4, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                  className="text-sm font-mono-tech font-bold text-[#00F5A0] block mb-4 group-hover:scale-105 origin-left transition-transform"
                >
                  {item.number}
                </motion.span>

                <h3 className="font-display font-black text-2xl uppercase text-[#F4F3F7] mb-3 group-hover:text-[#00F5A0] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#9F9CAE] leading-relaxed font-sans font-normal">
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
