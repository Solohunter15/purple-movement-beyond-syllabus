import React from 'react';
import { motion } from 'framer-motion';

export const EventAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10">
      
      {/* Top Right Decorative Purple Accent Arc (Screenshot 5) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8000FF] rounded-bl-full pointer-events-none opacity-40 transform translate-x-12 -translate-y-12" />

      {/* Top Date Stepper Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex items-center gap-4 text-xs font-mono-tech uppercase font-bold text-[#F4F3F7]/50 tracking-wider">
          <span className="text-[#8000FF]">JULY</span>
          <span>→</span>
          <span className="text-[#8000FF]">AUG 15</span>
          <span>→</span>
          <span>SEP 05</span>
          <span>→</span>
          <span>OCT 02</span>
          <span>→</span>
          <span>NOV 14</span>
          <span>→</span>
          <span className="text-[#8000FF]">DEC</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tag Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono-tech uppercase font-bold tracking-[0.25em] text-[#F4F3F7]/60 mb-6"
        >
          THE PROPOSITION / 01
        </motion.div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Headline (Screenshot 5) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[6.5rem] leading-[0.88] uppercase tracking-tight text-[#F4F3F7]">
              <div>NOT ANOTHER</div>
              <div>DISCUSSION ABOUT</div>
              <div className="text-[#8000FF]">WHAT IS BROKEN.</div>
            </h2>
          </motion.div>

          {/* Right Column: Proposition Paragraph (Screenshot 5) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 pt-2"
          >
            <p className="text-base sm:text-xl font-bold text-[#F4F3F7] leading-snug font-sans">
              Beyond Syllabus is a public process for turning collective intelligence into credible alternatives for education.
            </p>

            <p className="text-sm sm:text-base text-[#9F9CAE] leading-relaxed font-normal font-sans">
              Students, educators, researchers, industry, policymakers and community leaders move together—from lived experience to evidence, prototypes and practical recommendations.
            </p>

            {/* Interactive Stakeholder Badge Card */}
            <a
              href="#journey"
              className="mt-8 p-6 rounded-2xl bg-[#111019] border-2 border-white/5 flex items-center justify-between group cursor-pointer hover:border-[#8000FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#8000FF]/5 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8000FF] text-white flex items-center justify-center font-bold font-mono-tech text-xs ring-4 ring-[#8000FF]/15">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F4F3F7] group-hover:text-[#00F5A0] transition-colors uppercase font-mono-tech">
                    Public Collaborative Process
                  </h4>
                  <p className="text-xs text-[#9F9CAE]">6 Key Ecosystem Stakeholders</p>
                </div>
              </div>
              <span className="text-xs font-mono-tech text-[#00F5A0] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Explore Process →
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
