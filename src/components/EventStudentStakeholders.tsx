import React from 'react';
import { motion } from 'framer-motion';

interface StudentStakeholder {
  name: string;
  designation: string;
  organization: string;
  bio: string;
  image: string;
}

export const EventStudentStakeholders: React.FC = () => {
  const students: StudentStakeholder[] = [
    {
      name: 'Arundhathi Krishna',
      designation: 'Curator, Global Shapers Kochi Hub (WEF) & Program Manager',
      organization: 'TinkerHub Foundation',
      bio: 'Leading campus community initiatives, Women in Tech programs, and directing TinkHerHack at TinkerHub Foundation.',
      image: '/students/arundhathi-krishna.jpg'
    },
    {
      name: 'Claire C. John',
      designation: 'Community & Academic Director',
      organization: 'Beyond Syllabus Initiative',
      bio: 'Leading pedagogy innovation, flipped classroom models, and teacher-mentorship networks for future-ready education.',
      image: '/students/claire-c-john.jpg'
    },
    {
      name: 'Diya Bhatt',
      designation: 'Final Year B.Tech Student & AWS SBG Lead',
      organization: 'LBSITW',
      bio: 'Serving as the AWS Student Builder Group Community Lead at her campus, passionate about cloud tech.',
      image: '/students/diya-bhatt.jpg'
    },
    {
      name: 'Salahudheen Thajudheen',
      designation: 'Final Year CSE Graduate',
      organization: 'College of Engineering Kottarakkara',
      bio: 'Representing student stakeholders to contribute towards the Beyond Syllabus policy and academic framework.',
      image: '/students/salahudheen-thajudheen.jpg'
    },
    {
      name: 'Bhavya Sunil',
      designation: 'MSW Community Development & CSR Intern',
      organization: 'μLearn Foundation',
      bio: 'Specializing in Community Development and CSR, driving collaborative student engagement and learning programs.',
      image: '/students/bhavya-sunil.jpg'
    },
    {
      name: 'Nino K M',
      designation: 'Economics Student & S.L.A.T.E. Intern',
      organization: "St Teresa's College, Ernakulam",
      bio: 'Interning with S.L.A.T.E. (Sustainability, Leadership and Agency Through Education) to empower active student voice.',
      image: '/students/nino-k-m.jpg'
    },
    {
      name: 'Prakhar Sharma',
      designation: 'AWS Student Builder Group Representative',
      organization: 'RIET',
      bio: 'Serving as the representative of the AWS Student Builder Group RIET community, contributing towards Beyond Syllabus.',
      image: '/students/prakhar-sharma.jpg'
    },
    {
      name: 'Aparna Rajesh',
      designation: 'BA Economics Student & S.L.A.T.E. Intern',
      organization: "St Teresa's College, Ernakulam",
      bio: 'Working with S.L.A.T.E. to bridge gaps in education quality between private schools and government schools.',
      image: '/students/aparna-rajesh.jpg'
    },
    {
      name: 'Kavya',
      designation: 'Project Management Intern & IPM Student',
      organization: 'μLearn Foundation / TAPMI',
      bio: 'Project management intern driving student quests, campus outreach, and peer mentorship initiatives.',
      image: '/students/kavya.jpg'
    },
    {
      name: 'Aromal M',
      designation: 'B.Tech CSE Student & AWS SBG Leader',
      organization: 'RIT Kottayam',
      bio: 'AWS Student Builder Group Leader building active developer communities and open-source networks from scratch.',
      image: '/students/aromal-m.jpg'
    },
    {
      name: 'Akshat Pradeep',
      designation: 'Associate - Campus Management',
      organization: 'μLearn Foundation',
      bio: 'Managing student campus networks, coordinate learning drives, and building peer learning hubs.',
      image: '/students/akshat-pradeep.jpg'
    },
    {
      name: 'Arthalal C',
      designation: 'B.Tech AI & Data Science Student',
      organization: 'College of Engineering Perumon, Kollam',
      bio: 'Currently a volunteer and former Women in Tech Lead of TinkerHub CEP, promoting diverse tech communities.',
      image: '/students/arthalal-c.jpg'
    },
    {
      name: 'Vedha Mahadevan',
      designation: 'B.Tech CSE Student & SAC Chairperson',
      organization: 'MBCET / CSI Trivandrum Chapter',
      bio: 'Serving in leadership roles across IEEE, MuLearn, and CSI, organizing student union activities, and mentoring peer communities.',
      image: '/students/vedha-mahadevan.jpg'
    },
    {
      name: 'Fathima Basheer',
      designation: 'IEEE IAS SBC Chair & Founder\'s Associate Intern',
      organization: 'LBS College of Engineering, Kasaragod',
      bio: 'Serving as the Chair of IEEE IAS SBC at LBSCEK and working as a Founder\'s Associate Intern at Fabus Frames. She is also a co-founder of OpenMind Makerspace.',
      image: '/students/fathima-basheer.jpg'
    }
  ];

  return (
    <section id="students" className="py-28 relative overflow-hidden bg-[#0A0910] text-[#F4F3F7] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#8000FF] block font-bold">
            CO-CREATORS & REPRESENTATIVES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl uppercase text-[#F4F3F7] tracking-tight">
            STUDENTS & STUDENT COMMUNITIES
          </h2>
          <p className="text-sm text-[#9F9CAE] font-sans">
            Students and student communities serving as the foundational stakeholders chosen to lead academic and capability transformation.
          </p>
        </div>

        {/* Students Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111019] rounded-2xl border-2 border-white/5 p-5 flex flex-col justify-between hover:border-[#8000FF] transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#8000FF]/5 group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 border border-white/5 bg-[#171622] shadow-inner">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback image in case the jpg extension has minor mismatch
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith('.jpeg')) {
                        const base = target.src.substring(0, target.src.lastIndexOf('.'));
                        target.src = base + '.jpeg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060A]/40 via-transparent to-transparent opacity-50" />
                </div>

                {/* Info */}
                <h3 className="font-display font-black text-2xl text-[#F4F3F7] uppercase group-hover:text-[#00F5A0] transition-colors mb-1">
                  {student.name}
                </h3>

                <p className="text-xs text-[#8000FF] font-bold mb-3 font-mono-tech uppercase">
                  {student.designation}
                </p>

                <p className="text-[10px] text-[#F4F3F7] font-black uppercase mb-3 font-sans">
                  {student.organization}
                </p>

                <p className="text-xs text-[#9F9CAE] leading-relaxed font-sans font-normal border-l-2 border-[#8000FF]/40 pl-3">
                  {student.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono-tech text-[#9F9CAE] font-bold uppercase group-hover:text-[#F4F3F7] transition-colors">
                <span>STAKEHOLDER</span>
                <span className="text-[#00F5A0]">STUDENT</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
