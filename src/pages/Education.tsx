import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Education: React.FC = () => {
  const education = [
    {
      title: 'Master of Computer Science',
      organization: 'Stanford University',
      period: '2015 - 2017',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: [
        'Specialized in Human-Computer Interaction and Software Engineering',
        "Thesis: 'Improving User Experience in Mobile Applications'",
        'GPA: 3.9/4.0',
        'Research Assistant in the Human-Computer Interaction Lab'
      ]
    },
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Washington',
      period: '2011 - 2015',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: [
        'Minor in Mathematics',
        "Dean's List: 7 semesters",
        'Senior Project: Developed a collaborative note-taking application',
        'Member of Computer Science Student Association'
      ]
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Coding Academy',
      period: 'Summer 2015',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: [
        'Intensive 12-week program focused on full-stack web development',
        'Built 5 full-stack applications using MERN stack',
        'Participated in team projects and hackathons'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      period: '2022',
      description: [
        'Designed and deployed scalable, highly available systems on AWS',
        'Certification ID: AWS-ASA-12345'
      ]
    },
    {
      title: 'Professional Scrum Master I',
      organization: 'Scrum.org',
      period: '2021',
      description: [
        'Demonstrated knowledge of Scrum framework and its application',
        'Certification ID: PSM-123456'
      ]
    }
  ];

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
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <TimelineCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
