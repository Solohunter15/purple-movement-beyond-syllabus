import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Layers, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EventOverviewCards: React.FC = () => {
  const { isDayMode } = useTheme();

  const cards = [
    {
      icon: Target,
      title: 'Purpose',
      tag: '01 GOAL',
      description: 'Move from reactive protest to constructive reform by designing actionable, AI-era education prototypes.'
    },
    {
      icon: Users,
      title: 'Stakeholders',
      tag: '02 ECOSYSTEM',
      description: 'Uniting students, teachers, industry leaders, researchers, policymakers, and communities into one collaborative framework.'
    },
    {
      icon: Layers,
      title: 'Framework',
      tag: '03 METHODOLOGY',
      description: 'Flipped classroom models, micro-quest skill verification, continuous peer mentorship, and institutional working groups.'
    },
    {
      icon: Award,
      title: 'Expected Outcomes',
      tag: '04 IMPACT',
      description: 'Tangible policy recommendations, pilot initiatives in partner colleges, and state-wide working groups.'
    }
  ];

  return (
    <section
      id="overview"
      className={`py-28 relative overflow-hidden transition-colors duration-300 border-t [perspective:1000px] ${
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
            MOVEMENT ARCHITECTURE
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
              CORE PILLARS
            </motion.h2>
          </div>
        </motion.div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 55, rotateY: 16 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`rounded-2xl p-7 border-2 flex flex-col justify-between transition-all duration-300 group ${
                  isDayMode
                    ? 'bg-[#F7F6FB] border-[#E4DFF2] hover:border-[#7500EB] shadow-xs hover:shadow-lg hover:shadow-purple-500/10'
                    : 'bg-[#111019] border-white/5 hover:border-[#8000FF] shadow-sm hover:shadow-lg hover:shadow-[#8000FF]/10'
                }`}
              >
                <div>
                  <motion.div
                    whileInView={{ scale: [0, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors ${
                      isDayMode
                        ? 'bg-[#7500EB]/10 text-[#7500EB] border-[#7500EB]/20 group-hover:bg-[#7500EB]/20'
                        : 'bg-[#8000FF]/25 text-[#00F5A0] border-[#8000FF]/30 group-hover:bg-[#8000FF]/40'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <span
                    className={`text-[10px] font-mono-tech uppercase tracking-widest block mb-1 font-bold ${
                      isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'
                    }`}
                  >
                    {card.tag}
                  </span>

                  <h3
                    className={`font-display font-black text-2xl uppercase mb-3 transition-colors ${
                      isDayMode
                        ? 'text-[#0A0713] group-hover:text-[#7500EB]'
                        : 'text-[#F4F3F7] group-hover:text-[#00F5A0]'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-xs font-normal leading-relaxed font-sans ${
                      isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

