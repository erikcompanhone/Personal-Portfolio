import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 5 },
    { name: 'CSS3', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'React', level: 5 },
    { name: 'Redux', level: 4 },
    { name: 'Next.js', level: 4 },
    { name: 'Tailwind CSS', level: 5 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 4 },
    { name: 'Express', level: 4 },
    { name: 'MongoDB', level: 3 },
    { name: 'PostgreSQL', level: 3 },
    { name: 'GraphQL', level: 3 },
    { name: 'REST API', level: 5 }
  ];

  const toolsSkills = [
    { name: 'Git', level: 5 },
    { name: 'Docker', level: 3 },
    { name: 'AWS', level: 3 },
    { name: 'CI/CD', level: 4 },
    { name: 'Jest', level: 4 },
    { name: 'Webpack', level: 4 }
  ];

  const languages = [
    { name: 'English', level: 5 },
    { name: 'Portuguese', level: 4 },
    { name: 'Spanish', level: 3 }
  ];

  const softSkills = [
    { name: 'Problem-Solving', level: 5 },
    { name: 'Communication', level: 4 },
    { name: 'Teamwork', level: 5 },
    { name: 'Adaptability', level: 4 },
    { name: 'Time Management', level: 4 },
    { name: 'Attention to Detail', level: 5 },
    { name: 'Patience', level: 4 },
    { name: 'Creativity', level: 4 },
    { name: 'Continuous Learning', level: 5 },
    { name: 'Critical Thinking', level: 4 },
    { name: 'Leadership', level: 3 }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Skills & Tech Stack</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Frontend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {frontendSkills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Backend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {backendSkills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {toolsSkills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {languages.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Soft Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
