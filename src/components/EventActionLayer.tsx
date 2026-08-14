import React from 'react';
import { motion } from 'framer-motion';

export const EventActionLayer: React.FC = () => {
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
    <section id="action-layer" className="py-24 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10">

      {/* Top Full-Width Marquee Ticker — fades in from top */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full bg-[#07060A] border-b border-white/10 py-3 overflow-hidden mb-16"
      >
        <div className="flex whitespace-nowrap animate-marquee-slow text-xs font-mono-tech uppercase font-bold text-[#F4F3F7]/80 tracking-wider">
          {[...topics, ...topics, ...topics].map((topic, i) => (
            <span key={i} className="mx-4 inline-flex items-center gap-4">
              <span>{topic}</span>
              <span className="text-[#8000FF] font-black">•</span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tag Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-[#F4F3F7]/60 mb-8"
        >
          ACTION LAYER / 04
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Headline — lines cascade up with blur+skew */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight text-[#F4F3F7]">
                {[
                  { text: 'FROM PROTEST', accent: false },
                  { text: 'TO PROTOTYPE.', accent: true },
                ].map(({ text, accent }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div
                      variants={{
                        hidden: { y: 80, opacity: 0, skewY: 5, filter: 'blur(8px)' },
                        visible: {
                          y: 0, opacity: 1, skewY: 0, filter: 'blur(0px)',
                          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
                        }
                      }}
                      className={accent ? 'text-[#8000FF]' : ''}
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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-base sm:text-lg text-[#F4F3F7] font-bold font-sans pt-2"
            >
              Talking about broken systems is easy. Building alternatives is harder.
            </motion.p>
          </div>

          {/* Right Column: Action Table — rows slide in from right with blur */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className="lg:col-span-6 border-t-2 border-b-2 border-white/20 divide-y divide-white/20"
          >
            {actionRows.map((row) => (
              <motion.div
                key={row.id}
                variants={{
                  hidden: { opacity: 0, x: 70, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1, x: 0, filter: 'blur(0px)',
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
                  }
                }}
              >
                <a
                  href={row.href}
                  className="py-6 px-2 flex items-center justify-between group hover:bg-[#8000FF]/15 transition-colors cursor-pointer block"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono-tech text-xs font-bold text-[#F4F3F7]">{row.id}</span>
                    <h3 className="font-display font-black text-3xl uppercase text-[#F4F3F7] group-hover:text-[#00F5A0] transition-colors">
                      {row.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9F9CAE] group-hover:text-[#00F5A0] transition-colors">
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
