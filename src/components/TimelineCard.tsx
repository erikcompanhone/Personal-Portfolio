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
          <div className="hidden md:block flex-shrink-0 w-16 h-16 bg-secondary rounded-full overflow-hidden">
            <img src={logo} alt={organization} className="w-full h-full object-cover" />
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
