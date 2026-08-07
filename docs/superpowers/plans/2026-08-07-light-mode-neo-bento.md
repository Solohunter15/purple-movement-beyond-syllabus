# Light Mode Neo-Bento Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Beyond Syllabus event landing page into a state-of-the-art Light-Mode Neo-Bento & Glass Studio experience with interactive agenda timeline, speaker modals, countdown timer, live stats grid, marquee partner ticker, and confetti triggers.

**Architecture:** A modern React + Framer Motion + Tailwind CSS application using custom light-mode design tokens, modular component boundaries, interactive modal dialogs, and smooth motion physics.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Canvas Confetti.

---

### Task 1: Create Agenda Schedule Configuration Data Model
**Files:**
- Create: `src/config/agendaConfig.ts`

- [ ] **Step 1: Create `src/config/agendaConfig.ts`**

```typescript
export interface AgendaSession {
  id: string;
  time: string;
  title: string;
  track: 'keynote' | 'panel' | 'workshop' | 'networking';
  description: string;
  speakers: string[];
  location: string;
  takeaway: string;
}

export const AGENDA_SESSIONS_CONFIG: AgendaSession[] = [
  {
    id: 's1',
    time: '09:00 AM - 09:30 AM',
    title: 'Opening Ceremony & Keynote Address',
    track: 'keynote',
    description: 'Welcome address detailing the vision of Beyond Syllabus and setting the stage for reimagining education in India.',
    speakers: ['Deepu S. Nath', 'Claire C. John'],
    location: 'Main Auditorium',
    takeaway: 'Aligning ecosystem vision across academia and industry.'
  },
  {
    id: 's2',
    time: '09:30 AM - 11:00 AM',
    title: 'Panel: Bridging the Gap Between Academia & Industry',
    track: 'panel',
    description: 'Deep dive into practical proof of work, project-based learning, and skill-first hiring for AI-era students.',
    speakers: ['Deepa Nair', 'Dr. Abraham Joseph'],
    location: 'Hall A',
    takeaway: 'Actionable recommendations for curriculum modernization.'
  },
  {
    id: 's3',
    time: '11:15 AM - 01:00 PM',
    title: 'Interactive Workshop: AI-Native Classroom Strategies',
    track: 'workshop',
    description: 'Hands-on session for educators and student mentors to integrate generative AI tools into collaborative problem solving.',
    speakers: ['Claire C. John', 'Technical Mentors'],
    location: 'Workshop Lab 1',
    takeaway: 'Practical frameworks for AI-assisted teaching and assessment.'
  },
  {
    id: 's4',
    time: '02:00 PM - 03:30 PM',
    title: 'Student & Youth Showcase: Proof of Work Exhibition',
    track: 'panel',
    description: 'Highlighting innovative student-led projects, open source initiatives, and real-world problem-solving implementations.',
    speakers: ['Student Innovators', 'Ecosystem Leads'],
    location: 'Exhibition Arena',
    takeaway: 'Direct proof of student capabilities beyond traditional grades.'
  },
  {
    id: 's5',
    time: '03:45 PM - 05:00 PM',
    title: 'Ecosystem Roundtable & Valedictory Session',
    track: 'networking',
    description: 'Collaborative discussion between policymakers, institute leaders, and industry executives to formulate the Beyond Syllabus Roadmap.',
    speakers: ['Deepu S. Nath', 'Ecosystem Partners'],
    location: 'Main Auditorium',
    takeaway: 'Drafting the official consultation whitepaper.'
  }
];
```

- [ ] **Step 2: Commit**

```bash
git add src/config/agendaConfig.ts
git commit -m "feat: add agenda configuration model and session data"
```

---

### Task 2: Build Interactive Event Agenda Timeline Component (`EventAgenda.tsx`)
**Files:**
- Create: `src/components/EventAgenda.tsx`
- Modify: `src/App.tsx:35-50`

- [ ] **Step 1: Create `src/components/EventAgenda.tsx`**

```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Sparkles, User, BookmarkCheck, Calendar, Filter } from 'lucide-react';
import { AGENDA_SESSIONS_CONFIG, type AgendaSession } from '../config/agendaConfig';

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
                  : 'skeuo-glass-card bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200/80'
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
                className="skeuo-glass-card bg-white/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
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
```

- [ ] **Step 2: Add `EventAgenda` to `src/App.tsx`**

```tsx
import { EventAgenda } from './components/EventAgenda';

// Inside <main>:
// <EventAbout />
// <EventAgenda />
// <EventSpeakers />
```

- [ ] **Step 3: Verify build**

Run `npm run build` to confirm zero errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/EventAgenda.tsx src/App.tsx
git commit -m "feat: add interactive event agenda timeline component"
```

---

### Task 3: Enhance `EventSpeakers.tsx` with Interactive Speaker Profile Modals
**Files:**
- Modify: `src/components/EventSpeakers.tsx`

- [ ] **Step 1: Add modal state and backdrop dialog overlay to `EventSpeakers.tsx`**

```tsx
import { X, ExternalLink, Linkedin, Twitter, Sparkles, Building2, Quote, CheckCircle2 } from 'lucide-react';

// Add modal state:
const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

// In renderSpeakerCard: Add button "View Full Bio":
<button
  onClick={() => setActiveSpeaker(speaker)}
  className="w-full mt-4 py-2 rounded-xl skeuo-button-secondary text-slate-800 text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all flex items-center justify-center gap-1.5"
>
  <span>View Profile & Session Details</span>
  <ExternalLink className="w-3.5 h-3.5" />
</button>

// Render Modal at bottom of section:
<AnimatePresence>
  {activeSpeaker && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
      onClick={() => setActiveSpeaker(null)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="skeuo-glass-card bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={() => setActiveSpeaker(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border border-indigo-200 shrink-0 shadow-sm">
            <img src={activeSpeaker.image} alt={activeSpeaker.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 inline-block mb-2">
              {activeSpeaker.category}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">{activeSpeaker.name}</h3>
            <p className="text-xs text-indigo-700 font-semibold mt-1">
              {activeSpeaker.designation} • <strong className="text-slate-900">{activeSpeaker.organization}</strong>
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>{activeSpeaker.bio}</p>
          {activeSpeaker.topic && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-indigo-700 block uppercase text-[10px] tracking-wider mb-1">Keynote Session Topic:</span>
              <p className="italic text-slate-800">"{activeSpeaker.topic}"</p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400 font-bold">BS-2025 KEYNOTE</span>
          <button
            onClick={() => setActiveSpeaker(null)}
            className="px-5 py-2 rounded-full skeuo-button-primary text-white text-xs font-bold"
          >
            Close Profile
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

- [ ] **Step 2: Verify build**

Run `npm run build` to confirm zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/EventSpeakers.tsx
git commit -m "feat: add interactive speaker profile modal overlay"
```

---

### Task 4: Add Live Impact Stats Grid & Confetti Trigger to `EventHero.tsx`
**Files:**
- Modify: `src/components/EventHero.tsx`

- [ ] **Step 1: Install `canvas-confetti` trigger and render Impact Stats Grid**

In `EventHero.tsx`:
Import `confetti` from `canvas-confetti`.

Add `handleRegistrationRedirect` trigger:
```typescript
const handleRegistrationRedirect = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  setTimeout(() => {
    window.open(EVENT_CONFIG.REGISTRATION_URL, '_blank');
  }, 300);
};
```

Add **Live Event Impact Counter Grid** below hero buttons:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
>
  {[
    { value: '500+', label: 'Expected Delegates' },
    { value: '20+', label: 'Keynote Speakers' },
    { value: '4', label: 'Core Pillars' },
    { value: '1', label: 'Shared Vision' },
  ].map(stat => (
    <div key={stat.label} className="skeuo-glass-card bg-white/80 rounded-2xl p-4 border border-slate-200/80 text-center shadow-xs">
      <span className="text-2xl sm:text-3xl font-extrabold font-mono gradient-text-purple block">
        {stat.value}
      </span>
      <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
        {stat.label}
      </span>
    </div>
  ))}
</motion.div>
```

- [ ] **Step 2: Verify build**

Run `npm run build` to confirm zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/EventHero.tsx
git commit -m "feat: add impact stats grid and confetti triggers to hero"
```

---

### Task 5: Add Animated Infinite Logo Marquee to `EventPartners.tsx`
**Files:**
- Modify: `src/components/EventPartners.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Add marquee animation keyframes to `src/index.css`**

```css
@keyframes marqueeScroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marqueeScroll 25s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

- [ ] **Step 2: Add logo marquee bar above partner cards in `EventPartners.tsx`**

```tsx
{/* Animated Infinite Marquee Ticker */}
<div className="w-full overflow-hidden mb-16 py-4 border-y border-slate-200/70 bg-white/50 backdrop-blur-md">
  <div className="animate-marquee flex items-center gap-12">
    {[...COMMUNITY_PARTNERS_CONFIG, ...COMMUNITY_PARTNERS_CONFIG].map((partner, idx) => (
      <div key={`${partner.id}-${idx}`} className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-lg skeuo-inset-container bg-slate-100 p-1 flex items-center justify-center border border-slate-200">
          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
        </div>
        <span className="text-xs font-bold text-slate-700 tracking-tight">{partner.name}</span>
      </div>
    ))}
  </div>
</div>
```

- [ ] **Step 3: Verify build**

Run `npm run build` to confirm zero errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/EventPartners.tsx src/index.css
git commit -m "feat: add animated partner logo marquee ticker"
```

---

### Task 6: Final Verification & Build Check
- [ ] **Step 1: Execute `npm run build`**

Run: `npm run build`
Expected: `✓ built in ~500ms` with 0 errors.

- [ ] **Step 2: Final commit**

```bash
git add .
git commit -m "chore: complete light mode neo-bento landing page enhancement"
```
