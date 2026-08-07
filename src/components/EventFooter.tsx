import React from 'react';
import { Sparkles, Heart, ArrowUpRight, Mail } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventFooter: React.FC = () => {
  return (
    <footer className="bg-[#030307] text-slate-400 border-t border-purple-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="skeuo-glass-card rounded-3xl p-8 sm:p-10 border border-white/10 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-purple-500 to-indigo-600 p-[1.5px] shadow-lg shadow-purple-600/30">
                  <div className="w-full h-full bg-[#070512] rounded-[10px] flex items-center justify-center skeuo-inset-container">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <span className="font-extrabold text-lg tracking-tight text-white">
                  {EVENT_CONFIG.EVENT_NAME}
                </span>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Official Event Landing Page powered by <strong>{EVENT_CONFIG.ORGANIZATION}</strong>. Connecting students, developers, mentors, and ecosystem partners.
              </p>

              <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold pt-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${EVENT_CONFIG.SOCIALS.EMAIL}`} className="hover:underline">
                  {EVENT_CONFIG.SOCIALS.EMAIL}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-400 mb-4">// NAVIGATION</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><a href="#hero" className="hover:text-purple-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-300 transition-colors">About Event</a></li>
                <li><a href="#speakers" className="hover:text-purple-300 transition-colors">Featured Speakers</a></li>
                <li><a href="#partners" className="hover:text-purple-300 transition-colors">Community Partners</a></li>
              </ul>
            </div>

            {/* Core Redirect Actions */}
            <div>
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-400 mb-4">// PLATFORM_ACTIONS</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a 
                    href={EVENT_CONFIG.PLATFORM_URL} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Beyond Syllabus Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a 
                    href={EVENT_CONFIG.REGISTRATION_URL} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Event Registration Form</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect & Social */}
            <div>
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-400 mb-4">// SOCIAL_NETWORK</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a href={EVENT_CONFIG.SOCIALS.DISCORD} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                    <span>Discord Community</span> <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_CONFIG.SOCIALS.GITHUB} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                    <span>GitHub Organization</span> <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_CONFIG.SOCIALS.LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                    <span>LinkedIn Network</span> <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_CONFIG.SOCIALS.TWITTER} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                    <span>X / Twitter</span> <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-medium">
            <div className="flex items-center gap-1.5">
              <span>© {new Date().getFullYear()} {EVENT_CONFIG.EVENT_NAME} Event. Built with</span>
              <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
              <span>by <strong>{EVENT_CONFIG.ORGANIZATION}</strong>.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
;
