import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const EventOutcomes: React.FC = () => {
  const { isDayMode } = useTheme();

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
    <section
      id="outcomes"
      className={`py-28 relative overflow-hidden transition-colors duration-300 border-t ${
        isDayMode
          ? 'bg-[#FFFFFF] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#0A0910] text-[#F4F3F7] border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-left max-w-3xl mb-16 space-y-2"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className={`text-xs font-mono-tech uppercase tracking-[0.25em] block font-bold ${
              isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'
            }`}
          >
            EXPECTED OUTCOMES / PROTOTYPES
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              variants={{
                hidden: { y: 65, opacity: 0, skewY: 4 },
                visible: {
                  y: 0, opacity: 1, skewY: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }
                }
              }}
              className={`font-display font-black text-5xl sm:text-7xl uppercase tracking-tight ${
                isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
              }`}
            >
              WHAT WE HOPE TO BUILD
            </motion.h2>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className={`text-sm font-sans ${isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'}`}
          >
            Concrete artifacts and ongoing initiatives, not just speeches.
          </motion.p>
        </motion.div>

        {/* 6 Outcomes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, x: -16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.85, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-7 border-2 flex flex-col justify-between transition-all duration-300 group ${
                isDayMode
                  ? 'bg-[#F7F6FB] border-[#E4DFF2] hover:border-[#7500EB] shadow-xs hover:shadow-lg hover:shadow-purple-500/10'
                  : 'bg-[#111019] border-white/5 hover:border-[#8000FF] shadow-sm hover:shadow-lg hover:shadow-[#8000FF]/10'
              }`}
            >
              <div>
                <motion.span
                  whileInView={{ x: [0, 5, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                  className={`text-sm font-mono-tech font-bold block mb-4 group-hover:scale-105 origin-left transition-transform ${
                    isDayMode ? 'text-[#008F5B]' : 'text-[#00F5A0]'
                  }`}
                >
                  {item.number}
                </motion.span>

                <h3
                  className={`font-display font-black text-2xl uppercase mb-3 transition-colors ${
                    isDayMode
                      ? 'text-[#0A0713] group-hover:text-[#7500EB]'
                      : 'text-[#F4F3F7] group-hover:text-[#00F5A0]'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed font-sans font-normal ${
                    isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
                  }`}
                >
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

