import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const EventActionLayer: React.FC = () => {
  const { isDayMode } = useTheme();

  const topics = [
    'Curriculum', 'Assessment', 'Employability', 'AI & Education',
    'Teacher Development', 'Student Agency', 'Future of Work', 'Policy'
  ];

  const actionRows = [
    { id: '01', title: 'IDEAS', description: 'Actionable interventions', href: '#about' },
    { id: '02', title: 'PROTOTYPE LAB', description: 'Alternatives under construction', href: '#outcomes' },
    { id: '03', title: 'OUTCOMES', description: 'Evidence to recommendations', href: '#outcomes' }
  ];

  return (
    <section
      id="action-layer"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDayMode
          ? 'bg-[#FFFFFF] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#0A0910] text-[#F4F3F7] border-white/10'
      }`}
    >
      {/* Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 0.7 }}
        className={`w-full py-3 overflow-hidden mb-16 transition-colors border-b ${
          isDayMode
            ? 'bg-[#EDE8F7] border-[#E4DFF2] text-[#241F33]'
            : 'bg-[#07060A] border-white/10 text-[#F4F3F7]/80'
        }`}
      >
        <div className="flex whitespace-nowrap animate-marquee-slow text-xs font-mono-tech uppercase font-bold tracking-wider">
          {[...topics, ...topics, ...topics].map((topic, i) => (
            <span key={i} className="mx-4 inline-flex items-center gap-4">
              <span>{topic}</span>
              <span className={isDayMode ? 'text-[#7500EB] font-black' : 'text-[#8000FF] font-black'}>•</span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-mono-tech uppercase font-bold tracking-[0.25em] mb-8 ${
            isDayMode ? 'text-[#625D73]' : 'text-[#F4F3F7]/60'
          }`}
        >
          ACTION LAYER / 04
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Headline */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <h2
                className={`font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight ${
                  isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
                }`}
              >
                {[
                  { text: 'FROM PROTEST', accent: false },
                  { text: 'TO PROTOTYPE.', accent: true },
                ].map(({ text, accent }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div
                      variants={{
                        hidden: { y: 75, opacity: 0, skewY: 4 },
                        visible: {
                          y: 0, opacity: 1, skewY: 0,
                          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
                        }
                      }}
                      className={accent ? (isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]') : ''}
                    >
                      {text}
                    </motion.div>
                  </div>
                ))}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className={`text-base sm:text-lg font-bold font-sans pt-2 ${
                isDayMode ? 'text-[#241F33]' : 'text-[#F4F3F7]'
              }`}
            >
              Talking about broken systems is easy. Building alternatives is harder.
            </motion.p>
          </div>

          {/* Right Column: Action Table — rows slide in from right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className={`lg:col-span-6 border-t-2 border-b-2 divide-y ${
              isDayMode
                ? 'border-[#D8D1EC] divide-[#E4DFF2]'
                : 'border-white/20 divide-white/20'
            }`}
          >
            {actionRows.map((row) => (
              <motion.div
                key={row.id}
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: {
                    opacity: 1, x: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
                  }
                }}
              >
                <a
                  href={row.href}
                  className={`py-6 px-2 flex items-center justify-between group transition-colors cursor-pointer block ${
                    isDayMode ? 'hover:bg-[#7500EB]/08' : 'hover:bg-[#8000FF]/15'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono-tech text-xs font-bold ${isDayMode ? 'text-[#241F33]' : 'text-[#F4F3F7]'}`}>
                      {row.id}
                    </span>
                    <h3
                      className={`font-display font-black text-3xl uppercase transition-colors ${
                        isDayMode
                          ? 'text-[#0A0713] group-hover:text-[#7500EB]'
                          : 'text-[#F4F3F7] group-hover:text-[#00F5A0]'
                      }`}
                    >
                      {row.title}
                    </h3>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs font-mono-tech transition-colors ${
                      isDayMode
                        ? 'text-[#625D73] group-hover:text-[#7500EB]'
                        : 'text-[#9F9CAE] group-hover:text-[#00F5A0]'
                    }`}
                  >
                    <span>{row.description}</span>
                    <span className="font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">↗</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

