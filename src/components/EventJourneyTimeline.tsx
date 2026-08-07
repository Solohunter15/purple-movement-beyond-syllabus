import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineStep {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const EventJourneyTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(3); // Default active step

  const steps: TimelineStep[] = [
    {
      year: '2020',
      title: 'Initial Dialogue',
      subtitle: 'Recognizing Education Gaps',
      description: 'First informal discussions exploring skill shortages and rigid examination boundaries in higher education.'
    },
    {
      year: '2022',
      title: 'Bridge the Gap',
      subtitle: 'Statewide Symposium',
      description: 'Bringing K-DISC, KTU, industry leads, and faculty together. Produced outcomes like 6-month internships.'
    },
    {
      year: '2023',
      title: 'μLearn Launch',
      subtitle: 'Peer Learning Ecosystem',
      description: 'Building a decentralized student learning network enabling micro-quests, peer mentorship, and proof-of-work.'
    },
    {
      year: '2024',
      title: 'Beyond Syllabus Pilots',
      subtitle: 'Flipped Classroom Sandbox',
      description: 'Experimenting with AI-assisted self-learning tools and faculty mentor models across partner institutions.'
    },
    {
      year: '2025',
      title: 'Student Movement',
      subtitle: 'Youth Voice Realized',
      description: 'Students stood united across the state, proving that courage can make power listen and demand system change.'
    },
    {
      year: '2026',
      title: 'Bridge the Gap 4.0',
      subtitle: 'Beyond Syllabus Launch',
      description: 'Transitioning from protest to prototypes. Aug 15 National Consultation & Sept 5 Stakeholder Summit.'
    }
  ];

  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block font-semibold">
            // OUR JOURNEY
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E]">
            Continuing a Journey, Not Starting From Scratch
          </h2>
          <p className="text-base sm:text-lg text-[#737373] font-normal">
            This movement is built upon years of experimentation, policy outcomes, and community learning.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="relative pt-8 pb-12 overflow-x-auto no-scrollbar">
          
          {/* Connecting Line */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-[2px] bg-black/10 z-0" />
          
          <div className="flex items-start justify-between min-w-[56rem] gap-6 relative z-10 px-4">
            {steps.map((step, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={step.year}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="flex-1 cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Step Year Badge */}
                  <span className={`text-xs font-mono-tech font-bold uppercase mb-3 transition-colors ${isActive ? 'text-[#6F3FF5]' : 'text-[#737373]'}`}>
                    {step.year}
                  </span>

                  {/* Interactive Dot Node */}
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#6F3FF5] border-[#6F3FF5] shadow-[0_0_15px_rgba(111,63,245,0.4)] scale-110'
                      : 'bg-white border-black/20 group-hover:border-[#6F3FF5]'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-black/20 group-hover:bg-[#6F3FF5]'}`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`mt-4 text-base font-semibold transition-colors ${isActive ? 'text-[#1E1E1E]' : 'text-[#737373]'}`}>
                    {step.title}
                  </h3>
                  <span className="text-[11px] text-[#737373] font-medium block mt-0.5">
                    {step.subtitle}
                  </span>

                  {/* Expanded Detail Box on Hover/Active */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8, height: isActive ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 w-full max-w-xs"
                  >
                    <div className="p-4 rounded-xl editorial-glass-card border border-black/5 text-left text-xs text-[#737373] leading-relaxed shadow-sm">
                      {step.description}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
