import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-5
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, level = 0 }) => {
  return (
    <div className="flex flex-col items-center bg-primary p-4 rounded-lg shadow-md">
      <div className="text-accent mb-2">
        {icon ? (
          icon
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-accent bg-opacity-10 rounded-full">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="font-medium">{name}</p>
        {level > 0 && (
          <div className="flex mt-2 justify-center">
            {[1, 2, 3, 4, 5].map(star => (
              <div
                key={star}
                className={`w-2 h-2 mx-0.5 rounded-full ${
                  star <= level ? 'bg-accent' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillBadge;
