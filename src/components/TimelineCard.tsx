import React from 'react';

interface TimelineCardProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  logo?: string;
  subtitle?: string; // optional inline subtitle (e.g., project type, unpaid tag)
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  organization,
  period,
  description,
  logo,
  subtitle
}) => {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-md mb-6 relative border-l-4 border-accent">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {logo && (
          <div className="flex flex-col items-center md:items-start">
            <div className="mx-auto mb-2 md:mb-0 flex flex-shrink-0 w-28 h-28 md:w-24 md:h-24 rounded-full p-3 md:p-3 bg-white ring-2 ring-accent/70 shadow-sm overflow-hidden transition-shadow hover:shadow-[0_0_0_3px_rgba(30,110,80,0.35)]">
              <img
                src={logo}
                alt={organization}
                className={`w-full h-full object-contain contrast-110 transition-transform duration-200 ease-out ${
                  logo.includes('mdchonors')
                    ? 'scale-[1.15] md:scale-[1.25] origin-center'
                    : 'origin-center'
                }`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold flex flex-wrap items-center gap-2">
            <span>{title}</span>
            {subtitle && (
              <span className="text-sm font-medium text-accent/90 bg-accent/10 px-2 py-0.5 rounded-md">
                {subtitle}
              </span>
            )}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted mb-4">
            <span className="font-medium">{organization}</span>
            <span className="hidden sm:block">•</span>
            <span>{period}</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
