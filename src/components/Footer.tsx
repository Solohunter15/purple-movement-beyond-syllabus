import React, { useState } from 'react';
import { Sparkles, Send, Heart, ArrowUpRight, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#07050e] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <div className="w-full h-full bg-[#07050e] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Beyond Syllabus
              </span>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Beyond Syllabus is a flagship initiative of <strong>The Purple Movement</strong>. A community-powered ecosystem helping students learn beyond academics, build real projects, and access career opportunities.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-2">
                Subscribe to Movement Updates
              </span>
              <form onSubmit={handleNewsletter} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 rounded-xl glass-panel bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  ✓ Subscribed! Welcome to the movement updates.
                </span>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#why-beyond" className="hover:text-purple-400 transition-colors">Why Beyond Syllabus</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Platform Pillars</a></li>
              <li><a href="#journey" className="hover:text-purple-400 transition-colors">Learning Journey</a></li>
              <li><a href="#speakers" className="hover:text-purple-400 transition-colors">Featured Speakers</a></li>
              <li><a href="#partners" className="hover:text-purple-400 transition-colors">Community Partners</a></li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Tracks & Guilds</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#learning-paths" className="hover:text-purple-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#learning-paths" className="hover:text-purple-400 transition-colors">Full-Stack Web Dev</a></li>
              <li><a href="#learning-paths" className="hover:text-purple-400 transition-colors">Cybersecurity & Defense</a></li>
              <li><a href="#learning-paths" className="hover:text-purple-400 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#learning-paths" className="hover:text-purple-400 transition-colors">UI/UX Product Design</a></li>
            </ul>
          </div>

          {/* Community & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Connect</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://discord.gg" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> <span>Discord Community</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> <span>GitHub Guild</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> <span>LinkedIn Network</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> <span>X / Twitter</span> <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Beyond Syllabus. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span>by <strong>The Purple Movement</strong>.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
