import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface StakeholderNode {
  id: string;
  name: string;
  role: string;
  description: string;
}

export const EventWhoShouldJoin: React.FC = () => {
  const [activeNode, setActiveNode] = useState<StakeholderNode | null>(null);

  const stakeholders: StakeholderNode[] = [
    {
      id: 'students',
      name: 'Students',
      role: 'Co-Creators of the Future',
      description: 'Taking ownership of their learning journeys beyond rigid exams and discovering real-world capability pathways.'
    },
    {
      id: 'teachers',
      name: 'Teachers',
      role: 'Mentors & Facilitators',
      description: 'Evolving from traditional lectures to AI-assisted flipped classrooms, guiding project-based learning.'
    },
    {
      id: 'industry',
      name: 'Industry',
      role: 'Ecosystem Mentors',
      description: 'Defining real-world problem statements, validating proof-of-work, and providing direct career mentorship.'
    },
    {
      id: 'government',
      name: 'Government',
      role: 'Policy Architecture',
      description: 'Translating grassroots student innovations and consultation outcomes into scalable educational policies.'
    },
    {
      id: 'researchers',
      name: 'Researchers',
      role: 'Evidence & Methodology',
      description: 'Measuring learning efficacy, AI tool integration impact, and long-term educational transformation.'
    },
    {
      id: 'parents',
      name: 'Parents',
      role: 'Supportive Foundation',
      description: 'Understanding modern career pathways beyond traditional marks to champion holistic student growth.'
    },
    {
      id: 'communities',
      name: 'Communities',
      role: 'Local Learning Hubs',
      description: 'Providing spaces, grassroots networks, and collaborative environments for continuous skill development.'
    }
  ];

  return (
    <section id="who-should-join" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            WHO SHOULD JOIN
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            One Ecosystem, Every Voice
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
            Hover over any stakeholder node to explore their role in the movement.
          </p>
        </div>

        {/* Animated Interactive Circle Matrix Layout */}
        <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
          {stakeholders.map((item) => {
            const isHovered = activeNode?.id === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveNode(item)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.08 }}
                className={`cursor-pointer px-6 py-4 rounded-full transition-all duration-300 border ${
                  isHovered
                    ? 'bg-[#6F3FF5] text-white border-[#6F3FF5] shadow-lg shadow-[#6F3FF5]/30'
                    : 'editorial-glass-card text-[#1E1E1E] border-black/10'
                }`}
              >
                <span className="text-sm font-semibold tracking-wide font-sans">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Tiny Description Preview Box below Nodes */}
        <div className="mt-12 max-w-xl mx-auto text-center min-h-[5rem]">
          {activeNode ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl editorial-glass-card border border-black/5"
            >
              <h4 className="text-sm font-semibold text-[#6F3FF5] uppercase tracking-wider font-mono-tech mb-1">
                {activeNode.name} — {activeNode.role}
              </h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                {activeNode.description}
              </p>
            </motion.div>
          ) : (
            <p className="text-xs text-[#737373] italic">
              Hover over a circle above to see how each stakeholder contributes to transformation.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
