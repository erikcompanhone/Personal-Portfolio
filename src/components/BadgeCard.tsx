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
            <p className="text-muted">{context}</p>
          )}
        </div>
        {image && (
          <div className="flex flex-col items-center flex-shrink-0 gap-4">
            <div className="w-52 h-52 p-4 rounded-2xl bg-secondary border border-secondary flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt={`${title} badge`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            {verifyUrl && (
              <a
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-accent text-accent rounded-md hover:bg-accent hover:bg-opacity-10 transition-colors"
              >
                Verify
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCard;
