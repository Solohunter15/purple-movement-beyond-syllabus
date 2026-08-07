export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  category: 'Ecosystem Leader' | 'Academic Visionary' | 'Industry Partner' | 'Student Beneficiary';
  image: string;
  bio: string;
  topic?: string;
  rowOrder: number;
  imagePosition?: string;
}

export const FEATURED_SPEAKERS_CONFIG: Speaker[] = [
  {
    id: 'deepu-nath',
    name: 'Deepu S. Nath',
    designation: 'Managing Director & Founder',
    organization: 'The Purple Movement / µLearn',
    category: 'Ecosystem Leader',
    image: '/speakers/Deepu S Nath.jpg',
    bio: 'Pioneering decentralized learning ecosystems, capability-based skilling, and youth-led education transformation across India.',
    topic: 'You Made Power Listen. Now Make the System Change.',
    rowOrder: 1
  },
  {
    id: 'claire-john',
    name: 'Claire C. John',
    designation: 'Community & Academic Director',
    organization: 'Beyond Syllabus Initiative',
    category: 'Ecosystem Leader',
    image: '/speakers/Claire C John.jpg',
    bio: 'Leading pedagogy innovation, flipped classroom models, and teacher-mentorship networks for future-ready education.',
    topic: 'Flipped Classrooms & AI-Native Learning Infrastructure',
    rowOrder: 1
  },
  {
    id: 'deepa-nair',
    name: 'Deepa Nair',
    designation: 'Ecosystem Strategy & Talent Lead',
    organization: 'Purple Movement / µLearn',
    category: 'Industry Partner',
    image: '/speakers/Deepa Nair.jpg',
    bio: 'Connecting industry talent networks, skill validation, and capability-based placement frameworks.',
    topic: 'Bridging the Talent Gap: Capability over Credentials',
    rowOrder: 1
  }
];
