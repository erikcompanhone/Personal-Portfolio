import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from '../components/ProjectCard';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects: ProjectProps[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      tags: ['React', 'TypeScript', 'Firebase'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting app with location detection and historical data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      tags: ['JavaScript', 'Weather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media accounts with data visualization.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      tags: ['React', 'D3.js', 'REST API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  // All projects without liveUrl for the dropdown view
  const allProjectsForDropdown: ProjectProps[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      tags: ['React', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting app with location detection and historical data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      tags: ['JavaScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media accounts with data visualization.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      tags: ['React', 'D3.js', 'REST API'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Recipe Finder',
      description: 'Search and filter recipes based on ingredients and dietary restrictions.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80',
      tags: ['JavaScript', 'API Integration', 'CSS Grid'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Budget Tracker',
      description: 'Personal finance app for tracking expenses and income with visualizations.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
      tags: ['React', 'IndexedDB', 'PWA'],
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Movie Database',
      description: 'Search and browse movies with details, ratings, and recommendations.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
      tags: ['React', 'TMDB API', 'Styled Components'],
      githubUrl: 'https://github.com/example'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md mb-6 hover:bg-opacity-80 transition-colors"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? (
            <>
              <ChevronUpIcon size={20} /> Hide All Projects
            </>
          ) : (
            <>
              <ChevronDownIcon size={20} /> View All Projects
            </>
          )}
        </button>

        {showAllProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjectsForDropdown.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
