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
      'Full-stack web application for discovering and tracking video games with an intuitive interface.',
      'Built with React, Vite, TypeScript, and Node/Express backend using SQLite, integrating Steam & RAWG APIs.'
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
      'Interactive web application combining telemetry and mortality datasets for Florida panther conservation insights.',
      'Features filters, heatmaps, graphs, and spatial mapping for public awareness.'
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
      'Modern Pokédex built with React and Vite featuring real-time search and detailed Pokémon information.',
      'Uses Vercel Serverless Functions to proxy PokeAPI with caching for fast, responsive performance.'
    ],
    tech: ['React', 'Vite', 'Axios', 'CSS Modules', 'Vercel Functions', 'PokeAPI', 'JavaScript'],
    repo: 'https://github.com/erikalmeidah/Pokedex',
    live: 'https://pokedex.erikcompanhone.com',
  image: 'pokedex.png',
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
      'Focuses on timing, asset management, and engaging gameplay loops with WebGL optimization in progress.'
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
      'Decentralized application enabling campaign creation and contributions through Ethereum smart contracts.',
      'Features factory and campaign contracts with a React frontend and Web3.js integration.'
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
      'Contributions to a large-scale C++ voxel engine including bug fixes and performance improvements.',
      'Enhanced gameplay mechanics and engine stability for the open-source community.'
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
      'Threads-inspired mobile app featuring authentication, real-time feed, and user profiles.',
      'Built with React Native, Expo, and Supabase for backend functionality and real-time data.'
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
      'Dual-purpose demo application showcasing speech recognition and text-to-speech capabilities.',
      'Integrates modern speech APIs and ElevenLabs voices for high-quality audio synthesis.'
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
      'Mobile meditation timer featuring ambient scenes, affirmations, and calming audio loops.',
      'Built with React Native and Expo for a peaceful mindfulness experience.'
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
      'Academic project analyzing New York City traffic crash data with SQL database queries.',
      'Features interactive React visualization frontend for exploring patterns and trends.'
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
      'C++ project that fetches Steam profile data and recommends games based on user ratings.',
      'Served as the foundation for the improved V2 implementation.'
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
      'Academic multi-pass compiler for a custom image manipulation language designed by professor.',
      'Implements lexical analysis, parsing, and code generation for pixel operations.'
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
      'Legacy React portfolio website showcasing earlier projects and design experiments.',
      'Focused on learning component architecture and responsive layout techniques.'
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
      'Created comprehensive README documentation for an open-source Asteroids game remake.',
      'Outlined project goals, gameplay mechanics, and technical architecture for contributors.'
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
      'Collaborative team project implementing sandbox save functionality for an educational coding platform.',
      'Coordinated code merges and feature integration across multiple development teams.'
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
      'Front-end clone of YouTube interface practicing responsive layout and grid systems.',
      'Focuses on semantic HTML structure and CSS layout patterns.'
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
      'Initial JavaScript implementation of game recommendation system using React.',
      'Provided baseline architecture and insights for the improved V2 version.'
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
      'Classic rock-paper-scissors game built with vanilla JavaScript for practice.',
      'Completed as a learning exercise following a tutorial.'
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
      'Responsive Amazon interface replication focusing on structure and layout patterns.',
      'Practice project emphasizing CSS grid and flexbox techniques.'
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
      'Calculator application supporting arithmetic operations, square root, and percentage calculations.',
      'Includes input validation and clean user interface design.'
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
      'Interactive color palette exploration and selection tool built with React.',
      'Simple UI for choosing and displaying color values.'
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
      'Digital clock component for practicing React state management and intervals.',
      'Displays current time with automatic updates.'
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
      'Basic task management application with add, edit, and delete functionality.',
      'Practice project for React state handling and CRUD operations.'
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
      'Timing utility application focusing on React component lifecycle and state management.',
      'Features start, stop, and reset functionality.'
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
