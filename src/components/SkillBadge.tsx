import React, { useState, useMemo } from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode; // Explicit icon overrides logo logic
  logoOverrideSlug?: string; // Optional custom slug if file name differs
}

// Map for special-case naming to file slugs
const skillSlugOverrides: Record<string, string> = {
  'C++': 'cpp',
  'C#': 'csharp',
  "RESTful API's": 'rest',
  'React Native': 'react-native',
  'Web3.js': 'web3',
  'Android Studio': 'android',
  Node: 'nodejs',
  'Node.js': 'nodejs'
};

const slugify = (raw: string) =>
  raw
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/#/g, 'sharp')
    .replace(/[.'`]/g, '')
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-');

const POSSIBLE_EXTS = ['png', 'svg', 'webp']; // prefer provided 100x100 png first

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, logoOverrideSlug }) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const baseSlug = logoOverrideSlug || skillSlugOverrides[name] || slugify(name);

  const candidates = useMemo(() => {
    const list: string[] = [];
    for (const ext of POSSIBLE_EXTS) {
      list.push(`/assets/skills/${baseSlug}.${ext}`); // new location
    }
    for (const ext of POSSIBLE_EXTS) {
      list.push(`/skills/${baseSlug}.${ext}`); // legacy fallback
    }
    return list;
  }, [baseSlug]);

  const currentSrc = candidates[candidateIndex];

  const handleImgError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(i => i + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="flex flex-col items-center bg-primary p-4 rounded-lg shadow-md">
      <div className="text-accent mb-2">
        {icon ? (
          icon
        ) : (
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-white/90 dark:bg-white/95 ring-2 ring-accent/80 shadow-sm relative transition-shadow hover:shadow-[0_0_0_3px_rgba(30,110,80,0.35)]"
          >
            {!failed ? (
              <img
                key={currentSrc}
                src={currentSrc}
                alt={name}
                className="w-full h-full object-contain p-1 mix-blend-multiply dark:mix-blend-normal"
                loading="lazy"
                decoding="async"
                onError={handleImgError}
              />
            ) : (
              <span className="font-bold text-accent text-sm leading-none tracking-wide">
                {name.charAt(0)}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};

export default SkillBadge;
