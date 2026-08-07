export interface AgendaSession {
  id: string;
  time: string;
  title: string;
  track: 'keynote' | 'panel' | 'workshop' | 'networking';
  description: string;
  speakers: string[];
  location: string;
  takeaway: string;
}

export const AGENDA_SESSIONS_CONFIG: AgendaSession[] = [
  {
    id: 's1',
    time: '09:00 AM - 09:30 AM',
    title: 'Documentary Reel & Opening: "You Made Power Listen"',
    track: 'keynote',
    description: 'A powerful intro setting the narrative: One resignation is not a revolution. Moving from protest to purpose and rebuilding institutions.',
    speakers: ['Deepu S. Nath (Founder, TPM)', 'Claire C. John'],
    location: 'Main Live Stream',
    takeaway: 'Transitioning from student protest to collaborative system reform.'
  },
  {
    id: 's2',
    time: '09:30 AM - 11:00 AM',
    title: 'Bridge the Gap 4.0 Panel: From Exam Society to Capability Society',
    track: 'panel',
    description: 'High-level dialogue on 6-month internships, faculty sabbaticals, credit-based project verification, and KTU/KDISC integration.',
    speakers: ['Dr. PV Unnikrishnan (KDISC)', 'Dr. Ciza Thomas (KTU)', 'Dr. Jayashankar Prasad', 'EY & Industry Leaders'],
    location: 'Panel Auditorium',
    takeaway: 'Defining structural policy changes for AI-era capability building.'
  },
  {
    id: 's3',
    time: '11:15 AM - 01:00 PM',
    title: 'Beyond Syllabus Tool Launch & Flipped Classroom Model',
    track: 'workshop',
    description: 'Live demonstration of the Beyond Syllabus platform — enabling students to explore AI concepts before class while faculty act as mentors.',
    speakers: ['Beyond Syllabus Core Team', 'µLearn Mentors'],
    location: 'Tech Sandbox Lab',
    takeaway: 'Hands-on preview of decentralized AI-assisted flipped learning.'
  },
  {
    id: 's4',
    time: '02:00 PM - 03:30 PM',
    title: 'Student & Youth Showcase: Proof of Work Exhibition',
    track: 'panel',
    description: 'Showcasing real-world student projects, open-source contributions, and social problem-solving portfolios that replace traditional marks.',
    speakers: ['Student Innovators', 'IEEE / NSS / µLearn Leads'],
    location: 'Youth Exhibition Arena',
    takeaway: 'Tangible evidence that Gen Z is ready to lead system change.'
  },
  {
    id: 's5',
    time: '03:45 PM - 05:00 PM',
    title: 'Working Group Assignments & Sept 5 Physical Summit Roadmap',
    track: 'networking',
    description: 'Forming multi-stakeholder working groups to refine recommendations leading up to the physical summit on Teacher’s Day (Sept 5).',
    speakers: ['Deepu S. Nath', 'Stakeholder Representatives'],
    location: 'Main Auditorium',
    takeaway: 'Official commitment rollout toward the September 5 Summit.'
  }
];
