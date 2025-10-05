import React from 'react';

interface TimelineCardProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  logo?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  organization,
  period,
  description,
  logo
}) => {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-md mb-6 relative border-l-4 border-accent">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {logo && (
          <div className="flex flex-col items-center md:items-start">
            <div className="mx-auto mb-2 md:mb-0 flex flex-shrink-0 w-28 h-28 md:w-24 md:h-24 rounded-full p-3 md:p-3 bg-white ring-1 ring-secondary/30 shadow-sm overflow-hidden">
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
          <h3 className="text-xl font-semibold">{title}</h3>
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
