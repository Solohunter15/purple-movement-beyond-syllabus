export interface PartnerLogo {
  id: string;
  name: string;
  category: 'AI Initiatives' | 'HR & Talent' | 'Youth & Community' | 'Learning Ecosystem';
  logo: string;
  description: string;
  rowOrder: 1 | 2; // For staggered centered layout (Row 1: 2 cards, Row 2: 3 cards)
}

export const COMMUNITY_PARTNERS_CONFIG: PartnerLogo[] = [
  // Row 1: 2 Cards
  {
    id: 'part-ai-compassion',
    name: 'AI + Compassion',
    category: 'AI Initiatives',
    logo: '/community-partners/AI + Compassion.jpg',
    description: 'Human-centric AI initiative exploring ethics, empathy, and technological empowerment for future generations.',
    rowOrder: 1
  },
  {
    id: 'part-ai-evolve',
    name: 'AI Evolve',
    category: 'AI Initiatives',
    logo: '/community-partners/AI Evolve.jpeg',
    description: 'Accelerating AI readiness, research sprints, and hands-on skill development for student builders.',
    rowOrder: 1
  },
  // Row 2: 3 Cards
  {
    id: 'part-hr-evolve',
    name: 'HR Evolve',
    category: 'HR & Talent',
    logo: '/community-partners/HR Evolve.jpg',
    description: 'Connecting HR leaders, industry mentors, and student talent to reshape workplace readiness.',
    rowOrder: 2
  },
  {
    id: 'part-kites-india',
    name: 'Kites India',
    category: 'Youth & Community',
    logo: '/community-partners/Kites India.png',
    description: 'Youth movement inspiring social impact, volunteering, and community action across academic institutions.',
    rowOrder: 2
  },
  {
    id: 'part-mulearn-foundation',
    name: 'MuLearn Foundation',
    category: 'Learning Ecosystem',
    logo: '/community-partners/Mulearn Foundation.jpg',
    description: 'Peer-to-peer learning ecosystem powering student capability, micro-quests, and real-world proof-of-work.',
    rowOrder: 2
  }
];
