import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Layers, Award } from 'lucide-react';

export const EventOverviewCards: React.FC = () => {
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
    <section id="overview" className="py-28 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10 [perspective:1000px]">
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
            className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold"
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
              className="font-display font-black text-5xl sm:text-7xl uppercase text-[#F4F3F7] tracking-tight"
            >
              CORE PILLARS
            </motion.h2>
          </div>
        </motion.div>

        {/* 4 Cards — depth flip on Y axis, no blur */}
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
                className="bg-[#111019] rounded-2xl p-7 border-2 border-white/5 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#8000FF]/10 group"
              >
                <div>
                  <motion.div
                    whileInView={{ scale: [0, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="w-12 h-12 rounded-xl bg-[#8000FF]/25 flex items-center justify-center mb-6 text-[#00F5A0] border border-[#8000FF]/30 group-hover:bg-[#8000FF]/40 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#8000FF] block mb-1 font-bold">
                    {card.tag}
                  </span>

                  <h3 className="font-display font-black text-2xl uppercase text-[#F4F3F7] mb-3 group-hover:text-[#00F5A0] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#9F9CAE] font-normal leading-relaxed font-sans">
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
