import { EventNavbar } from './components/EventNavbar';
import { EventHero } from './components/EventHero';
import { EventAbout } from './components/EventAbout';
import { EventSpeakers } from './components/EventSpeakers';
import { EventPartners } from './components/EventPartners';
import { EventFooter } from './components/EventFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white selection:bg-purple-600 selection:text-white font-sans antialiased">
      {/* 1. Navbar (Fixed on scroll) */}
      <EventNavbar />

      <main>
        {/* 2. Hero Section (100vh) */}
        <EventHero />

        {/* 3. About Event Section */}
        <EventAbout />

        {/* 4. Featured Speakers Section */}
        <EventSpeakers />

        {/* 5. Community Partners Section */}
        <EventPartners />
      </main>

      {/* 6. Footer Section */}
      <EventFooter />
    </div>
  );
}

export default App;
