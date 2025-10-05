import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col space-y-12">
      <section className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Text first on mobile */}
        <div className="order-1 md:order-1 md:w-1/2 flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-accent">John Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted mb-6">Full Stack Developer</h2>
          <p className="text-lg mb-8 md:mb-8">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly interfaces with modern
            technologies.
          </p>
          {/* Desktop/Tablet buttons directly under paragraph (force side-by-side) */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/contact"
              className="flex-1 min-w-0 px-8 py-4 bg-accent text-white rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Contact Me <ArrowRightIcon size={18} />
            </Link>
            <Link
              to="/projects"
              className="flex-1 min-w-0 px-8 py-4 bg-transparent border border-accent text-accent rounded-md flex items-center justify-center hover:bg-accent hover:bg-opacity-10 transition-colors whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </div>
        {/* Image second on mobile */}
  <div className="order-2 md:order-2 md:w-1/2 flex justify-center mb-6 md:mb-0 md:mt-8 lg:mt-12">
          <div className="w-64 h-64 rounded-full bg-accent bg-opacity-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Mobile buttons below image */}
        <div className="order-3 md:hidden">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex-1 px-8 py-4 bg-accent text-white rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Contact Me <ArrowRightIcon size={18} />
            </Link>
            <Link
              to="/projects"
              className="flex-1 px-8 py-4 bg-transparent border border-accent text-accent rounded-md flex items-center justify-center hover:bg-accent hover:bg-opacity-10 transition-colors whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">About Me</h2>
        <div className="space-y-4">
          <p>
            I'm a passionate software developer with 5+ years of experience building web applications. I specialize
            in JavaScript, TypeScript, React, and Node.js. My approach to development focuses on writing clean,
            maintainable code that delivers exceptional user experiences.
          </p>
          <p>
            When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
            with new technologies. I'm always eager to learn and grow as a developer.
          </p>
          <p>
            I'm currently looking for new opportunities where I can apply my skills and contribute to meaningful
            projects. Feel free to check out my portfolio and get in touch!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
