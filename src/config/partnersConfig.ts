export interface PartnerLogo {
  id: string;
  name: string;
  category: 'AI Initiatives' | 'HR & Talent' | 'Youth & Community' | 'Learning Ecosystem';
  logo: string;
  description: string;
  rowOrder: 1 | 2; // For staggered centered layout (Row 1: 2 cards, Row 2: 3 cards)
}

export const COMMUNITY_PARTNERS_CONFIG: PartnerLogo[] = [
  {
    id: 'part-ai-compassion',
    name: 'AI + Compassion',
    category: 'AI Initiatives',
    logo: '/community-partners/ai-compassion.jpg',
    description: 'Human-centric AI initiative exploring ethics, empathy, and technological empowerment for future generations.',
    rowOrder: 1
  },
  {
    id: 'part-ai-evolve',
    name: 'AI Evolve',
    category: 'AI Initiatives',
    logo: '/community-partners/ai-evolve.jpeg',
    description: 'Uniting students, researchers, and innovators to build AI solutions, foster a connected culture of innovation, and turn concepts into real-world impact.',
    rowOrder: 1
  },
  {
    id: 'part-hr-evolve',
    name: 'HR Evolve',
    category: 'HR & Talent',
    logo: '/community-partners/hr-evolve.jpeg',
    description: 'Connecting HR leaders, industry mentors, and student talent to reshape workplace readiness.',
    rowOrder: 2
  },
  {
    id: 'part-foss-united',
    name: 'FOSS United',
    category: 'Learning Ecosystem',
    logo: '/community-partners/foss-united.svg',
    description: 'Non-profit foundation promoting and strengthening the Free and Open Source Software (FOSS) ecosystem in India.',
    rowOrder: 2
  },
  {
    id: 'part-tinkerhub',
    name: 'TinkerHub Foundation',
    category: 'Learning Ecosystem',
    logo: '/community-partners/tinkerhub.png',
    description: 'Empowering the next generation of tech talent through peer-to-peer learning, bootcamps, and campus communities.',
    rowOrder: 2
  },
  {
    id: 'part-ieee',
    name: 'IEEE',
    category: 'Learning Ecosystem',
    logo: '/community-partners/ieee.svg',
    description: 'The world\'s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
    rowOrder: 2
  },
  {
    id: 'part-csi',
    name: 'Computer Society of India',
    category: 'Learning Ecosystem',
    logo: '/community-partners/csi.png',
    description: 'A national body of computer professionals fostering scientific and educational activities in IT.',
    rowOrder: 2
  },
  {
    id: 'part-aws-sbg',
    name: 'AWS Student Builder Group',
    category: 'Learning Ecosystem',
    logo: '/community-partners/aws-sbg.svg',
    description: 'A student-led community focused on cloud computing, AWS technologies, and hands-on builder projects.',
    rowOrder: 2
  },
  {
    id: 'part-kites-india',
    name: 'Kites India',
    category: 'Youth & Community',
    logo: '/community-partners/kites-india.png',
    description: 'Youth movement inspiring social impact, volunteering, and community action across academic institutions.',
    rowOrder: 2
  },
  {
    id: 'part-mulearn-foundation',
    name: 'MuLearn Foundation',
    category: 'Learning Ecosystem',
    logo: '/community-partners/mulearn-foundation.jpg',
    description: 'Peer-to-peer learning ecosystem powering student capability, micro-quests, and real-world proof-of-work.',
    rowOrder: 2
  }
];
