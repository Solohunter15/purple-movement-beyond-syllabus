import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PurpleMovementLogo } from './PurpleMovementLogo';
import { Sparkles } from 'lucide-react';

interface EventLoadingScreenProps {
  onComplete?: () => void;
}

export const EventLoadingScreen: React.FC<EventLoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Extended Cinematic Loading Sequence (+5s longer, total ~8.8 seconds)
    // Phase 0 (0.0s - 1.8s): Learning...
    // Phase 1 (1.8s - 3.6s): Listening...
    // Phase 2 (3.6s - 5.4s): Building...
    // Phase 3 (5.4s - 7.4s): Quote ("Education should be a beginning, not a boundary.")
    // Phase 4 (7.4s - 8.8s): Grand Authentic Purple Movement Logo & "BEYOND SYLLABUS" reveal
    const timer1 = setTimeout(() => setPhase(1), 1800);
    const timer2 = setTimeout(() => setPhase(2), 3600);
    const timer3 = setTimeout(() => setPhase(3), 5400);
    const timer4 = setTimeout(() => setPhase(4), 7400);
    const timer5 = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 8800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF8] text-[#1E1E1E] select-none"
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute w-[50rem] h-[50rem] rounded-full bg-[#6F3FF5]/10 blur-[180px] pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[22rem]">
            {/* Phase 0 - 2: Text Sequence */}
            {phase < 3 && (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg font-mono-tech uppercase tracking-[0.4em] text-[#6F3FF5] font-bold"
              >
                {phase === 0 && 'Learning...'}
                {phase === 1 && 'Listening...'}
                {phase === 2 && 'Building...'}
              </motion.div>
            )}

            {/* Phase 3: Quote Reveal */}
            {phase === 3 && (
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8 }}
                className="font-serif-editorial text-3xl sm:text-5xl text-[#1E1E1E] italic leading-snug tracking-tight max-w-xl"
              >
                "Education should be a beginning, not a boundary."
              </motion.blockquote>
            )}

            {/* Phase 4: Grand Logo & Title Reveal (MUCH BIGGER) */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-6"
              >
                {/* Brand Tag Kicker */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full spatial-glass-pill text-[#6F3FF5] text-xs font-mono-tech uppercase tracking-[0.25em] shadow-sm bg-white/80">
                  <Sparkles className="w-4 h-4 text-[#6F3FF5]" />
                  <span>The Purple Movement Initiative</span>
                </div>

                {/* Grand Vector Logo (XLARGE SIZE) */}
                <PurpleMovementLogo iconSize={88} variant="full" textColor="dark" textSize="xlarge" />

                {/* Big Hero Title */}
                <div className="mt-2 space-y-1">
                  <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#1E1E1E]">
                    BEYOND SYLLABUS
                  </h1>
                  <p className="text-base sm:text-xl font-serif-editorial italic text-[#6F3FF5]">
                    Building the Future of Education Together
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
