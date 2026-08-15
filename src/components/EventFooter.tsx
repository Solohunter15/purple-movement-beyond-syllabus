import React from 'react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { useTheme } from '../context/ThemeContext';

export const EventFooter: React.FC = () => {
  const { isDayMode } = useTheme();

  return (
    <footer
      className={`border-t-8 border-[#8000FF] pt-16 pb-12 transition-colors duration-300 ${
        isDayMode ? 'bg-[#EDE8F7] text-[#0A0713]' : 'bg-[#040306] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Stacked Display Title */}
          <div className="md:col-span-4">
            <h3
              className={`font-display font-black text-5xl sm:text-6xl uppercase tracking-tighter leading-[0.88] select-none ${
                isDayMode ? 'text-[#0A0713]' : 'text-white'
              }`}
            >
              <div>BEYOND</div>
              <div>SYLLABUS</div>
            </h3>
          </div>

          {/* Center Column: Tagline Quotes */}
          <div
            className={`md:col-span-4 space-y-1 text-sm font-medium font-sans pt-2 ${
              isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
            }`}
          >
            <p>From protest to prototype.</p>
            <p>From problems to possibilities.</p>
          </div>

          {/* Right Column: 2-Column Links */}
          <div
            className={`md:col-span-4 grid grid-cols-2 gap-8 text-xs font-mono-tech pt-2 ${
              isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
            }`}
          >
            
            {/* Col 1 */}
            <ul className="space-y-3">
              <li>
                <a
                  href="#journey"
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Conversations
                </a>
              </li>
              <li>
                <a
                  href="#action-layer"
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Prototypes
                </a>
              </li>
              <li>
                <a
                  href={EVENT_CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline underline-offset-4 font-bold transition-colors ${
                    isDayMode
                      ? 'text-[#0A0713] hover:text-[#7500EB]'
                      : 'text-white hover:text-[#00F5A0]'
                  }`}
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
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  href="#commons"
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Knowledge Commons
                </a>
              </li>
              <li>
                <a
                  href="#outcomes"
                  className={isDayMode ? 'hover:text-[#7500EB] transition-colors' : 'hover:text-[#00F5A0] transition-colors'}
                >
                  Outcomes
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div
          className={`pt-6 border-t flex items-center justify-between text-[11px] font-mono-tech uppercase font-bold tracking-widest ${
            isDayMode ? 'border-[#D8D1EC] text-[#625D73]' : 'border-white/10 text-white/50'
          }`}
        >
          <span>THE PURPLE MOVEMENT · 2026</span>
        </div>

      </div>
    </footer>
  );
};

