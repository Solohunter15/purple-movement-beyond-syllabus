import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onJoin: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onJoin }) => {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-24 bg-mesh-dark border-t border-white/10 starfield">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-purple-600/20 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-xl shadow-purple-500/20"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Stepping into a Movement</span>
        </motion.div>

        {/* Large Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Your degree tells people what you studied.
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight gradient-text-purple leading-tight">
            Your work tells people who you are.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-xl text-slate-300 font-light max-w-2xl"
        >
          Stop waiting for exams to finish. Start building software, learning from industry leads, and creating real impact today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
        >
          <button
            onClick={onJoin}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-extrabold text-base shadow-2xl shadow-purple-600/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Join Beyond Syllabus</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#why-beyond"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 border border-white/15"
          >
            <Compass className="w-5 h-5 text-purple-400" />
            <span>Explore Community</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
