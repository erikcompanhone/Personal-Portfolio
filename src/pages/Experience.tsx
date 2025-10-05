import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      organization: 'Tech Innovations Inc.',
      period: 'Jan 2021 - Present',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      description: [
        'Led a team of 5 developers in building a new customer portal using React and TypeScript',
        'Implemented CI/CD pipelines that reduced deployment time by 70%',
        'Architected and developed reusable component library used across multiple projects',
        'Mentored junior developers and conducted code reviews to ensure code quality'
      ]
    },
    {
      title: 'Frontend Developer',
      organization: 'Digital Solutions Ltd.',
      period: 'Mar 2019 - Dec 2020',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      description: [
        'Developed responsive web applications using React, Redux, and SASS',
        'Collaborated with UX designers to implement pixel-perfect interfaces',
        'Optimized application performance, improving load times by 35%',
        'Integrated RESTful APIs and implemented state management solutions'
      ]
    },
    {
      title: 'Junior Web Developer',
      organization: 'Creative Agency',
      period: 'Jun 2017 - Feb 2019',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      description: [
        'Built and maintained websites for various clients using HTML, CSS, and JavaScript',
        'Converted design mockups into functional web pages',
        'Implemented responsive designs for mobile and desktop platforms',
        'Assisted senior developers with debugging and testing'
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
