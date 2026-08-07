import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const CommunityPromiseSection: React.FC = () => {
  const promisePillars = [
    { title: 'Think', desc: 'First-principles engineering & critical problem solving.' },
    { title: 'Build', desc: 'Production-grade software & tangible proof-of-work.' },
    { title: 'Collaborate', desc: 'Cross-functional teams, open source, and peer code reviews.' },
    { title: 'Lead', desc: 'Campus workshops, community guilds, and public speaking.' },
    { title: 'Create Impact', desc: 'Real solutions for real users, startups, and career growth.' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#090710] light:bg-slate-100 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>09 • The Community Promise</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight max-w-3xl mx-auto mb-4"
        >
          We won't teach you what to <span className="line-through decoration-purple-500 decoration-4 text-slate-500">memorize</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl sm:text-2xl font-light text-purple-300 mb-12"
        >
          We replace passive lectures with actionable execution. We will help you:
        </motion.p>

        {/* Pillars Check Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          {promisePillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glow-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
