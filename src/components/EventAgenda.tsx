import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, User, BookmarkCheck, Calendar } from 'lucide-react';
import { AGENDA_SESSIONS_CONFIG } from '../config/agendaConfig';

export const EventAgenda: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const trackFilters = [
    { label: 'All Sessions', value: 'all' },
    { label: 'Keynotes', value: 'keynote' },
    { label: 'Panels', value: 'panel' },
    { label: 'Workshops', value: 'workshop' },
    { label: 'Networking', value: 'networking' },
  ];

  const filteredSessions = selectedTrack === 'all'
    ? AGENDA_SESSIONS_CONFIG
    : AGENDA_SESSIONS_CONFIG.filter(s => s.track === selectedTrack);

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="agenda" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full skeuo-inset-container text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200/80 bg-indigo-50/80 shadow-xs"
          >
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Event Schedule & Agenda</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Interactive Event <span className="gradient-text-purple">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal"
          >
            Explore keynote talks, expert panels, hands-on workshops, and consultation roundtables.
          </motion.p>
        </div>

        {/* Track Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {trackFilters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setSelectedTrack(filter.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedTrack === filter.value
                  ? 'skeuo-button-primary text-white shadow-sm'
                  : 'spatial-glass-pill text-slate-600 hover:text-slate-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Vertical Agenda Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="wait">
            {filteredSessions.map((session, idx) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="spatial-glass-panel rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-mono text-xs font-bold border border-indigo-200/70">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      {session.time}
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {session.track}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                      {session.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {session.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {session.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-indigo-700 font-medium flex-wrap pt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-indigo-600" />
                      {session.speakers.join(', ')}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600">
                      <strong>Takeaway:</strong> {session.takeaway}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => toggleBookmark(session.id)}
                  className={`p-3 rounded-xl transition-all self-start md:self-center shrink-0 border ${
                    bookmarked[session.id]
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-600'
                      : 'skeuo-button-secondary text-slate-400 hover:text-indigo-600'
                  }`}
                  title={bookmarked[session.id] ? 'Bookmarked' : 'Add to My Schedule'}
                >
                  <BookmarkCheck className={`w-5 h-5 ${bookmarked[session.id] ? 'fill-indigo-600' : ''}`} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
