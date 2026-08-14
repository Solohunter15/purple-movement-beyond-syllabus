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

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="action-layer" className="py-24 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10">
      
      {/* Top Full-Width Marquee Ticker (Screenshot 2) */}
      <div className="w-full bg-[#07060A] border-b border-white/10 py-3 overflow-hidden mb-16">
        <div className="flex whitespace-nowrap animate-marquee-slow text-xs font-mono-tech uppercase font-bold text-[#F4F3F7]/80 tracking-wider">
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
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-[#F4F3F7]/60 mb-8"
        >
          ACTION LAYER / 04
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline (Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight text-[#F4F3F7]">
              <div>FROM PROTEST</div>
              <div className="text-[#8000FF]">TO PROTOTYPE.</div>
            </h2>

            <p className="text-base sm:text-lg text-[#F4F3F7] font-bold font-sans pt-2">
              Talking about broken systems is easy. Building alternatives is harder.
            </p>
          </motion.div>

          {/* Right Column: Action Table List (Screenshot 2) */}
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-6 border-t-2 border-b-2 border-white/20 divide-y divide-white/20"
          >
            {actionRows.map((row) => (
              <motion.div key={row.id} variants={rowVariants}>
                <a
                  href={row.href}
                  className="py-6 px-2 flex items-center justify-between group hover:bg-[#8000FF]/15 transition-colors cursor-pointer block"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono-tech text-xs font-bold text-[#F4F3F7]">
                      {row.id}
                    </span>
                    <h3 className="font-display font-black text-3xl uppercase text-[#F4F3F7] group-hover:text-[#00F5A0] transition-colors">
                      {row.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9F9CAE] group-hover:text-[#00F5A0] transition-colors">
                    <span>{row.description}</span>
                    <span className="font-bold text-sm">↗</span>
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
