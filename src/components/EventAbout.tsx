import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Lightbulb, GraduationCap } from 'lucide-react';

export const EventAbout: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Curiosity',
      description: 'Igniting self-directed inquiry and problem-solving beyond standard curriculum boundaries.',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'Capability',
      description: 'Fostering practical proof of work, real-world skills, and tangible project execution.',
      color: 'text-indigo-400'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Connecting students, educators, industry leaders, policymakers, and parents.',
      color: 'text-pink-400'
    },
    {
      icon: GraduationCap,
      title: 'Lifelong Learning',
      description: 'Cultivating continuous adaptability and growth for the evolving AI landscape.',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#05050a] border-y border-purple-500/20">
      {/* Ambient background glow & orbital beams */}
      <div className="absolute top-1/2 left-0 w-[36rem] h-[36rem] bg-purple-900/15 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full skeuo-inset-container text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>About The Event</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Beyond Syllabus: <span className="gradient-text-purple block sm:inline mt-1 sm:mt-0">Building the Future of Education Together</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-purple-300 font-medium"
          >
            India stands at a defining moment in the future of education.
          </motion.p>
        </div>

        {/* Narrative & Central Question Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Detailed Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed"
          >
            <p>
              Recent events have shown that students, educators, institutions, industry, and society all recognize that meaningful change is needed. While these conversations have brought important issues into the spotlight, lasting transformation requires more than awareness—it requires collaboration.
            </p>

            <p>
              <strong className="text-white font-semibold">Beyond Syllabus</strong> is a collaborative initiative by <span className="text-purple-400 font-semibold">The Purple Movement</span> that brings together students, teachers, academic leaders, industry professionals, researchers, policymakers, parents, and communities to reimagine education for the AI era.
            </p>

            {/* Skeuo-Glass Callout Box for the Pivotal Question */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="skeuo-glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/30 my-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-2">
                // THE CORE QUESTION
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-3">
                This event is not about revisiting what is broken. It is about asking a more important question:
              </p>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-snug tracking-tight">
                "If we had the opportunity to redesign education for the next generation, <span className="gradient-text-purple">what should we build together?</span>"
              </blockquote>
            </motion.div>

            <p className="text-sm sm:text-base text-slate-300">
              Building on years of discussions, experiments, and stakeholder collaborations—including the <em className="text-purple-300 font-normal">Bridge the Gap</em> symposium series—this consultation continues a journey toward practical, future-ready education that values curiosity, capability, collaboration, and lifelong learning.
            </p>
          </motion.div>

          {/* Right Column: Abstract Tactile 3D Skeuo-Glass Gyro Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md h-[26rem] rounded-3xl skeuo-glass-card p-8 border border-purple-500/30 glow-box-purple flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              {/* Central Glowing 3D Glass Gyro Geometry */}
              <div className="w-60 h-60 rounded-full border-2 border-dashed border-purple-500/30 animate-orbit flex items-center justify-center p-4">
                <div className="w-48 h-48 rounded-full skeuo-glass-card border-2 border-purple-400/40 animate-float-slow flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl skeuo-inset-container border border-purple-400/50 rotate-45 flex items-center justify-center shadow-inner">
                    <Sparkles className="w-12 h-12 text-purple-300 -rotate-45 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                // BEYOND_SYLLABUS_VISION
              </div>
              <div className="absolute bottom-6 right-6 text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                THE PURPLE MOVEMENT
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-400 mb-2">
              // FOUNDATIONAL VALUES
            </h3>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Four Pillars of Reimagined Learning
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="skeuo-glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl skeuo-inset-container flex items-center justify-center mb-4 shadow-inner">
                      <IconComp className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <h5 className="text-lg font-extrabold text-white mb-2">
                      {pillar.title}
                    </h5>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-slate-500 font-semibold">
                    0{idx + 1} // PILLAR
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
