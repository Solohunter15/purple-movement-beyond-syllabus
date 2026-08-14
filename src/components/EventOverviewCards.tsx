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
    <section id="overview" className="py-28 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            MOVEMENT ARCHITECTURE
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#0A0A0C] tracking-tight">
            CORE PILLARS
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border-2 border-black/10 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#8000FF]/10 flex items-center justify-center mb-6 text-[#8000FF]">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#8000FF] block mb-1 font-bold">
                    {card.tag}
                  </span>

                  <h3 className="font-display font-black text-2xl uppercase text-[#0A0A0C] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#666666] font-normal leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-mono-tech text-[#0A0A0C] font-bold">
                  <span>FRAMEWORK</span>
                  <span className="text-[#8000FF]">↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
