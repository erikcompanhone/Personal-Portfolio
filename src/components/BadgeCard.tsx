import React from 'react';

interface BadgeCardProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  context?: string;
  image?: string;
  verifyUrl?: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ title, organization, period, description, context, image, verifyUrl }) => {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-md border-l-4 border-accent">
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="flex-1 min-w-0 md:pr-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted mb-4">
            <span className="font-medium">{organization}</span>
            <span className="hidden sm:block">•</span>
            <span>{period}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted mb-4">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {context && (
            <p className="text-sm text-muted mb-4">{context}</p>
          )}
          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-accent/20 border border-accent/40 text-accent-light hover:bg-accent/30 hover:border-accent/60 font-medium transition-colors"
            >
              Verify on Credly
            </a>
          )}
        </div>
        {image && (
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <img
              src={image}
              alt={`${title} badge`}
              className="w-52 h-52 object-contain rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCard;
