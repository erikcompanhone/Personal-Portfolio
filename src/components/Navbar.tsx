import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BriefcaseIcon, CodeIcon, BookOpenIcon, GraduationCapIcon, FileTextIcon, MailIcon, UserIcon, PawPrint } from 'lucide-react';
import DogModal from './DogModal';
interface NavbarProps {
  isMobile: boolean;
  closeMenu: () => void;
  collapsed?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isMobile, closeMenu, collapsed = false }) => {
  const location = useLocation();
  // Separate animation controls for brand and nav labels
  const [showLabels, setShowLabels] = useState(!collapsed);
  const [brandMounted, setBrandMounted] = useState(!collapsed); // whether brand JSX is rendered
  const [brandVisible, setBrandVisible] = useState(!collapsed); // opacity/transform state
  useEffect(() => {
    let labelTimer: number | undefined;
    let mountTimer: number | undefined;
    let visibleTimer: number | undefined;
    if (!collapsed) {
      // Step 1: mount brand only after sidebar width finishes (~300ms)
      mountTimer = window.setTimeout(() => {
        setBrandMounted(true);
        // Step 2: trigger visibility in next frame for pure rightward entrance
        visibleTimer = window.setTimeout(() => setBrandVisible(true), 16);
      }, 300);
      // Labels appear after brand becomes visible
      labelTimer = window.setTimeout(() => setShowLabels(true), 430);
    } else {
      // collapse: hide immediately, unmount after transition to avoid flicker
      setBrandVisible(false);
      setShowLabels(false);
      // unmount brand shortly after (match duration 300ms) so remount is clean next expand
      mountTimer = window.setTimeout(() => setBrandMounted(false), 300);
    }
    return () => {
      if (labelTimer) window.clearTimeout(labelTimer);
      if (mountTimer) window.clearTimeout(mountTimer);
      if (visibleTimer) window.clearTimeout(visibleTimer);
    };
  }, [collapsed]);
  const navItems = [{
    path: '/',
    label: 'About Me',
    icon: <HomeIcon size={20} />
  }, {
    path: '/projects',
    label: 'Projects',
    icon: <CodeIcon size={20} />
  }, {
    path: '/skills',
    label: 'Skills',
    icon: <BookOpenIcon size={20} />
  }, {
    path: '/experience',
    label: 'Experience',
    icon: <BriefcaseIcon size={20} />
  }, {
    path: '/education',
    label: 'Education',
    icon: <GraduationCapIcon size={20} />
  }, {
    path: '/personal',
    label: 'Personal',
    icon: <UserIcon size={20} />
  }, {
    path: '/resume',
    label: 'Resume',
    icon: <FileTextIcon size={20} />
  }, {
    path: '/contact',
    label: 'Contact',
    icon: <MailIcon size={20} />
  }];
  const [showDog, setShowDog] = useState(false);
  // Removed full overflow-hidden (causing circular button ring to clip) and added bottom padding.
  return <nav className={`flex flex-col space-y-1 w-full ${collapsed ? 'items-center' : ''} overflow-x-hidden pb-4`}>
      {/* Brand area with reserved height to prevent layout shift */}
      <div className="mb-6 h-20 flex items-center w-full">
        {collapsed ? (
          <div className="w-full flex justify-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl select-none shadow-sm">
              E
            </div>
          </div>
        ) : brandMounted ? (
          <div className={`flex flex-col transition-all duration-300 ease-out transform-gpu origin-left ${brandVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}>
            <h1 className="text-2xl font-bold leading-tight">Erik Companhone</h1>
            <p className="text-muted text-sm">Software Developer</p>
          </div>
        ) : null}
      </div>
      {navItems.map((item, idx) => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`group flex items-center rounded-md transition-colors duration-200 w-full relative ${active ? 'bg-accent text-white' : 'hover:bg-secondary'} ${collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'} overflow-hidden`}
            onClick={isMobile ? closeMenu : undefined}
            title={collapsed ? item.label : undefined}
          >
            <span className={`${collapsed ? '' : 'mr-3'} transition-transform duration-300 transform-gpu flex-shrink-0 ${!showLabels && !collapsed ? 'translate-x-1' : 'translate-x-0'}`}>{item.icon}</span>
            <span
              className={`whitespace-nowrap transform-gpu transition-[opacity,transform] duration-300 ease-out ${showLabels && !collapsed ? 'opacity-100 translate-x-0 relative' : 'opacity-0 -translate-x-2 pointer-events-none absolute'} `}
              style={{ transitionDelay: showLabels ? `${50 * idx}ms` : '0ms' }}
            >
              {!collapsed ? item.label : ''}
            </span>
          </Link>
        );
      })}
      <div className={`mt-auto pt-8 ${collapsed ? 'w-full flex justify-center' : ''}`}>
  <div className={`flex ${collapsed ? 'flex-col space-y-4' : 'space-x-10 sm:space-x-8'} justify-center items-center`}>
          <a href="https://github.com/erikcompanhone" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text" aria-label="Erik Companhone on GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/erik-companhone/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text" aria-label="Erik Companhone on LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setShowDog(true)}
            aria-label="Meet Mel"
            title="Meet Mel"
            className="p-2 rounded-full text-accent hover:bg-accent/15 ring-1 ring-accent/40 hover:ring-accent/70 transition-colors"
          >
            <PawPrint size={20} />
          </button>
        </div>
      </div>
      <DogModal open={showDog} onClose={() => setShowDog(false)} />
    </nav>;
};
export default Navbar;
