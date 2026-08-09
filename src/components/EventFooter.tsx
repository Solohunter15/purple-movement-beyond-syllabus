import React from 'react';
import { PurpleMovementLogo } from './PurpleMovementLogo';
import { ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';

export const EventFooter: React.FC = () => {
  return (
    <footer className="py-16 border-t border-black/5 bg-[#FAFAF8] text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-black/5">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-5 space-y-4">
            <PurpleMovementLogo iconSize={48} textColor="dark" textSize="large" />
            <p className="text-xs text-[#737373] max-w-sm leading-relaxed font-normal">
              Beyond Syllabus is a grassroots movement building an open, collaborative framework for education in the AI era.
            </p>
            <span className="text-[10px] font-mono-tech uppercase text-[#6F3FF5] tracking-widest block font-semibold">
              BEYOND PROTEST BEYOND SYLLABUS
            </span>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-[#1E1E1E] tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#737373]">
              <li><a href="#about" className="hover:text-[#6F3FF5] transition-colors">About</a></li>
              <li><a href="#journey" className="hover:text-[#6F3FF5] transition-colors">Our Journey</a></li>
              <li><a href="#speakers" className="hover:text-[#6F3FF5] transition-colors">Speakers</a></li>
              <li><a href="#partners" className="hover:text-[#6F3FF5] transition-colors">Community Partners</a></li>
              <li><a href="#outcomes" className="hover:text-[#6F3FF5] transition-colors">Expected Outcomes</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-[#1E1E1E] tracking-wider">
              Connect & Join
            </h4>
            <div className="space-y-2 text-xs text-[#737373]">
              <p>Built with μLearn Foundation & Community Partners</p>
              <a
                href={EVENT_CONFIG.REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#6F3FF5] font-semibold hover:underline"
              >
                <span>Join the Movement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#737373] gap-4">
          <p>© {new Date().getFullYear()} The Purple Movement. Open Collaborative Initiative.</p>
          <div className="flex items-center gap-6">
            <span>Aug 15 & Sept 5, 2026</span>
            <span>•</span>
            <span>Education Transformation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
