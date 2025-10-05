import React from 'react';
import { BookIcon, HeartIcon, MusicIcon, GlobeIcon, UsersIcon } from 'lucide-react';

const Personal: React.FC = () => {
  const hobbies = [
    {
      name: 'Reading',
      description: 'Science fiction, fantasy, and technical books',
      icon: <BookIcon size={24} className="text-accent" />
    },
    {
      name: 'Music',
      description: (
        <span>
          Playing guitar, collecting vinyl, and sharing covers on{' '}
          <a
            href="https://www.youtube.com/@EAlmeida2712"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            YouTube
          </a>
        </span>
      ),
      icon: <MusicIcon size={24} className="text-accent" />
    },
    {
      name: 'DnD Campaign Design & Gaming',
      description: 'Worldbuilding, narrative design, and strategy across tabletop RPGs & systems-driven video games',
      icon: <GlobeIcon size={24} className="text-accent" />
    },
    {
      name: 'Skateboarding',
      description: 'Practicing balance, persistence, and progression outdoors',
      icon: <GlobeIcon size={24} className="text-accent" />
    },
    
  ];

  const volunteering = [
    {
      organization: 'Bezerra de Menezes Community Center',
      role: 'Volunteer',
      period: '2020 – 2022',
      bullets: [
        'Led and contributed to three service-learning food pantry projects improving distribution flow and organization.',
        'Coordinated small volunteer groups to divide tasks (intake, sorting, packing) and reduce bottlenecks.',
        'Developed communication, reliability, and community-focused problem solving through consistent participation.'
      ]
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Personal</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2 flex items-center">
          <HeartIcon size={24} className="mr-2 text-accent" /> Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-primary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {hobby.icon}
                <h3 className="text-xl font-semibold ml-3">{hobby.name}</h3>
              </div>
              <p className="text-muted">{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2 flex items-center">
          <UsersIcon size={24} className="mr-2 text-accent" /> Volunteering
        </h2>
        <div className="space-y-6">
          {volunteering.map((item, index) => (
            <div key={index} className="bg-primary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.organization}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted mb-4">
                <span className="font-medium">{item.role}</span>
                <span className="hidden sm:block">•</span>
                <span>{item.period}</span>
              </div>
              {item.bullets && (
                <ul className="list-disc list-inside space-y-1 text-muted text-sm">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Personal;
