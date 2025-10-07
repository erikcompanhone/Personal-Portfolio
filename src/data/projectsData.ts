// Centralized projects data
// NOTE: Replace placeholder repo/live URLs with actual deployments once ready

export interface Project {
  slug: string;
  title: string;
  short: string; // concise tagline
  description: string[]; // paragraph blocks
  tech: string[];
  repo?: string;
  live?: string;
  category: 'featured' | 'data' | 'web' | 'mobile' | 'web3' | 'game' | 'open-source' | 'other';
  featuredRank?: number; // 1..n for current highlights
  status?: 'live' | 'upcoming';
  importance?: number; // legacy importance retained for sorting
  image?: string; // path relative to /assets/projects or legacy path
}

// Utility to slugify project titles
const slug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Internal type for initial raw entries prior to slug/category normalization
interface RawProject {
  rawTitle: string;
  title: string;
  short: string;
  description: string[];
  tech: string[];
  repo?: string;
  live?: string;
  category?: Project['category'];
  featuredRank?: number;
  status?: 'live' | 'upcoming';
  importance?: number;
  image?: string;
}

// Legacy data transformed (will get slug + defaulted category later)
const legacy: RawProject[] = [
  {
    rawTitle: 'Game Recommender V2',
    title: 'Game Recommender V2',
    short: 'Full-stack game discovery & tracking platform.',
    description: [
      'GameRecV2 is a full-stack web application designed to recommend and track video games, offering users an intuitive interface for discovering new games and managing their collections.',
      'Frontend built with React + Vite; backend Node/Express with SQLite; integrates Steam & RAWG APIs; containerized via Docker.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'Docker', 'RESTful API\'s', 'SQL'],
    repo: 'https://github.com/erikalmeidah/GameRecommenderV2',
    image: 'gamerecv2.jpg',
    category: 'featured',
    featuredRank: 1,
    status: 'live',
    importance: 5
  },
  {
    rawTitle: 'Florida Panther Data Analyzer',
    title: 'Florida Panther Data Analyzer',
    short: 'Interactive conservation data & mapping tool.',
    description: [
      'Interactive web application combining telemetry & mortality datasets for conservation insight.',
      'Includes filters, heatmaps, graphs, and spatial exploration for public awareness.'
    ],
    tech: ['React', 'Leaflet', 'Recharts', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'SQL', 'Python'],
    repo: 'https://github.com/erikalmeidah/FloridaPanther',
    image: 'floridaPantherDataAnalyzer.png',
    category: 'featured',
    featuredRank: 2,
    status: 'live',
    importance: 4
  },
  {
    rawTitle: 'Pokedex App',
    title: 'Pokedex App',
    short: 'Pokémon browser with stats & types.',
    description: [
      'Full-stack application to explore detailed Pokémon data using PokeAPI, React UI and Express backend.',
      'Displays stats, types, abilities, and media in a responsive interface.'
    ],
    tech: ['React', 'Node.js', 'Express', 'RESTful API\'s', 'CSS', 'HTML', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/Pokedex',
    image: 'pokedex.jpg',
    category: 'featured',
    featuredRank: 3,
    status: 'live',
    importance: 4
  },
  // Future highlight placeholder
  {
    rawTitle: 'Kitchen Chaos',
    title: 'Kitchen Chaos',
    short: 'Unity cooking game – WebGL build upcoming.',
    description: [
      'Unity-based single-player cooking management game inspired by Overcooked.',
      'Focus on timing, asset management, and gameplay loop; WebGL optimization pending.'
    ],
    tech: ['Unity', 'C#'],
  image: 'Kitchen Chaos.jpg',
    repo: 'https://github.com/erikcompanhone/KitchenChaos.git',
    category: 'game',
    status: 'upcoming',
    importance: 4.5
  },
  {
    rawTitle: 'Crowdfunding DApp',
    title: 'Crowdfunding DApp',
    short: 'Ethereum testnet crowdfunding platform.',
    description: [
      'Decentralized application enabling campaign creation & contributions via smart contracts.',
      'Implements factory + campaign contracts with React front-end and Web3.js integration.'
    ],
    tech: ['Solidity', 'Hardhat', 'React', 'Web3.js', 'JavaScript', 'MetaMask'],
    repo: 'https://github.com/erikalmeidah/CrowdfundingDApp',
    image: 'crowdfundingDApp2.jpg',
    category: 'web3',
    importance: 5
  },
  {
    rawTitle: 'Minetest Project',
    title: 'Minetest Project',
    short: 'Open-source C++ voxel engine contribution.',
    description: [
      'Contributions to a large-scale C++ voxel engine: bug fixes, performance improvements, gameplay tweaks.'
    ],
    tech: ['C++', 'Lua'],
    repo: 'https://github.com/erikalmeidah/minetest',
    image: 'minetest-logo.png',
    category: 'open-source',
    importance: 5
  },
  {
    rawTitle: 'Threads Clone',
    title: 'Threads Clone',
    short: 'Mobile social feed prototype (tutorial-based).',
    description: [
      'Threads-inspired app with auth, real-time feed, profiles, and threaded replies using Supabase + TanStack Query.'
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'TanStack Query', 'Expo Router', 'NativeWind'],
    repo: 'https://github.com/erikalmeidah/Threads-Clone',
    image: 'threadsclone.png',
    category: 'mobile',
    importance: 4
  },
  {
    rawTitle: 'Speech to Text / Text to Speech Demos',
    title: 'Speech to Text / Text to Speech Demos',
    short: 'Voice recognition & synthesis showcase.',
    description: [
      'Dual demo app for speech recognition and TTS using modern speech APIs + ElevenLabs voices.'
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'ElevenLabs', 'Expo Router'],
    repo: 'https://github.com/erikalmeidah/TextToSpeech-and-SpeechToText-Demo',
    image: 'ttsstt.png',
    category: 'mobile',
    importance: 4
  },
  {
    rawTitle: 'Simple Meditation App',
    title: 'Simple Meditation App',
    short: 'Guided ambient meditation with scenes.',
    description: [
      'Meditation timer with ambient scenes, affirmations, and audio loops; interface built with React Native.'
    ],
    tech: ['React Native', 'Expo', 'Tailwind CSS', 'Context API'],
    repo: 'https://github.com/erikalmeidah/MeditationApp',
    image: 'meditation.png',
    category: 'mobile',
    importance: 4
  },
  {
    rawTitle: 'NYC Crash Analyzer',
    title: 'NYC Crash Analyzer',
    short: 'Interactive crash data exploration tool.',
    description: [
      'Academic project analyzing New York City crash data with SQL + React visual front-end.'
    ],
    tech: ['React', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/NYC-Crash-Data-Analyzer',
    image: 'db-graph.png',
    category: 'data',
    importance: 4.5
  },
  {
    rawTitle: 'Game Recommender',
    title: 'Game Recommender (Original)',
    short: 'First iteration C++ recommendation engine.',
    description: [
      'C++ project fetching Steam profile data and recommending games using rated dataset.'
    ],
    tech: ['C++', 'RESTful API\'s'],
    repo: 'https://github.com/erikalmeidah/GameRecommender',
    image: 'game-reccomender.png',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'Compiler Project',
    title: 'Compiler Project',
    short: 'Multi-pass image language compiler in Java.',
    description: [
      'Academic multi-pass compiler for a professor-designed language manipulating pixel images.'
    ],
    tech: ['Java'],
    repo: 'https://github.com/erikalmeidah/COP4020---Compiler-Project',
    image: 'plc-java-compiler.png',
    category: 'other',
    importance: 4
  },
  {
    rawTitle: 'Portfolio',
    title: 'Portfolio (Previous Version)',
    short: 'Earlier personal portfolio iteration.',
    description: [
      'Legacy React portfolio focusing on layout & component experimentation.'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/Personal-Portfolio',
    image: 'portfolio-wip.png',
    category: 'web',
    importance: 3.5
  },
  {
    rawTitle: 'Asteroids Reloaded (README Contribution)',
    title: 'Asteroids Reloaded (README Contribution)',
    short: 'Documentation contribution to open-source remake.',
    description: [
      'Created comprehensive README outlining goals, gameplay, and structure for an Asteroids remake.'
    ],
    tech: ['Open-Source'],
    repo: 'https://github.com/erikalmeidah/Asteroids-Reloaded',
    image: 'asteroids-readme.png',
    category: 'open-source',
    importance: 2
  },
  {
    rawTitle: 'CASMM',
    title: 'CASMM',
    short: 'Team-based sandbox save feature implementation.',
    description: [
      'Collaborative project implementing sandbox save functionality and coordinating merges across teams.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/Sapphire-Project07-3i',
    image: 'casmm-login.png',
    category: 'web',
    importance: 4
  },
  {
    rawTitle: 'Youtube Front-End Clone',
    title: 'YouTube Front-End Clone',
    short: 'Hardcoded responsive YouTube layout clone.',
    description: [
      'Front-end clone practicing layout, responsive grids, and semantic HTML.'
    ],
    tech: ['HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/Ytb-front-end-clone',
    image: 'youtube-front-end.png',
    category: 'web',
    importance: 4
  },
  {
    rawTitle: 'Game Recommender V1',
    title: 'Game Recommender V1',
    short: 'Earlier platform iteration (JS).',
    description: [
      'Baseline implementation informing architecture & performance improvements in V2.'
    ],
    tech: ['JavaScript', 'React'],
    repo: 'https://github.com/erikcompanhone/GameRecommender.git',
    image: 'game-reccomender.png',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'Rock Paper Scissors',
    title: 'Rock Paper Scissors',
    short: 'Simple browser game exercise.',
    description: [
      'Small JavaScript game for practice completed after tutorial.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/rock-paper-scissors',
    image: 'rock-paper-scissors.png',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'Amazon Front-End Copy',
    title: 'Amazon Front-End Copy',
    short: 'Front-end only Amazon UI clone.',
    description: [
      'Responsive interface replication focusing on structure & layout patterns.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/javascript-amazon-project',
    image: 'amazon-frontend-copy.jpg',
    category: 'web',
    importance: 4
  },
  {
    rawTitle: 'Simple Calculator',
    title: 'Simple Calculator',
    short: 'Basic operations & UI practice.',
    description: [
      'Calculator supporting arithmetic, sqrt, percentage, and input validation.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/Simple-Calculator',
    image: 'calculator.jpg',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'Color Picker App',
    title: 'Color Picker App',
    short: 'React color selection utility.',
    description: [
      'Simple palette exploration and color selection UI.'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/ColorPickerApp',
    image: 'colorpicker.jpg',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'Clock App',
    title: 'Clock App',
    short: 'Time display utility app.',
    description: [
      'Small clock component for practicing state & intervals.'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/ClockApp',
    image: 'clock.jpg',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'To-Do List',
    title: 'To-Do List',
    short: 'Task management exercise.',
    description: [
      'Add/edit/delete tasks with simple state handling.'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/ToDoList',
    image: 'todolist.jpg',
    category: 'web',
    importance: 3
  },
  {
    rawTitle: 'StopWatch',
    title: 'Stopwatch',
    short: 'Stopwatch state management practice.',
    description: [
      'Timing utility focusing on component lifecycle behaviors.'
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/erikalmeidah/StopWatchApp',
    image: 'stopwatch.jpg',
    category: 'web',
    importance: 3
  }
];

export const projects: Project[] = legacy.map(p => ({
  ...p,
  slug: slug(p.rawTitle),
  category: p.category || 'other'
}));

export const featured = projects
  .filter(p => p.category === 'featured')
  .sort((a, b) => (a.featuredRank || 99) - (b.featuredRank || 99));

// Custom priority: ensure these four appear first (in the given order) when listing non-featured projects.
const priorityOrder = [
  'Simple Meditation App',
  'Threads Clone',
  'Minetest Project',
  'Crowdfunding DApp'
];
export const nonFeatured = projects
  .filter(p => p.category !== 'featured')
  .sort((a, b) => {
    const ai = priorityOrder.indexOf(a.title);
    const bi = priorityOrder.indexOf(b.title);
    const aPriority = ai === -1 ? Number.MAX_SAFE_INTEGER : ai;
    const bPriority = bi === -1 ? Number.MAX_SAFE_INTEGER : bi;
    if (aPriority !== bPriority) return aPriority - bPriority;
    // Stable-ish secondary sort: importance desc, then title
    const aImp = a.importance ?? 0;
    const bImp = b.importance ?? 0;
    if (bImp !== aImp) return bImp - aImp;
    return a.title.localeCompare(b.title);
  });

export const byCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category);

export const getProject = (slugParam: string) =>
  projects.find(p => p.slug === slugParam);
