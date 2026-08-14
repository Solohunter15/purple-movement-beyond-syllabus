import React from 'react';
import { motion } from 'framer-motion';

export const EventActionLayer: React.FC = () => {
  const topics = [
    'Curriculum', 'Assessment', 'Employability', 'AI & Education', 'Teacher Development', 'Student Agency', 'Future of Work', 'Policy'
  ];

  const actionRows = [
    {
      id: '01',
      title: 'IDEAS',
      description: 'Actionable interventions',
      href: '#about'
    },
    {
      id: '02',
      title: 'PROTOTYPE LAB',
      description: 'Alternatives under construction',
      href: '#outcomes'
    },
    {
      id: '03',
      title: 'OUTCOMES',
      description: 'Evidence to recommendations',
      href: '#outcomes'
    }
  ];

  return (
    <section id="action-layer" className="py-24 relative overflow-hidden bg-[#FAF9FA] text-[#0A0A0C] border-t border-black/10">
      
      {/* Top Full-Width Marquee Ticker (Screenshot 2) */}
      <div className="w-full bg-[#FAF9FA] border-b border-black/10 py-3 overflow-hidden mb-16">
        <div className="flex whitespace-nowrap animate-marquee-slow text-xs font-mono-tech uppercase font-bold text-[#0A0A0C]/80 tracking-wider">
          {[...topics, ...topics, ...topics].map((topic, i) => (
            <span key={i} className="mx-4 inline-flex items-center gap-4">
              <span>{topic}</span>
              <span className="text-[#8000FF] font-black">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tag Header (Screenshot 2) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-[#0A0A0C]/70 mb-8"
        >
          ACTION LAYER / 04
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline (Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight text-[#0A0A0C]">
              <div>FROM PROTEST</div>
              <div className="text-[#8000FF]">TO PROTOTYPE.</div>
            </h2>

            <p className="text-base sm:text-lg text-[#0A0A0C] font-bold font-sans pt-2">
              Talking about broken systems is easy. Building alternatives is harder.
            </p>
          </motion.div>

          {/* Right Column: Action Table List (Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 border-t-2 border-b-2 border-black divide-y divide-black"
          >
            {actionRows.map((row) => (
              <a
                key={row.id}
                href={row.href}
                className="py-6 px-2 flex items-center justify-between group hover:bg-[#8000FF]/5 transition-colors cursor-pointer block"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono-tech text-xs font-bold text-[#0A0A0C]">
                    {row.id}
                  </span>
                  <h3 className="font-display font-black text-3xl uppercase text-[#0A0A0C] group-hover:text-[#8000FF] transition-colors">
                    {row.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#666666] group-hover:text-[#8000FF] transition-colors">
                  <span>{row.description}</span>
                  <span className="font-bold text-sm">↗</span>
                </div>
              </a>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
