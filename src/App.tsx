import { EventNavbar } from './components/EventNavbar';
import { EventHero } from './components/EventHero';
import { EventAbout } from './components/EventAbout';
import { EventJourneyTimeline } from './components/EventJourneyTimeline';
import { EventKnowledgeCommons } from './components/EventKnowledgeCommons';
import { EventActionLayer } from './components/EventActionLayer';
import { EventThemeDark } from './components/EventThemeDark';
import { EventOverviewCards } from './components/EventOverviewCards';
import { EventSpeakers } from './components/EventSpeakers';
import { EventPartners } from './components/EventPartners';
import { EventOutcomes } from './components/EventOutcomes';
import { EventCTA } from './components/EventCTA';
import { EventFooter } from './components/EventFooter';
import { CustomCursor } from './components/CustomCursor';
import { EventLoadingScreen } from './components/EventLoadingScreen';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF9FA] text-[#0A0A0C] selection:bg-[#8000FF] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 0. Cinematic Loading Experience */}
      <EventLoadingScreen />

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

          {/* 8. Speakers & Voices */}
          <EventSpeakers />

          {/* 9. Community Partners */}
          <EventPartners />

          {/* 10. Deliverables & Outcomes */}
          <EventOutcomes />

          {/* 11. Call To Action */}
          <EventCTA />
        </main>

        {/* 12. Full Purple Footer (Screenshot 1 New) */}
        <EventFooter />
      </div>
    </div>
  );
}

export default App;
