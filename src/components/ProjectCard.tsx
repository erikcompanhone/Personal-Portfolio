import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}: ProjectProps) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string, index: number) => (
            <span key={index} className="px-3 py-1 bg-secondary text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              <ExternalLinkIcon size={16} /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-opacity-80 rounded-md transition-colors"
            >
              <GithubIcon size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
