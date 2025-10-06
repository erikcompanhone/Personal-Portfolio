import React, { useRef } from 'react';
import { PrinterIcon } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Erik_Almeida_Resume',
    removeAfterPrint: true,
    pageStyle: `@page { margin: 10mm; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }`
  });

  return (
  <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
      <div className="flex justify-between items-center mb-2 print:mb-2">
        <h1 className="text-3xl font-bold">Resume</h1>
        <button
          type="button"
          onClick={handlePrint}
          aria-label="Print or save resume as PDF"
          className="px-4 py-2 rounded-md bg-accent text-white text-sm font-medium flex items-center gap-2 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/60 print:hidden"
        >
          <PrinterIcon size={18} /> Print / PDF
        </button>
      </div>
      <div className="text-xs text-muted mb-4 print:mb-2 italic print:text-black">Updated Oct 2025</div>
  <div className="md:hidden mb-4 print:hidden" />

      {/* Print styles (scoped) */}
      <style>{`@media print { 
        body { background: #ffffff !important; color:#000 !important; }
        #resume { box-shadow: none !important; background: #ffffff !important; color:#000 !important; }
        #resume h1, #resume h2, #resume h3, #resume h4 { color:#000 !important; }
        #resume .text-muted, #resume .text-text { color:#000 !important; }
        nav, header, footer, .print:hidden, .print\\:hidden { display:none !important; }
  /* Contact lines (allow two-line layout in print) */
  #resume .contact-line { flex-wrap:wrap !important; white-space:normal !important; gap:0.4rem 0.75rem !important; justify-content:center !important; }
        /* Remove any url duplication */
        #resume a[href]::after { content: "" !important; }
        /* Tighten spacing to favor single page */
        #resume { padding:1.5rem !important; }
        #resume h2 { margin-bottom:0.35rem !important; }
        #resume h3 { margin-top:0.55rem !important; margin-bottom:0.25rem !important; }
        #resume h4 { margin-bottom:0.15rem !important; }
        #resume .space-y-8 > * + * { margin-top:0.75rem !important; }
        #resume .space-y-6 > * + * { margin-top:0.55rem !important; }
        #resume .space-y-4 > * + * { margin-top:0.4rem !important; }
        #resume ul { margin-top:0.15rem !important; }
        #resume li { margin-top:0.12rem !important; }
        #resume p { margin-top:0.25rem !important; margin-bottom:0 !important; }
        /* Condense specific sections */
        #resume section.print-condense { font-size:0.9rem; }
        #resume section#print-skills h4 { font-size:0.68rem !important; margin-bottom:0.1rem !important; }
        #resume section#print-skills p { font-size:0.63rem !important; line-height:1.05rem !important; }
        #resume section#print-skills .grid { gap:0.65rem !important; }
        #resume section#print-experience ul li, #resume section#print-education ul li { font-size:0.63rem !important; line-height:0.95rem !important; }
        #resume section#print-experience h4, #resume section#print-education h4 { font-size:0.72rem !important; }
        #resume section#print-experience span.whitespace-nowrap, #resume section#print-education span.whitespace-nowrap { font-size:0.6rem !important; }
        #resume section#print-experience p.text-muted, #resume section#print-education p.text-muted { font-size:0.6rem !important; }
  #resume section#print-summary p { font-size:0.63rem !important; line-height:0.95rem !important; }
  #resume section#print-summary span.font-medium, #resume section#print-summary span.text-text { font-weight:700 !important; }
        /* Prevent page breaks inside key sections */
        #resume section, #resume ul, #resume li { page-break-inside: avoid; break-inside: avoid; }
        /* Scale down slightly if content barely overflows */
        @page { size: A4; margin:10mm; }
        /* If still too long, developer can further shrink font-size globally: */
      }`}</style>

  <div ref={resumeRef} className="bg-primary p-8 rounded-lg shadow-md space-y-8 print:space-y-6 overflow-x-hidden break-words" id="resume">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Erik Companhone Andrade de Almeida</h2>
          {/* On-screen contact line (can wrap) */}
          <p className="text-sm text-muted flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-2 flex-wrap print:hidden">
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
          {/* Print contact lines (two-line layout) */}
          <div className="hidden print:flex flex-col items-center text-black text-xs font-medium leading-snug contact-line max-w-full">
            <p className="flex flex-wrap justify-center gap-2">
              <span>e.comp2712@gmail.com</span>
              <span>|</span>
              <span>786-491-3542</span>
              <span>|</span>
              <span>https://www.linkedin.com/in/erik-companhone/</span>
            </p>
            <p className="flex flex-wrap justify-center gap-2">
              <span>https://github.com/erikcompanhone</span>
              <span>|</span>
              <span>https://erikcompanhone.com</span>
            </p>
          </div>
        </div>

        {/* Summary */}
        <section id="print-summary" className="space-y-3 print-condense" aria-labelledby="summary-heading">
          <h3 id="summary-heading" className="text-xl font-semibold border-b border-secondary pb-2">Summary</h3>
          <p className="text-sm leading-relaxed text-muted print:text-black print:leading-snug print:text-[0.63rem] print:[line-height:0.95rem]">
            <span className="font-medium text-white print:text-black">Full-stack / mobile engineer</span> focused on <span className="text-text print:text-black">AI-assisted, music-based emotional wellness experiences.</span> Blend of academic research (engine migration & systems refactor) and production delivery (React / React Native + Supabase + Vercel). <span className="text-white font-medium print:text-black print:font-bold">Trilingual</span> (English / Portuguese / Spanish) with a track record of progressive responsibility in collaborative, iterative teams.
          </p>
        </section>

  <section id="print-skills" className="space-y-4 print-condense" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="text-xl font-semibold border-b border-secondary pb-2">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 text-sm">
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

  <section id="print-experience" className="space-y-4 print-condense" aria-labelledby="experience-heading">
          <h3 className="text-xl font-semibold border-b border-secondary pb-2">Experience</h3>
          <div>
            <div className="flex justify-between items-start gap-4 print:gap-2">
              <h4 className="font-semibold flex-1">MyWayv - Full-Stack Developer</h4>
              <span className="text-muted whitespace-nowrap text-right print:text-[0.6rem]">05/2025 – Present</span>
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
            <div className="flex justify-between items-start gap-4 print:gap-2">
              <h4 className="font-semibold flex-1">MineTest Project - Undergraduate Research / Senior Project</h4>
              <span className="text-muted whitespace-nowrap text-right print:text-[0.6rem]">01/2023 – 05/2024</span>
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

  <section id="print-education" className="space-y-4 print-condense" aria-labelledby="education-heading">
          <h3 id="education-heading" className="text-xl font-semibold border-b border-secondary pb-2">Education</h3>
          <div>
            <div className="flex justify-between items-start gap-4 print:gap-2">
              <h4 className="font-semibold flex-1">Bachelor's in Science in Computer Science (GPA: 3.58 / 4.0)</h4>
              <span className="text-muted whitespace-nowrap text-right print:text-[0.6rem]">Graduation: 05/2024</span>
            </div>
            <p className="text-muted">University of Florida – Gainesville, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Clubs & Organizations: Member of the PC Building Society club (2023/2024).</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start gap-4 print:gap-2">
              <h4 className="font-semibold flex-1">Associate in Arts in Computer Science (GPA: 3.8 / 4.0)</h4>
              <span className="text-muted whitespace-nowrap text-right print:text-[0.6rem]">Graduation: 05/2022</span>
            </div>
            <p className="text-muted">The Honors College / Miami Dade College - Wolfson Campus - Miami, FL.</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Clubs & Organizations: Member of the Robotics Club (2020-2021); mentee (2020-2021) and mentor (2021-2022) in Wolves in Training (WIT).</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start gap-4 print:gap-2">
              <h4 className="font-semibold flex-1">Volunteering</h4>
              <span className="text-muted whitespace-nowrap text-right print:text-[0.6rem]">08/2020 – 05/2022</span>
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
