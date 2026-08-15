import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface JourneyPhase {
  number: string;
  date: string;
  action: string;
  audience: string;
  question: string;
  badge?: string;
  isMint?: boolean;
}

const wordReveal = {
  hidden: { opacity: 0, y: 55, skewY: 4 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const EventJourneyTimeline: React.FC = () => {
  const { isDayMode } = useTheme();

  const phases: JourneyPhase[] = [
    {
      number: '01',
      date: 'JULY',
      action: 'INITIATE',
      audience: 'Ecosystem Stakeholders',
      question: '"Starting the conversation between students & educators."'
    },
    {
      number: '02',
      date: 'AUG 15',
      action: 'LISTEN',
      audience: 'Students + Student Communities',
      question: '"What needs to change?"'
    },
    {
      number: '03',
      date: 'SEP 05',
      action: 'QUESTION',
      audience: 'Academics + Policymakers',
      question: '"What should education become?"'
    },
    {
      number: '04',
      date: 'OCT 02',
      action: 'CONNECT',
      audience: 'Industry + Global Community',
      question: '"What capabilities will the future demand?"',
      badge: '24-HOUR GLOBAL RELAY'
    },
    {
      number: '05',
      date: 'NOV 14',
      action: 'BUILD',
      audience: 'All Stakeholders',
      question: '"What can we actually build?"'
    },
    {
      number: '06',
      date: 'DECEMBER',
      action: 'ACT',
      audience: 'Recommendations + Working Prototypes',
      question: '"Submission to the relevant Union Ministry."',
      isMint: true
    }
  ];

  return (
    <section
      id="journey"
      className={`py-28 relative overflow-hidden transition-colors duration-300 border-t ${
        isDayMode
          ? 'bg-[#F7F6FB] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#07060A] text-white border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Tag & Main Headline */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.5 }}
            className={`text-xs font-mono-tech uppercase font-bold tracking-[0.25em] ${
              isDayMode ? 'text-[#625D73]' : 'text-white/70'
            }`}
          >
            THE JOURNEY / 02
          </motion.div>

          {/* Massive Display Title — word-by-word reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className="text-right"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight">
              <div className="overflow-hidden">
                <motion.span
                  variants={wordReveal}
                  className={`inline-block ${isDayMode ? 'text-[#0A0713]' : 'text-white'}`}
                >
                  CONVERSATION
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  variants={wordReveal}
                  className={`inline-block ${isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'}`}
                >
                  ACCUMULATES.
                </motion.span>
              </div>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="relative pt-12 pb-16 overflow-x-auto no-scrollbar">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}
            className="relative flex items-start justify-between min-w-[64rem] z-10 px-4 gap-8"
          >
            {phases.map((phase, idx) => {
              const isMint = phase.isMint;
              return (
                <motion.div
                  key={phase.number}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9 },
                    visible: {
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
                    }
                  }}
                  className="relative flex-1 flex flex-col items-start group"
                >
                  {/* Connector Line to next node (omitted for the final node) */}
                  {idx < phases.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute top-5 left-5 w-[calc(100%+2rem)] h-[2px] z-0 origin-left pointer-events-none ${
                        idx === phases.length - 2
                          ? isDayMode
                            ? 'bg-gradient-to-r from-[#7500EB] to-[#008F5B]'
                            : 'bg-gradient-to-r from-[#8000FF] to-[#00F5A0]'
                          : isDayMode
                            ? 'bg-[#7500EB]'
                            : 'bg-[#8000FF]'
                      }`}
                    />
                  )}

                  {/* Numbered Circle Node */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 14 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-tech text-xs font-bold mb-6 shadow-lg z-10 relative cursor-default ${
                      isMint
                        ? isDayMode
                          ? 'bg-[#008F5B] text-white ring-4 ring-[#008F5B]/25 shadow-[#008F5B]/25'
                          : 'bg-[#00F5A0] text-[#000000] ring-4 ring-[#00F5A0]/30 shadow-[#00F5A0]/30'
                        : isDayMode
                          ? 'bg-[#7500EB] text-white ring-4 ring-[#7500EB]/25 shadow-[#7500EB]/25'
                          : 'bg-[#8000FF] text-white ring-4 ring-[#8000FF]/30 shadow-[#8000FF]/30'
                    }`}
                  >
                    {phase.number}
                  </motion.div>

                  <span
                    className={`text-xs font-mono-tech font-bold uppercase tracking-wider mb-2 ${
                      isMint
                        ? isDayMode ? 'text-[#008F5B]' : 'text-[#00F5A0]'
                        : isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'
                    }`}
                  >
                    {phase.date}
                  </span>

                  <h3
                    className={`font-display font-black text-3xl sm:text-4xl uppercase tracking-tight mb-2 ${
                      isDayMode ? 'text-[#0A0713]' : 'text-white'
                    }`}
                  >
                    {phase.action}
                  </h3>

                  <p
                    className={`text-xs font-bold mb-4 min-h-[32px] ${
                      isDayMode ? 'text-[#241F33]' : 'text-white/80'
                    }`}
                  >
                    {phase.audience}
                  </p>

                  {phase.badge && (
                    <div
                      className={`mb-4 inline-block px-3 py-1 text-[10px] font-mono-tech uppercase font-bold tracking-wider rounded-xs ${
                        isDayMode
                          ? 'bg-[#008F5B] text-white'
                          : 'bg-[#00F5A0] text-[#000000]'
                      }`}
                    >
                      {phase.badge}
                    </div>
                  )}

                  <p
                    className={`text-xs italic leading-relaxed ${
                      isDayMode ? 'text-[#625D73]' : 'text-white/50'
                    }`}
                  >
                    {phase.question}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

