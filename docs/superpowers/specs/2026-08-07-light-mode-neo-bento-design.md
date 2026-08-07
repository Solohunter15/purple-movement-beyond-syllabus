# Design Specification: Sleek Neo-Bento & Interactive Glass Studio

## Overview
This specification details the comprehensive design and architecture for the **Beyond Syllabus** event landing page, reimagining it with a state-of-the-art **Light-Mode Neo-Bento & Interactive Glass Studio** aesthetic. The goal is to provide an undeniable "WOW factor" on every section of the page through interactive elements, motion graphics, rich layout structures, live stats, speaker modals, and an interactive event agenda timeline.

---

## Key Features & Visual System

### 1. Light-Mode Color Token & Aesthetic System
- **Background**: Soft off-white canvas (`#fafafa`) with dynamic subtle grid lines (`#00000008`) and ambient light radial gradients (`#4f46e5` indigo, `#7c3aed` purple, `#2563eb` blue at 4-7% opacity).
- **Typography**: Crisp charcoal slate (`#0f172a` primary, `#475569` secondary, `#64748b` muted) with indigo gradient text highlights (`#312e81` -> `#4f46e5` -> `#7c3aed`).
- **Glassmorphism**: Translucent white panels (`rgba(255, 255, 255, 0.88)`), subtle slate borders (`border-slate-200/80`), recessed light wells (`bg-slate-50 border-slate-200/80`), and smooth drop shadows.

---

## Detailed Component Specifications

### 1. `EventNavbar.tsx` (Floating Glass Header)
- **Features**:
  - Sticky glass header with `backdrop-blur-2xl bg-white/85` when scrolled.
  - Interactive navigation links with active state indicator and smooth scroll target scrolling (`#hero`, `#about`, `#agenda`, `#speakers`, `#partners`).
  - Primary CTA button with integrated `canvas-confetti` explosion trigger when clicked.
  - Mobile menu drawer with smooth Framer Motion slide and fade animations.

### 2. `EventHero.tsx` & `EventCountdown.tsx` (Hero & Live Stats)
- **Features**:
  - **Interactive 3D Card Parallax**: Smooth mouse movement tilt effect.
  - **Date & Venue Pill**: Styled in soft indigo light badge (`bg-indigo-50 text-indigo-700 border-indigo-200`).
  - **Live Countdown Timer**: Styled with crisp white inset cards, monospace gradient numbers, and pulsing clock indicator.
  - **NEW Impact Counter Grid**:
    - `500+` Expected Delegates
    - `20+` Keynote & Industry Leaders
    - `4` Core Educational Pillars
    - `1` Unified Vision
  - **Primary & Secondary Buttons**: Primary high-contrast indigo button with shimmer sweep, secondary crisp white button. Confetti burst on registration click.

### 3. `EventAbout.tsx` (Neo-Bento Pillars & Interactive Gyro)
- **Features**:
  - **Narrative Section**: High-contrast typography and callout box for the pivotal question.
  - **3D Glass Gyro Visual**: Multi-layered spinning glass rings with interactive hover physics, particle node connections, and live vision tags.
  - **Neo-Bento Pillar Grid**:
    - 4 Pillar Cards (*Curiosity*, *Capability*, *Collaboration*, *Lifelong Learning*).
    - Interactive hover cards with micro-glow spotlight, icon wells with color accent highlights, and modal expansion for deep-dive reading.

### 4. `EventAgenda.tsx` (NEW Interactive Event Schedule Timeline)
- **Features**:
  - Track filter tabs (*All Sessions*, *Keynotes & Panels*, *Interactive Workshops*, *Networking*).
  - Vertical timeline layout with animated session nodes, time badges, session titles, speaker tags, room location badges, and session takeaways.
  - "Add to Calendar" / Bookmark action trigger for attendees.

### 5. `EventSpeakers.tsx` (Featured Speakers & Interactive Modals)
- **Features**:
  - Category filter pills (*All Speakers*, *Ecosystem Leaders*, *Academic Visionaries*).
  - Speaker cards with crisp photo avatar frames, designation, organization, session highlight quote box, and "View Full Bio" trigger.
  - **Interactive Speaker Modal Dialog**:
    - Framer Motion overlay modal displaying full speaker biography, key achievements, keynote abstract, and social links (LinkedIn, Twitter, Website).

### 6. `EventPartners.tsx` (Ecosystem Partners & Infinite Marquee)
- **Features**:
  - **Animated Infinite Marquee Ticker**: Continuous smooth scrolling marquee displaying partner brand logos.
  - **Neo-Bento Partner Grid**: Interactive cards with category badges, description, logo wells, and hover spotlight effects.

### 7. `EventFooter.tsx` & `CustomCursor.tsx` (Footer & Interactive Cursor)
- **Features**:
  - **Footer**: Newsletter/Event Updates input bar, quick nav, platform links, social links, and copyright metadata.
  - **Custom Cursor**: Dual-ring indigo spring cursor (`border-indigo-500/40` outer ring, `bg-indigo-600` inner dot) with magnetic hover snap over interactive elements.

---

## Verification & Testing Plan

### Automated Build Verification
- Execute `npm run build` (`tsc -b && vite build`) to confirm zero TypeScript compile errors or bundling issues.

### Interactive Functional Verification
- Verify smooth scrolling across all anchor links (`#hero`, `#about`, `#agenda`, `#speakers`, `#partners`).
- Verify tab filtering on Speaker and Agenda sections.
- Verify Speaker Modal popup opening, backdrop click, and close button actions.
- Verify `canvas-confetti` explosion when clicking "Register Now".
