import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  hideLive?: boolean; // when true, suppress live button but preserve layout spacing
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
  hideLive = false
}: ProjectProps) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-white">
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${featured ? 'scale-[1.25]' : 'scale-100'}`}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6 overflow-hidden min-h-[2.75rem] items-start content-start">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-full leading-none whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto pt-2 min-h-[2.75rem]">
          {!hideLive && (
            <a
              href={liveUrl || 'https://example.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={liveUrl ? `${title} live site` : `${title} live site placeholder`}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-60"
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
          {hideLive && !githubUrl && (
            <span className="inline-block px-4 py-2 rounded-md opacity-0 select-none">spacer</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
