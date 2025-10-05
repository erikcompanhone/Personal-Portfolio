import React, { useState } from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode; // Explicit icon overrides logo logic
  level?: number; // 1-5
  logoOverrideSlug?: string; // Optional custom slug if file name differs
}

// Map for special-case naming to file slugs
const skillSlugOverrides: Record<string, string> = {
  'C++': 'cpp',
  'C#': 'csharp',
  "RESTful API's": 'rest',
  'React Native': 'react-native',
  'Web3.js': 'web3',
  'Android Studio': 'android-studio'
};

const slugify = (raw: string) =>
  raw
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/#/g, 'sharp')
    .replace(/[.'`]/g, '')
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-');

const POSSIBLE_EXTS = ['svg', 'png', 'webp'];

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, level = 0, logoOverrideSlug }) => {
  const [extIndex, setExtIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const baseSlug = logoOverrideSlug || skillSlugOverrides[name] || slugify(name);
  const currentExt = POSSIBLE_EXTS[extIndex];
  const src = `/skills/${baseSlug}.${currentExt}`;

  const handleImgError = () => {
    if (extIndex < POSSIBLE_EXTS.length - 1) {
      setExtIndex(i => i + 1); // try next extension
    } else {
      setFailed(true); // fallback to letter
    }
  };

  return (
    <div className="flex flex-col items-center bg-primary p-4 rounded-lg shadow-md">
      <div className="text-accent mb-2">
        {icon ? (
          icon
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full overflow-hidden">
            {!failed ? (
              <img
                key={src}
                src={src}
                alt={name}
                className="w-full h-full object-contain p-1"
                loading="lazy"
                onError={handleImgError}
              />
            ) : (
              <span className="font-medium text-accent">{name.charAt(0)}</span>
            )}
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
