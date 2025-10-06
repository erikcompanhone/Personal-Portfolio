import React, { useRef } from 'react';
import { DownloadIcon, PrinterIcon } from 'lucide-react';

const Resume: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handlePrint = () => {
    const existing = iframeRef.current;
    if (existing) {
      existing.contentWindow?.focus();
      existing.contentWindow?.print();
      return;
    }
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
  iframe.src = '/assets/resume/resume.pdf';
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      }, 50);
    };
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
  };

  return (
  <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
      <div className="flex justify-between items-center mb-2 print:mb-2">
        <h1 className="text-3xl font-bold">Resume</h1>
        {/* Desktop / tablet buttons */}
        <div className="hidden md:flex gap-4 flex-wrap">
          <button
            aria-label="Print resume PDF"
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors print:hidden"
            onClick={handlePrint}
          >
            <PrinterIcon size={18} /> Print
          </button>
          <a
            href="/assets/resume/resume.pdf"
            download
            aria-label="Download resume PDF"
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-opacity-80 rounded-md transition-colors print:hidden"
          >
            <DownloadIcon size={18} /> Download PDF
          </a>
        </div>
      </div>
      <div className="text-xs text-muted mb-4 print:mb-2 italic print:text-black">Updated Oct 2025</div>
      {/* Mobile buttons below update text */}
      <div className="flex md:hidden gap-3 mb-6 print:hidden">
        <button
          aria-label="Print resume PDF"
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
          onClick={handlePrint}
        >
          <PrinterIcon size={18} /> Print
        </button>
        <a
          href="/assets/resume/resume.pdf"
          download
          aria-label="Download resume PDF"
          className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-opacity-80 rounded-md transition-colors"
        >
          <DownloadIcon size={18} /> Download PDF
        </a>
      </div>

      {/* Print styles (scoped) */}
      <style>{`@media print { 
        body { background: #ffffff !important; }
        #resume { box-shadow: none !important; background: #ffffff !important; }
        nav, header, footer { display:none !important; }
        /* Attempt to keep to one page by tightening spacing */
        #resume h3 { margin-top: 0.75rem; }
        #resume .space-y-4 > * + * { margin-top:0.65rem !important; }
        #resume .space-y-8 > * + * { margin-top:1.1rem !important; }
        #resume ul { margin-top:0.3rem !important; }
      }`}</style>

  <div className="bg-primary p-8 rounded-lg shadow-md space-y-8 print:space-y-6 overflow-x-hidden break-words" id="resume">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Erik Companhone Andrade de Almeida</h2>
          <p className="text-sm text-muted flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-2 flex-wrap">
            <span>e.comp2712@gmail.com</span>
            <span className="hidden md:inline">|</span>
            <span>786-491-3542</span>
            <span className="hidden md:inline">|</span>
            <span><a className="hover:underline" href="https://www.linkedin.com/in/erik-companhone/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span className="hidden md:inline">|</span>
            <span><a className="hover:underline" href="https://github.com/erikcompanhone" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            <span className="hidden md:inline">|</span>
            <span><a className="hover:underline" href="https://erikcompanhone.com" target="_blank" rel="noopener noreferrer">erikcompanhone.com</a></span>
          </p>
        </div>

        {/* Summary */}
        <section className="space-y-3" aria-labelledby="summary-heading">
          <h3 id="summary-heading" className="text-xl font-semibold border-b border-secondary pb-2">Summary</h3>
          <p className="text-sm leading-relaxed text-muted">
            <span className="text-white font-medium">Full-stack / mobile engineer</span> focused on <span className="text-text">AI‑assisted, music-based emotional wellness experiences</span>. Blend of
            academic research (engine migration & systems refactor) and production delivery (React / React Native + Supabase + Vercel).
            Trilingual (English / Portuguese / Spanish) with a track record of progressive responsibility in collaborative, iterative teams.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="text-xl font-semibold border-b border-secondary pb-2">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Programming</h4>
              <p className="text-muted leading-snug">C++, Python, JavaScript, TypeScript, Java, Lua, SQL, C#</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Frontend / Mobile</h4>
              <p className="text-muted leading-snug">React, React Native, Tailwind CSS, HTML, CSS</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Backend / APIs</h4>
              <p className="text-muted leading-snug">Node.js, Express, RESTful APIs, Supabase</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Platform / DevOps</h4>
              <p className="text-muted leading-snug">Vercel, Docker, Git</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Other / Domain</h4>
              <p className="text-muted leading-snug">Unity, Web3, MATLAB, Android Studio</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Soft Skills</h4>
              <p className="text-muted leading-snug">Leadership, Cross-team Collaboration, Multilingual (EN/PT/ES)</p>
            </div>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="experience-heading">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2">Experience</h3>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="font-semibold">MyWayv - Full-Stack Developer</h4>
              <span className="text-muted md:ml-4 whitespace-nowrap">05/2025 – Present</span>
            </div>
            <p className="text-muted">Boca Raton, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Building an AI-driven, music-based emotional wellness platform delivering personalized user experiences.</li>
              <li>Developing reusable TypeScript / React Native interface components with attention to performance & accessibility.</li>
              <li>Accelerating iteration cycles via Vercel preview environments and close product/design collaboration.</li>
              <li>Integrating Supabase-backed APIs and refining data flows for secure, low-latency session interactions.</li>
              <li className="italic text-muted">Tech: TypeScript, React Native, Supabase, Vercel.</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="font-semibold">MineTest Project - Undergraduate Research / Senior Project</h4>
              <span className="text-muted md:ml-4 whitespace-nowrap">01/2023 – 05/2024</span>
            </div>
            <p className="text-muted">University of Florida - Gainesville, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Progressed from junior contributor to team lead over 3 semesters driving Lua → C++ engine migration.</li>
              <li>Coordinated sprint-style meetings to surface blockers and maintain delivery momentum.</li>
              <li>Owned repository governance: code review standards, merge strategy, and branch hygiene.</li>
              <li>Directed senior project planning and task allocation to align technical scope with academic milestones.</li>
              <li className="italic text-muted">Tech: C++, Lua, Git, Engine Tooling.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="education-heading">
          <h3 id="education-heading" className="text-xl font-semibold border-b border-secondary pb-2">Education</h3>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="font-semibold">Bachelor's in Science in Computer Science (GPA: 3.58 / 4.0)</h4>
              <span className="text-muted md:ml-4 whitespace-nowrap">Graduation: 05/2024</span>
            </div>
            <p className="text-muted">University of Florida – Gainesville, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Clubs & Organizations: Member of the PC Building Society club (2023/2024).</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="font-semibold">Associate in Arts in Computer Science (GPA: 3.8 / 4.0)</h4>
              <span className="text-muted md:ml-4 whitespace-nowrap">Graduation: 05/2022</span>
            </div>
            <p className="text-muted">The Honors College / Miami Dade College - Wolfson Campus - Miami, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Clubs & Organizations: Member of the Robotics Club (2020-2021); mentee (2020-2021) and mentor (2021-2022) in Wolves in Training (WIT).</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <h4 className="font-semibold">Volunteering</h4>
              <span className="text-muted md:ml-4 whitespace-nowrap">08/2020 – 05/2022</span>
            </div>
            <p className="text-muted">Bezerra de Menezes Community Center – Doral, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Led and contributed to three food pantry service-learning projects—improving distribution flow while strengthening leadership & community engagement.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
