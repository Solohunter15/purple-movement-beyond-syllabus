import React from 'react';
import { motion } from 'framer-motion';

export const EventAbout: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Serif Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#6F3FF5] block mb-3 font-semibold">
              ABOUT BEYOND SYLLABUS
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1E1E1E] leading-[1.1] italic">
              "Education should be a beginning, not a boundary."
            </h2>
          </motion.div>

          {/* Right Column: Narrative Content & Connected Node Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-[#737373] text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              <strong className="text-[#1E1E1E] font-medium">The Purple Movement</strong> began with a simple realization: student voices across India were demanding more than administrative updates or exam question fixes. They were demanding an education system that values capability over compliance.
            </p>

            <p>
              <strong className="text-[#1E1E1E] font-medium">Beyond Syllabus</strong> is an open collaborative framework designed to unite students, teachers, academic leaders, industry mentors, researchers, and policymakers. Together, we are building an ecosystem where learning is continuous, capability is verified by proof-of-work, and education prepares learners for life.
            </p>

            {/* Simple Spatial Connected Nodes Graphic */}
            <div className="mt-8 p-6 rounded-2xl spatial-glass-card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#6F3FF5]/40 animate-ping" />
                  <div className="w-4 h-4 rounded-full bg-[#6F3FF5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1E1E]">Collaborative Ecosystem</h4>
                  <p className="text-xs text-[#737373]">6 Stakeholders • 1 Shared Mission</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
