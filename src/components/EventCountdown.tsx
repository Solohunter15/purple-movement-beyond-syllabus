import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EventCountdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target event date: Aug 15, 2026
    const targetDate = new Date('2026-08-15T09:00:00');
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="inline-flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-2xl sm:rounded-full spatial-glass-pill bg-white/80 border border-indigo-200/60 shadow-md my-6 max-w-full overflow-x-auto"
    >
      <div className="flex items-center gap-2 pl-3 pr-2 border-r border-slate-200 hidden sm:flex">
        <Clock className="w-4 h-4 text-indigo-600 animate-pulse" />
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700">
          Starts In
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {timeUnits.map((unit, idx) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center px-3 py-1.5 rounded-xl skeuo-inset-container bg-slate-50/80 border border-slate-200/70 min-w-[56px] sm:min-w-[64px]">
              <span className="text-lg sm:text-xl font-extrabold font-mono text-slate-900 tracking-tight gradient-text-purple">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
                {unit.label}
              </span>
            </div>
            {idx < timeUnits.length - 1 && (
              <span className="text-indigo-500 font-bold text-xs font-mono">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};
