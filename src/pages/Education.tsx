import React from 'react';
import TimelineCard from '../components/TimelineCard';
import BadgeCard from '../components/BadgeCard';

const Education: React.FC = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science (GPA: 3.58 / 4.0)",
      organization: 'University of Florida – Gainesville, FL',
      period: 'Graduated 05/2024',
  logo: '/assets/education/uf.png',
      description: [
        'First-generation graduate with strong academic performance.',
        'Clubs: PC Building Society (2023/2024).'
      ]
    },
    {
      title: 'Associate in Arts in Computer Science (GPA: 3.8 / 4.0)',
      organization: 'Miami Dade College – The Honors College, Wolfson Campus – Miami, FL',
      period: 'Graduated 05/2022',
  logo: '/assets/education/mdchonors.png',
      description: [
        'Robotics Club (2020–2021).',
        'Wolves in Training (WIT): mentee (2020–2021) and mentor (2021–2022).'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Deploy Multi-Agent Architectures',
      organization: 'Google Cloud Skill Badge',
      period: 'Earned May 2026',
      description: [
        'Build multi-agent systems with the Agent Development Kit (ADK).',
        'Connect agents using the Agent-to-Agent (A2A) protocol.',
        'Integrate external tools via the Model Context Protocol (MCP).',
        'Deploy a complete multi-agent solution to Agent Engine.'
      ],
      context: 'Final badge of the Agentic AI on Google Cloud learning path, which guides learners through building and deploying intelligent multi-agent systems using Google Cloud technologies, covering Gemini Enterprise, ADK, enterprise database integration, and secure agent architectures.',
      image: '/assets/education/certs_and_badges/deploy_multi_agent_architectures.png',
      verifyUrl: 'https://www.credly.com/badges/99a5f974-5f27-4092-90d5-bb761d03c745'
    }
  ];

  // Expired certifications intentionally omitted. If reintroduced, mark as (Expired) under a separate "Past Certifications" heading.

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

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Certifications & Badges</h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <BadgeCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
              context={item.context}
              image={item.image}
              verifyUrl={item.verifyUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
