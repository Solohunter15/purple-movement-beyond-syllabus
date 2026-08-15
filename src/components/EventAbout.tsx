import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const lineReveal = {
  hidden: { opacity: 0, y: 65, skewY: 5 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const EventAbout: React.FC = () => {
  const { isDayMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDayMode
          ? 'bg-[#FFFFFF] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#0A0910] text-[#F4F3F7] border-white/10'
      }`}
    >
      {/* Top Right Decorative Purple Arc */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: isDayMode ? 0.25 : 0.4, scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-64 h-64 bg-[#8000FF] rounded-bl-full pointer-events-none transform translate-x-12 -translate-y-12"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tag Header */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-mono-tech uppercase font-bold tracking-[0.25em] mb-6 ${
            isDayMode ? 'text-[#625D73]' : 'text-[#F4F3F7]/60'
          }`}
        >
          THE PROPOSITION / 01
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Headline — line-by-line split reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
            className="lg:col-span-7"
          >
            <h2
              className={`font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight ${
                isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
              }`}
            >
              {[
                { text: 'NOT ANOTHER', accent: false },
                { text: 'DISCUSSION ABOUT', accent: false },
                { text: 'WHAT IS BROKEN.', accent: true },
              ].map(({ text, accent }, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    variants={lineReveal}
                    className={accent ? (isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]') : ''}
                  >
                    {text}
                  </motion.div>
                </div>
              ))}
            </h2>
          </motion.div>

          {/* Right Column — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 pt-2"
          >
            <p
              className={`text-base sm:text-xl font-bold leading-snug font-sans ${
                isDayMode ? 'text-[#181427]' : 'text-[#F4F3F7]'
              }`}
            >
              Beyond Syllabus is a public process for turning collective intelligence into credible alternatives for education.
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed font-normal font-sans ${
                isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
              }`}
            >
              Students, educators, researchers, industry, policymakers and community leaders move together—from lived experience to evidence, prototypes and practical recommendations.
            </p>

            <a
              href="#journey"
              className={`mt-8 p-6 rounded-2xl border-2 flex items-center justify-between group cursor-pointer transition-all duration-300 block ${
                isDayMode
                  ? 'bg-[#F7F6FB] border-[#E4DFF2] hover:border-[#7500EB] hover:shadow-lg hover:shadow-purple-500/10'
                  : 'bg-[#111019] border-white/5 hover:border-[#8000FF] hover:shadow-lg hover:shadow-[#8000FF]/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileInView={{ scale: [0.7, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-10 h-10 rounded-full bg-[#8000FF] text-white flex items-center justify-center font-bold font-mono-tech text-xs ring-4 ring-[#8000FF]/15"
                >
                  01
                </motion.div>
                <div>
                  <h4
                    className={`text-sm font-bold transition-colors uppercase font-mono-tech ${
                      isDayMode
                        ? 'text-[#0A0713] group-hover:text-[#7500EB]'
                        : 'text-[#F4F3F7] group-hover:text-[#00F5A0]'
                    }`}
                  >
                    Public Collaborative Process
                  </h4>
                  <p className={`text-xs ${isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'}`}>
                    6 Key Ecosystem Stakeholders
                  </p>
                </div>
              </div>
              <span
                className={`text-xs font-mono-tech font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform ${
                  isDayMode ? 'text-[#7500EB]' : 'text-[#00F5A0]'
                }`}
              >
                Explore Process →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

