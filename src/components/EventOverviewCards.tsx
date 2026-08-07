import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Layers, Award } from 'lucide-react';

export const EventOverviewCards: React.FC = () => {
  const cards = [
    {
      icon: Target,
      title: 'Purpose',
      tag: '01 // GOAL',
      description: 'Move from reactive protest to constructive reform by designing actionable, AI-era education prototypes.'
    },
    {
      icon: Users,
      title: 'Stakeholders',
      tag: '02 // ECOSYSTEM',
      description: 'Uniting students, teachers, industry leaders, researchers, policymakers, and communities into one collaborative framework.'
    },
    {
      icon: Layers,
      title: 'Framework',
      tag: '03 // METHODOLOGY',
      description: 'Flipped classroom models, micro-quest skill verification, continuous peer mentorship, and institutional working groups.'
    },
    {
      icon: Award,
      title: 'Expected Outcomes',
      tag: '04 // IMPACT',
      description: 'Tangible policy recommendations, pilot initiatives in partner colleges, and state-wide working groups.'
    }
  ];

  return (
    <section id="overview" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            // MOVEMENT ARCHITECTURE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            Event Highlights & Core Pillars
          </h2>
        </div>

        {/* 4 Glass Cards Grid */}
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
                className="spatial-glass-card rounded-3xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl spatial-inset flex items-center justify-center mb-6 text-[#6F3FF5]">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#737373] block mb-1 font-semibold">
                    {card.tag}
                  </span>

                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#737373] font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono-tech text-[#737373]">
                  <span>EXPAND</span>
                  <span className="text-[#6F3FF5]">↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
