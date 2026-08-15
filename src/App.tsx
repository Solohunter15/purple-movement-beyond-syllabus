import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider, useTheme } from './context/ThemeContext';
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

function MainLayout() {
  const [loading, setLoading] = useState(true);
  const { isDayMode } = useTheme();

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
    <div
      className={`relative min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300 ${
        isDayMode
          ? 'bg-[#F7F6FB] text-[#0A0713] selection:bg-[#7500EB] selection:text-white'
          : 'bg-[#07060A] text-[#F4F3F7] selection:bg-[#8000FF] selection:text-white'
      }`}
    >
      {/* 0. Cinematic Loading Experience */}
      <EventLoadingScreen onComplete={handleLoadingComplete} />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Content Stream */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <EventNavbar />

        <main>
          {/* 1. Hero Section (Beyond Syllabus Display Title + Widget) */}
          <EventHero />

          {/* 2. Proposition 01 (Not Another Discussion About What Is Broken) */}
          <EventAbout />

          {/* 3. Journey 02 (Conversation Accumulates - 01-06 Steps) */}
          <EventJourneyTimeline />

          {/* 4. Open Archive 03 (Knowledge Commons Section) */}
          <EventKnowledgeCommons />

          {/* 5. Action Layer 04 (From Protest To Prototype + Table List) */}
          <EventActionLayer />

          {/* 6. Central Movement Call (What If We Build It?) */}
          <EventThemeDark />

          {/* 7. Pillars & Overview */}
          <EventOverviewCards />

          {/* 8. Students & Student Communities */}
          <EventStudentStakeholders />

          {/* 9. Community Partners */}
          <EventPartners />

          {/* 11. Deliverables & Outcomes */}
          <EventOutcomes />

          {/* 12. Call To Action */}
          <EventCTA />
        </main>

        {/* 13. Footer */}
        <EventFooter />
      </div>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;

