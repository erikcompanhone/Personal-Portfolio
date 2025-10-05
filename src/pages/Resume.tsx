import React from 'react';
import { DownloadIcon, PrinterIcon } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
            onClick={() => window.print()}
          >
            <PrinterIcon size={18} /> Print
          </button>
          <a
            href="/john-doe-resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-opacity-80 rounded-md transition-colors"
          >
            <DownloadIcon size={18} /> Download PDF
          </a>
        </div>
      </div>

      <div className="bg-primary p-8 rounded-lg shadow-md" id="resume">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted">Full Stack Developer</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <span>john.doe@example.com</span>
            <span>•</span>
            <span>(123) 456-7890</span>
            <span>•</span>
            <span>San Francisco, CA</span>
          </div>
        </div>

        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2 mb-4">Summary</h3>
          <p>
            Full Stack Developer with 5+ years of experience in building responsive and scalable web applications.
            Proficient in JavaScript, TypeScript, React, Node.js, and related technologies. Strong problem-solving skills
            and passion for clean, efficient code.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2 mb-4">Experience</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-semibold">Senior Frontend Developer</h4>
              <span className="text-muted">Jan 2021 - Present</span>
            </div>
            <p className="text-muted">Tech Innovations Inc.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led development of customer portal using React and TypeScript</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 70%</li>
              <li>Developed reusable component library used across multiple projects</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-semibold">Frontend Developer</h4>
              <span className="text-muted">Mar 2019 - Dec 2020</span>
            </div>
            <p className="text-muted">Digital Solutions Ltd.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed responsive web applications using React and Redux</li>
              <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
              <li>Optimized application performance, improving load times by 35%</li>
              <li>Integrated RESTful APIs and implemented state management solutions</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Junior Web Developer</h4>
              <span className="text-muted">Jun 2017 - Feb 2019</span>
            </div>
            <p className="text-muted">Creative Agency</p>
            <ul className="list-disc list-inside mt-2">
              <li>Built and maintained client websites using HTML, CSS, and JavaScript</li>
              <li>Converted design mockups into functional web pages</li>
              <li>Implemented responsive designs for mobile and desktop platforms</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2 mb-4">Education</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-semibold">Master of Computer Science</h4>
              <span className="text-muted">2015 - 2017</span>
            </div>
            <p className="text-muted">Stanford University</p>
            <p>Specialized in Human-Computer Interaction and Software Engineering</p>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
              <span className="text-muted">2011 - 2015</span>
            </div>
            <p className="text-muted">University of Washington</p>
            <p>Minor in Mathematics, Dean's List: 7 semesters</p>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2 mb-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <p>HTML5, CSS3, JavaScript, TypeScript, React, Redux, Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <p>Node.js, Express, MongoDB, PostgreSQL, GraphQL, REST API</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools</h4>
              <p>Git, Docker, AWS, CI/CD, Jest, Webpack</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Soft Skills</h4>
              <p>Team Leadership, Problem Solving, Communication, Mentoring</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold border-b border-secondary pb-2 mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
              <p className="text-muted">Amazon Web Services, 2022</p>
            </div>
            <div>
              <h4 className="font-semibold">Professional Scrum Master I</h4>
              <p className="text-muted">Scrum.org, 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
