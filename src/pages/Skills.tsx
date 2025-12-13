import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  // Reintroduced categorized technical sections per new request

  const frontend = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'React Native' },
    { name: 'TypeScript' },
    { name: 'Expo' },
    { name: 'HTML' },
    { name: 'Tailwind' },
    { name: 'CSS' }
  ];

  const backend = [
    { name: 'C++' },
    { name: 'Python' },
    { name: 'FastAPI' },
    { name: 'Pydantic' },
    { name: 'Node' },
    { name: 'Express' },
    { name: "RESTful API's" },
    { name: 'SQL' },
    { name: 'Lua' },
    { name: 'Java' },
    { name: 'C#' },
    { name: 'Solidity' },
    { name: 'Bash' }
  ];

  const toolsTech = [
    { name: 'Android Studio' },
    { name: 'Vercel' },
    { name: 'Jest' },
    { name: 'Docker' },
    { name: 'venv' },
    { name: 'Unity' },
    { name: 'Web3.js' },
    { name: 'MATLAB' }
  ];

  const languages = [
    { name: 'English' },
    { name: 'Portuguese' },
    { name: 'Spanish' }
  ];

  const softSkills = [
    { name: 'Problem-Solving' },
    { name: 'Communication' },
    { name: 'Teamwork' },
    { name: 'Adaptability' },
    { name: 'Time Management' },
    { name: 'Attention to Detail' },
    { name: 'Patience' },
    { name: 'Creativity' },
    { name: 'Continuous Learning' },
    { name: 'Critical Thinking' },
    { name: 'Leadership' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Skills & Tech Stack</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {languages.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Frontend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {frontend.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Backend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {backend.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {toolsTech.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Soft Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
