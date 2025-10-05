import React from 'react';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  // Reintroduced categorized technical sections per new request

  const frontend = [
    { name: 'JavaScript', level: 5 },
    { name: 'React', level: 4 },
    { name: 'React Native', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'Expo', level: 4 },
    { name: 'HTML', level: 4 },
    { name: 'Tailwind', level: 3 },
    { name: 'CSS', level: 3 }
  ].sort((a, b) => b.level - a.level);

  const backend = [
    { name: 'C++', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'Node', level: 4 },
    { name: 'Express', level: 4 },
    { name: "RESTful API's", level: 4 },
    { name: 'SQL', level: 3 },
    { name: 'Lua', level: 3 },
    { name: 'Java', level: 3 },
    { name: 'C#', level: 3 },
    { name: 'Solidity', level: 2 }
  ].sort((a, b) => b.level - a.level);

  const toolsTech = [
    { name: 'Android Studio', level: 5 },
    { name: 'Vercel', level: 4 },
    { name: 'Docker', level: 3 },
    { name: 'Unity', level: 3 },
    { name: 'Web3.js', level: 2 },
    { name: 'MATLAB', level: 2 }
  ].sort((a, b) => b.level - a.level);

  const languages = [
    { name: 'English', level: 5 },
    { name: 'Portuguese', level: 5 },
    { name: 'Spanish', level: 3 }
  ].sort((a, b) => b.level - a.level);

  const softSkills = [
    { name: 'Problem-Solving', level: 5 },
    { name: 'Communication', level: 4 },
    { name: 'Teamwork', level: 5 },
    { name: 'Adaptability', level: 4 },
    { name: 'Time Management', level: 4 },
    { name: 'Attention to Detail', level: 5 },
    { name: 'Patience', level: 5 },
    { name: 'Creativity', level: 5 },
    { name: 'Continuous Learning', level: 5 },
    { name: 'Critical Thinking', level: 4 },
    { name: 'Leadership', level: 3 }
  ].sort((a, b) => b.level - a.level);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Skills & Tech Stack</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {languages.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Frontend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {frontend.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Backend Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {backend.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {toolsTech.map((skill, index) => (
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
