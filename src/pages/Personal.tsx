import React from 'react';
import { BookIcon, HeartIcon, MusicIcon, CameraIcon, GlobeIcon, UsersIcon } from 'lucide-react';

const Personal: React.FC = () => {
  const hobbies = [
    {
      name: 'Reading',
      description: 'Science fiction, fantasy, and technical books',
      icon: <BookIcon size={24} className="text-accent" />
    },
    {
      name: 'Hiking',
      description: 'Exploring nature trails and mountains',
      icon: <GlobeIcon size={24} className="text-accent" />
    },
    {
      name: 'Photography',
      description: 'Landscape and street photography',
      icon: <CameraIcon size={24} className="text-accent" />
    },
    {
      name: 'Music',
      description: 'Playing guitar and attending concerts',
      icon: <MusicIcon size={24} className="text-accent" />
    }
  ];

  const volunteering = [
    {
      organization: 'Code for Good',
      role: 'Volunteer Developer',
      period: '2020 - Present',
      description:
        'Developing websites and applications for non-profit organizations that focus on environmental conservation.'
    },
    {
      organization: 'Tech Mentors',
      role: 'Mentor',
      period: '2019 - Present',
      description:
        'Mentoring underprivileged students interested in pursuing careers in technology.'
    },
    {
      organization: 'Local Food Bank',
      role: 'Volunteer',
      period: '2018 - 2020',
      description:
        'Assisted with food distribution and organization of donations.'
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
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Personal;
