import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from '../components/ProjectCard';
import { featured, nonFeatured } from '../data/projectsData';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Map featured data to ProjectCard props (using description instead of short)
  const featuredCards: ProjectProps[] = featured.map(p => ({
    title: p.title,
    description: p.description?.join(' ') || p.short,
    image: p.image ? `/assets/projects/${p.image}` : '/assets/projects/placeholder.png',
    tags: p.tech.slice(0,4),
    liveUrl: p.live,
    githubUrl: p.repo
  }));

  const allOtherCards: ProjectProps[] = nonFeatured.map(p => ({
    title: p.title,
    description: p.description?.join(' ') || p.short,
    image: p.image ? `/assets/projects/${p.image}` : '/assets/projects/placeholder.png',
    tags: p.tech.slice(0,4),
    liveUrl: p.live,
    githubUrl: p.repo
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Featured Projects</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-12">
          {featuredCards.map((proj, i) => (
            <div key={i} className="flex flex-col shrink-0 w-[340px] basis-[340px]">
              <ProjectCard {...proj} featured />
            </div>
          ))}
        </div>
      </section>
      <section>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md mb-6 hover:bg-opacity-80 transition-colors"
          onClick={() => setShowAll((v: boolean) => !v)}
        >
          {showAll ? 'Hide All Projects' : 'View All Projects'}
        </button>
        {showAll && (
          <div className="flex flex-wrap justify-center items-stretch gap-12">
            {allOtherCards.map((proj, i) => (
              <div key={i} className="flex flex-col shrink-0 w-[340px] basis-[340px]">
                <ProjectCard {...proj} hideLive />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
