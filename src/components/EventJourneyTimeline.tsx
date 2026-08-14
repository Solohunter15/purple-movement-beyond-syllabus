import React from 'react';
import { motion } from 'framer-motion';

interface JourneyPhase {
  number: string;
  date: string;
  action: string;
  audience: string;
  question: string;
  badge?: string;
  isMint?: boolean;
}

export const EventJourneyTimeline: React.FC = () => {
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
    <section id="journey" className="py-28 relative overflow-hidden bg-[#07060A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag & Main Headline (Screenshot 2) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-20">
          
          {/* Top Left Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-white/70"
          >
            THE JOURNEY / 02
          </motion.div>

          {/* Massive Display Title Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-right"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight">
              <div className="text-white">CONVERSATION</div>
              <div className="text-[#8000FF]">ACCUMULATES.</div>
            </h2>
          </motion.div>

        </div>

        {/* Horizontal Timeline Bar (Screenshot 2) */}
        <div className="relative pt-12 pb-16 overflow-x-auto no-scrollbar">
          
          {/* Connecting Line (Purple for 01-04, Mint Green for 05) */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "calc(100% - 4rem)" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[3rem] left-8 h-[2px] bg-gradient-to-r from-[#8000FF] via-[#8000FF] to-[#00F5A0] z-0 origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16
                }
              }
            }}
            className="flex items-start justify-between min-w-[64rem] relative z-10 px-4 gap-8"
          >
            {phases.map((phase) => {
              const isMint = phase.isMint;
              return (
                <motion.div
                  key={phase.number}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex-1 flex flex-col items-start group"
                >
                  
                  {/* Numbered Circle Node */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-tech text-xs font-bold transition-transform duration-300 group-hover:scale-110 mb-6 shadow-lg ${
                      isMint
                        ? 'bg-[#00F5A0] text-[#000000] ring-4 ring-[#00F5A0]/20'
                        : 'bg-[#8000FF] text-white ring-4 ring-[#8000FF]/20'
                    }`}
                  >
                    {phase.number}
                  </div>

                  {/* Date Badge */}
                  <span
                    className={`text-xs font-mono-tech font-bold uppercase tracking-wider mb-2 ${
                      isMint ? 'text-[#00F5A0]' : 'text-[#8000FF]'
                    }`}
                  >
                    {phase.date}
                  </span>

                  {/* Action Headline */}
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                    {phase.action}
                  </h3>

                  {/* Audience Subtitle */}
                  <p className="text-xs text-white/80 font-bold mb-4 min-h-[32px]">
                    {phase.audience}
                  </p>

                  {/* Optional Mint Green Tag Badge (Screenshot 2: Node 03) */}
                  {phase.badge && (
                    <div className="mb-4 inline-block px-3 py-1 bg-[#00F5A0] text-[#000000] text-[10px] font-mono-tech uppercase font-bold tracking-wider rounded-xs">
                      {phase.badge}
                    </div>
                  )}

                  {/* Question Quote */}
                  <p className="text-xs text-white/50 italic leading-relaxed">
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
