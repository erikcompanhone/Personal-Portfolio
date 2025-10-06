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
            Hi, I'm <span className="text-accent">Erik Companhone</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted mb-6">Software Developer</h2>
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
          <div className="w-64 h-64 rounded-full bg-accent/10 overflow-hidden ring-2 ring-accent/30">
            <img
              src="/assets/headshot/headshot.png"
              alt="Headshot of Erik Companhone"
              className="w-full h-full object-cover select-none"
              decoding="async"
              loading="lazy"
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
          <p className="text-xl font-semibold">Erik Companhone</p>
          <p>
            A <span className="font-semibold">software engineer</span> with a deep love for technology and coding. I recently graduated from the
            <span className="font-semibold"> University of Florida</span> with a degree in <span className="font-semibold">Computer Science</span>, where I maintained a
            <span className="font-semibold"> 3.58 GPA</span>. As a <span className="font-semibold">first-generation student</span>, completing my education was a huge milestone,
            and it's fueled my drive to dive into the tech world and make an impact.
          </p>
          <p>
            During my studies, I worked on numerous projects that gave me <span className="font-semibold">hands-on experience</span> with various
            <span className="font-semibold"> programming languages, frameworks, and technologies</span>. Learning new tools and solving complex
            problems energizes me, and I'm excited to bring this passion to my professional career.
          </p>
          <p>
            This portfolio showcases some of the <span className="font-semibold">key projects</span> I've worked on, highlighting the
            <span className="font-semibold"> skills</span> I've developed along my education. I'm always eager to <span className="font-semibold">expand my knowledge</span>,
            whether it's by diving deeper into familiar technologies or exploring new ones.
          </p>
          <p>
            I'm currently working as a <span className="font-semibold">full-stack junior developer</span> contributing and learning from others at
            <span className="font-semibold"> MyWayv</span>. If you're interested in collaborating or have any opportunities,
            feel free to reach out—I'd love to connect!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
