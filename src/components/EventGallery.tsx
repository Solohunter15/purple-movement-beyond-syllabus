import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface VideoSession {
  id: string;
  sessionNumber: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  tag: string;
}

const GALLERY_VIDEOS: VideoSession[] = [
  {
    id: 'session-1',
    sessionNumber: 'SESSION 01',
    title: 'Session 1: Students & Student Communities Shaping the Future of Education',
    description: 'A national student dialogue exploring structural educational reforms, AI integration, and student-led learning pathways in higher education.',
    youtubeId: 'qXdBTk5XFsE',
    youtubeUrl: 'https://www.youtube.com/live/qXdBTk5XFsE?si=8E9BkPq-ioBXhxl4',
    tag: 'STUDENT COMMUNITIES'
  }
];

export const EventGallery: React.FC = () => {
  const { isDayMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const activeVideo = GALLERY_VIDEOS[0];

  return (
    <section
      id="gallery"
      className={`py-16 sm:py-20 relative overflow-hidden transition-colors duration-500 ease-out border-t ${
        isDayMode
          ? 'bg-[#F7F6FB] text-[#0A0713] border-[#E4DFF2]'
          : 'bg-[#07060A] text-[#F4F3F7] border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Compact & Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2.5"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: -8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
            }}
            className={`text-xs font-mono-tech uppercase tracking-[0.22em] block font-bold ${
              isDayMode ? 'text-[#7500EB]' : 'text-[#8000FF]'
            }`}
          >
            THE GALLERY
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: {
                  y: 0, opacity: 1,
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
                }
              }}
              className={`font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight ${
                isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
              }`}
            >
              SESSION RECORDINGS & MEDIA
            </motion.h2>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
            }}
            className={`text-xs sm:text-sm font-sans max-w-lg mx-auto ${
              isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
            }`}
          >
            Watch keynotes, public debates, and collective brainstorming sessions driving the Beyond Syllabus movement.
          </motion.p>
        </motion.div>

        {/* Refined Compact Video Showcase Card with Smooth Transitions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl lg:max-w-[740px] mx-auto"
        >
          <div
            className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.008] ${
              isDayMode
                ? 'bg-white border-[#E4DFF2] hover:border-[#7500EB]/40 shadow-lg shadow-purple-500/5'
                : 'bg-[#111019] border-white/10 hover:border-[#8000FF]/50 shadow-xl shadow-black/50'
            }`}
          >
            {/* Top Meta Bar */}
            <div
              className={`px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border-b text-xs font-mono-tech font-bold uppercase tracking-wider transition-colors duration-300 ${
                isDayMode
                  ? 'bg-[#F2EDFB] border-[#E4DFF2] text-[#241F33]'
                  : 'bg-[#181524] border-white/10 text-[#F4F3F7]/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
                <span className={`text-[11px] sm:text-xs ${isDayMode ? 'text-[#7500EB]' : 'text-[#00F5A0]'}`}>
                  {activeVideo.sessionNumber}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-[10px] sm:text-[11px] opacity-75">{activeVideo.tag}</span>
              </div>

              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold transition-colors duration-200 ${
                  isDayMode ? 'text-[#7500EB] hover:text-[#5800b0]' : 'text-[#8000FF] hover:text-[#00F5A0]'
                }`}
              >
                <span>OPEN ON YOUTUBE</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Video / Thumbnail Container */}
            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                >
                  {/* YouTube's existing thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`;
                    }}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 group-hover:via-black/15 transition-all duration-500" />

                  {/* Centered Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ duration: 0.2 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Pulse ring */}
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#8000FF]/40 animate-ping" />
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#8000FF]/50 blur-sm" />

                      {/* Main Play Circle */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8000FF] hover:bg-[#9933FF] text-white flex items-center justify-center shadow-2xl transition-colors duration-300 border-2 border-white/40">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Badge on Thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-mono-tech uppercase font-bold tracking-wider border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>CLICK TO PLAY</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Bar - Centered Title & Refined Spacing */}
            <div className="p-5 sm:p-6 text-center space-y-2.5">
              <h3
                className={`font-display font-black text-lg sm:text-xl md:text-2xl uppercase leading-snug tracking-tight max-w-xl mx-auto ${
                  isDayMode ? 'text-[#0A0713]' : 'text-[#F4F3F7]'
                }`}
              >
                {activeVideo.title}
              </h3>

              <p
                className={`text-xs sm:text-[13px] font-sans max-w-lg mx-auto leading-relaxed ${
                  isDayMode ? 'text-[#625D73]' : 'text-[#9F9CAE]'
                }`}
              >
                {activeVideo.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="px-5 py-2 bg-[#8000FF] hover:bg-[#6c00db] text-white text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] rounded-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isPlaying ? 'PLAYING NOW' : 'WATCH SESSION'}</span>
                </button>

                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] rounded-xs ${
                    isDayMode
                      ? 'bg-white hover:bg-[#EDE8F7] text-[#0A0713] border-2 border-[#D8D1EC] hover:border-[#7500EB] shadow-xs'
                      : 'bg-transparent hover:bg-white/5 text-[#F4F3F7] border-2 border-white/20 hover:border-white/50'
                  }`}
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                  <span>WATCH ON YOUTUBE</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
