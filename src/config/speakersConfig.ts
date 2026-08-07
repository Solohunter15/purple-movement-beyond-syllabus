export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  bio: string;
  topic?: string;
  category: 'Movement Leader' | 'Future Series Host' | 'Industry & HR Leader';
  image: string;
  rowOrder: 1 | 2; // Row 1: Keynote/Movement Leaders (Deepu & Claire), Row 2: Deepa & rest
}

export const FEATURED_SPEAKERS_CONFIG: Speaker[] = [
  // Row 1: Deepu & Claire (Hierarchical Top Row)
  {
    id: 'sp-deepu',
    name: 'Deepu S. Nath',
    designation: 'Managing Director, FAYA India',
    organization: 'Co-Founder, MuLearn & The Purple Movement',
    bio: 'Serial technology entrepreneur and visionary behind peer-to-peer learning ecosystems, empowering youth to build real-world capability beyond traditional syllabi.',
    topic: 'Redesigning Education for the AI Era: Proof of Work over Pedagogy',
    category: 'Movement Leader',
    image: '/speakers/Deepu S Nath.jpg',
    rowOrder: 1
  },
  {
    id: 'sp-claire',
    name: 'Claire C. John',
    designation: 'Host, #TheFutureSeries',
    organization: 'Ecosystem & Communication Lead',
    bio: 'Presenter, educator, and conversation catalyst exploring the shift in learning, leadership, and human capability for the next generation.',
    topic: 'Conversations That Transform: Navigating Capability in the AI Era',
    category: 'Future Series Host',
    image: '/speakers/Claire C John.jpg',
    rowOrder: 1
  },
  // Row 2: Deepa Nair & rest
  {
    id: 'sp-deepa',
    name: 'Deepa Nair',
    designation: 'HR Community Leader & Conclave Organizer',
    organization: 'HREvolve & Technopark HR Community',
    bio: 'Industry veteran bridging corporate HR, talent transformation, and student developer guilds to build future-ready work cultures.',
    topic: 'Industry-Academia Synergy: Preparing Tomorrow\'s Workforce',
    category: 'Industry & HR Leader',
    image: '/speakers/Deepa Nair.jpg',
    rowOrder: 2
  }
];
