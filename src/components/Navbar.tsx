import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BriefcaseIcon, CodeIcon, BookOpenIcon, GraduationCapIcon, FileTextIcon, MailIcon, UserIcon } from 'lucide-react';
interface NavbarProps {
  isMobile: boolean;
  closeMenu: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  isMobile,
  closeMenu
}) => {
  const location = useLocation();
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
  return <nav className="flex flex-col space-y-1 w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Erik Companhone</h1>
        <p className="text-muted">Software Developer</p>
      </div>
      {navItems.map(item => <Link key={item.path} to={item.path} className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200 ${location.pathname === item.path ? 'bg-accent text-white' : 'hover:bg-secondary'}`} onClick={isMobile ? closeMenu : undefined}>
          <span className="mr-3">{item.icon}</span>
          {item.label}
        </Link>)}
      <div className="mt-auto pt-8">
  <div className="flex space-x-10 sm:space-x-8 justify-center">
          <a href="https://github.com/erikalmeidah" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text" aria-label="Erik Companhone on GitHub">
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
        </div>
      </div>
    </nav>;
};
export default Navbar;
