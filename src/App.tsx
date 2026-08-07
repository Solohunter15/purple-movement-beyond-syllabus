import { EventNavbar } from './components/EventNavbar';
import { EventHero } from './components/EventHero';
import { EventAbout } from './components/EventAbout';
import { EventWhyNow } from './components/EventWhyNow';
import { EventJourneyTimeline } from './components/EventJourneyTimeline';
import { EventThemeDark } from './components/EventThemeDark';
import { EventOverviewCards } from './components/EventOverviewCards';
import { EventSpeakers } from './components/EventSpeakers';
import { EventPartners } from './components/EventPartners';
import { EventWhoShouldJoin } from './components/EventWhoShouldJoin';
import { EventOutcomes } from './components/EventOutcomes';
import { EventVerticalTimeline } from './components/EventVerticalTimeline';
import { EventCTA } from './components/EventCTA';
import { EventFooter } from './components/EventFooter';
import { CustomCursor } from './components/CustomCursor';
import { SpatialBackground } from './components/SpatialBackground';
import { EventLoadingScreen } from './components/EventLoadingScreen';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#1E1E1E] selection:bg-[#6F3FF5] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 0. Cinematic Loading Experience */}
      <EventLoadingScreen />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Ambient Floating Soft Light Blobs */}
      <SpatialBackground />

      {/* Main Content Stream */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <EventNavbar />

        <main>
          {/* 1. Hero Section */}
          <EventHero />

          {/* 2. About Beyond Syllabus */}
          <EventAbout />

          {/* 3. Why Now? */}
          <EventWhyNow />

          {/* 4. The Journey So Far */}
          <EventJourneyTimeline />

          {/* 5. Theme & Central Question (Deep Purple Dark Section) */}
          <EventThemeDark />

          {/* 6. Event Highlights / Overview */}
          <EventOverviewCards />

          {/* 7. Speakers */}
          <EventSpeakers />

          {/* 8. Community Partners */}
          <EventPartners />

          {/* 9. Who Should Join? */}
          <EventWhoShouldJoin />

          {/* 10. Expected Outcomes (What We Hope To Build Together) */}
          <EventOutcomes />

          {/* 11. Timeline (Roadmap) */}
          <EventVerticalTimeline />

          {/* 12. Final Call To Action */}
          <EventCTA />
        </main>

        {/* 13. Minimal Footer */}
        <EventFooter />
      </div>
    </div>
  );
}

export default App;
