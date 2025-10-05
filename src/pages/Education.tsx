import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Education: React.FC = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science (GPA: 3.58 / 4.0)",
      organization: 'University of Florida – Gainesville, FL',
      period: 'Graduated 05/2024',
  logo: '/uf.png',
      description: [
        'First-generation graduate with strong academic performance.',
        'Clubs: PC Building Society (2023/2024).'
      ]
    },
    {
      title: 'Associate in Arts in Computer Science (GPA: 3.8 / 4.0)',
      organization: 'Miami Dade College – The Honors College, Wolfson Campus – Miami, FL',
      period: 'Graduated 05/2022',
  logo: '/mdchonors.png',
      description: [
        'Robotics Club (2020–2021).',
        'Wolves in Training (WIT): mentee (2020–2021) and mentor (2021–2022).'
      ]
    }
  ];

  // Certifications intentionally omitted for now (expired). If reintroduced, mark as (Expired) or place under a separate \"Past Certifications\" heading to avoid confusion.

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Education</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Academic Background</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <TimelineCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </section>
      {/* Certifications section intentionally removed. If re-added, create a `pastCertifications` array with explicit (Expired) tags. */}
    </div>
  );
};

export default Education;
