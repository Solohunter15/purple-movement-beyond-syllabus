import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventFooter: React.FC = () => {
  return (
    <footer className="bg-[#040306] text-white border-t-8 border-[#8000FF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (Screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Stacked Display Title */}
          <div className="md:col-span-4">
            <h3 className="font-display font-black text-5xl sm:text-6xl uppercase tracking-tighter text-white leading-[0.88] select-none">
              <div>BEYOND</div>
              <div>SYLLABUS</div>
            </h3>
          </div>

          {/* Center Column: Tagline Quotes */}
          <div className="md:col-span-4 space-y-1 text-sm font-medium text-[#9F9CAE] font-sans pt-2">
            <p>From protest to prototype.</p>
            <p>From problems to possibilities.</p>
          </div>

          {/* Right Column: 2-Column Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs font-mono-tech text-[#9F9CAE] pt-2">
            
            {/* Col 1 */}
            <ul className="space-y-3">
              <li><a href="#journey" className="hover:text-[#00F5A0] transition-colors">Journey</a></li>
              <li><a href="#about" className="hover:text-[#00F5A0] transition-colors">Conversations</a></li>
              <li><a href="#action-layer" className="hover:text-[#00F5A0] transition-colors">Prototypes</a></li>
              <li>
                <a
                  href={EVENT_CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 font-bold hover:text-[#00F5A0] transition-colors text-white"
                >
                  Participate
                </a>
              </li>
            </ul>

            {/* Col 2 */}
            <ul className="space-y-3">
              <li>
                <a
                  href={EVENT_CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00F5A0] transition-colors"
                >
                  Live
                </a>
              </li>
              <li><a href="#commons" className="hover:text-[#00F5A0] transition-colors">Knowledge Commons</a></li>
              <li><a href="#outcomes" className="hover:text-[#00F5A0] transition-colors">Outcomes</a></li>
            </ul>

          </div>

        </div>

        {/* Bottom Line & Copyright (Screenshot 1) */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/50 uppercase font-bold tracking-widest">
          <span>THE PURPLE MOVEMENT · 2026</span>
        </div>

      </div>
    </footer>
  );
};
