import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { EventNavbar } from './components/EventNavbar';
import { EventHero } from './components/EventHero';
import { EventAbout } from './components/EventAbout';
import { EventJourneyTimeline } from './components/EventJourneyTimeline';
import { EventKnowledgeCommons } from './components/EventKnowledgeCommons';
import { EventActionLayer } from './components/EventActionLayer';
import { EventThemeDark } from './components/EventThemeDark';
import { EventOverviewCards } from './components/EventOverviewCards';
import { EventStudentStakeholders } from './components/EventStudentStakeholders';
import { EventPartners } from './components/EventPartners';
import { EventOutcomes } from './components/EventOutcomes';
import { EventCTA } from './components/EventCTA';
import { EventFooter } from './components/EventFooter';
import { CustomCursor } from './components/CustomCursor';
import { EventLoadingScreen } from './components/EventLoadingScreen';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top instantly on initial page load / refresh
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Lock scrolling initially
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // Initialize Lenis smooth scroll once loading is complete
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.style.overflow = 'unset';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#07060A] text-[#F4F3F7] selection:bg-[#8000FF] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 0. Cinematic Loading Experience */}
      <EventLoadingScreen onComplete={handleLoadingComplete} />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Content Stream */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <EventNavbar />

        <main>
          {/* 1. Hero Section (Screenshot 1: Beyond Syllabus Display Title + Widget) */}
          <EventHero />

          {/* 2. Proposition 01 (Screenshot 5: Not Another Discussion About What Is Broken) */}
          <EventAbout />

          {/* 3. Journey 02 (Screenshot 2: Conversation Accumulates - Black Section 01-05 Steps) */}
          <EventJourneyTimeline />

          {/* 4. Open Archive 03 (Screenshot 4: Knowledge Commons - Full Electric Purple Section) */}
          <EventKnowledgeCommons />

          {/* 5. Action Layer 04 (Screenshot 2 New: From Protest To Prototype + Table List) */}
          <EventActionLayer />

          {/* 6. Central Movement Call (Screenshot 3: What If We Build It? - Black Section + Mint Green CTA) */}
          <EventThemeDark />

          {/* 7. Pillars & Overview */}
          <EventOverviewCards />

          {/* 8. Students & Student Communities */}
          <EventStudentStakeholders />

          {/* 9. Community Partners (Now with HR Evolve & FOSS United logos) */}
          <EventPartners />

          {/* 11. Deliverables & Outcomes */}
          <EventOutcomes />

          {/* 12. Call To Action */}
          <EventCTA />
        </main>

        {/* 13. Full Purple Footer (Screenshot 1 New) */}
        <EventFooter />
      </div>
    </div>
  );
}

export default App;
