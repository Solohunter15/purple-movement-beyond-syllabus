import React, { useRef, useState, useEffect, useCallback } from 'react';
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

// Defined outside component so it's stable
const PHASES: JourneyPhase[] = [
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

const wordReveal = {
  hidden: { opacity: 0, y: 60, skewY: 5, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, skewY: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const EventJourneyTimeline: React.FC = () => {
  // Ref for the scrollable wrapper (the `relative` parent of the line)
  const wrapperRef = useRef<HTMLDivElement>(null);
  // One ref per circle node — indexed same as PHASES
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  // lineLeft / lineWidth are in px, relative to wrapperRef's left edge
  const [lineLeft, setLineLeft]   = useState(0);
  const [lineTop, setLineTop]     = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [ready, setReady]         = useState(false);

  const measureLine = useCallback(() => {
    const wrapper = wrapperRef.current;
    const first   = circleRefs.current[0];
    const last    = circleRefs.current[PHASES.length - 1];
    if (!wrapper || !first || !last) return;

    const wRect = wrapper.getBoundingClientRect();
    const fRect = first.getBoundingClientRect();
    const lRect = last.getBoundingClientRect();

    // scrollLeft accounts for horizontal scroll inside the overflow-x-auto wrapper
    const scrollLeft = wrapper.scrollLeft;

    const left  = fRect.left  - wRect.left + scrollLeft + fRect.width  / 2;
    const right = lRect.left  - wRect.left + scrollLeft + lRect.width  / 2;
    const top   = fRect.top   - wRect.top  + fRect.height / 2;

    setLineLeft(left);
    setLineTop(top);
    setLineWidth(right - left);
    setReady(true);
  }, []);

  useEffect(() => {
    // Measure after initial paint and on every resize
    const timer = setTimeout(measureLine, 80);
    window.addEventListener('resize', measureLine);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureLine);
    };
  }, [measureLine]);

  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-[#07060A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-white/70"
          >
            THE JOURNEY / 02
          </motion.div>

          {/* Word-by-word headline reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className="text-right"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight">
              <div className="overflow-hidden">
                <motion.span variants={wordReveal} className="inline-block text-white">
                  CONVERSATION
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordReveal} className="inline-block text-[#8000FF]">
                  ACCUMULATES.
                </motion.span>
              </div>
            </h2>
          </motion.div>
        </div>

        {/* Timeline — wrapperRef is the positioning context for the line */}
        <div ref={wrapperRef} className="relative pt-12 pb-16 overflow-x-auto no-scrollbar">

          {/*
            The line is measured from the actual DOM position of circle 01 → circle 06.
            This is the only approach that is guaranteed correct at every viewport width.
            It renders only after measurement (ready=true) to avoid a flash at 0px.
          */}
          {ready && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top:    lineTop,
                left:   lineLeft,
                width:  lineWidth,
                height: 2,
                transformOrigin: 'left center',
                zIndex: 0,
              }}
              className="bg-gradient-to-r from-[#8000FF] via-[#8000FF] to-[#00F5A0] pointer-events-none"
            />
          )}

          {/* Node columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex items-start justify-between min-w-[64rem] relative z-10 px-4 gap-8"
          >
            {PHASES.map((phase, idx) => {
              const isMint = phase.isMint;
              return (
                <motion.div
                  key={phase.number}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' },
                    visible: {
                      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
                    }
                  }}
                  className="flex-1 flex flex-col items-start group"
                >
                  {/* Circle — ref captured for line measurement */}
                  <motion.div
                    ref={(el) => { circleRefs.current[idx] = el; }}
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 14 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-tech text-xs font-bold mb-6 shadow-lg z-10 relative cursor-default ${
                      isMint
                        ? 'bg-[#00F5A0] text-[#000000] ring-4 ring-[#00F5A0]/30 shadow-[#00F5A0]/30'
                        : 'bg-[#8000FF] text-white ring-4 ring-[#8000FF]/30 shadow-[#8000FF]/30'
                    }`}
                  >
                    {phase.number}
                  </motion.div>

                  <span className={`text-xs font-mono-tech font-bold uppercase tracking-wider mb-2 ${isMint ? 'text-[#00F5A0]' : 'text-[#8000FF]'}`}>
                    {phase.date}
                  </span>

                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                    {phase.action}
                  </h3>

                  <p className="text-xs text-white/80 font-bold mb-4 min-h-[32px]">
                    {phase.audience}
                  </p>

                  {phase.badge && (
                    <div className="mb-4 inline-block px-3 py-1 bg-[#00F5A0] text-[#000000] text-[10px] font-mono-tech uppercase font-bold tracking-wider rounded-xs">
                      {phase.badge}
                    </div>
                  )}

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
