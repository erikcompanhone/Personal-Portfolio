import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full-Stack Junior Developer',
      organization: 'MyWayv – Boca Raton, FL',
      period: '05/2025 – Present',
  logo: '/assets/experience/mywayv.png',
      description: [
        'Building an AI-driven, music-based emotional wellness platform delivering personalized user experiences.',
        'Developing reusable TypeScript / React Native interface components with attention to performance & accessibility.',
        'Accelerating iteration cycles via Vercel preview environments and close product/design collaboration.',
        'Integrating Supabase-backed APIs and refining data flows for secure, low-latency session interactions.',
        'Tech: TypeScript, React Native, Supabase, Vercel.'
      ]
    },
    {
      title: 'MineTest Project - Undergraduate Research / Senior Project (Unpaid)',
      organization: 'University of Florida – Gainesville, FL',
      period: '01/2023 – 05/2024',
  logo: '/assets/education/uf.png',
      description: [
        'Progressed from junior contributor to team lead over 3 semesters driving Lua → C++ engine migration.',
        'Coordinated sprint-style meetings to surface blockers and maintain delivery momentum.',
        'Owned repository governance: code review standards, merge strategy, and branch hygiene.',
        'Directed senior project planning and task allocation to align technical scope with academic milestones.'
      ]
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
            <TimelineCard
              key={index}
              title={experience.title}
              organization={experience.organization}
              period={experience.period}
              description={experience.description}
              logo={experience.logo}
            />
        ))}
      </div>
    </div>
  );
};

export default Experience;
