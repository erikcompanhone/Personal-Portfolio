import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MenuIcon, XIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);
  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);
  return <div className="min-h-screen bg-background text-text">
      {/* Mobile Menu Button */}
      <button className="fixed top-4 right-4 z-50 p-2 bg-secondary rounded-md md:hidden" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-40 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden overflow-hidden`}>
        <div className="flex flex-col h-full pt-16 px-6 overflow-y-auto overscroll-contain">
          <Navbar isMobile={true} closeMenu={() => setMobileMenuOpen(false)} />
        </div>
      </div>
      {/* Desktop / Tablet Sidebar (collapsible from md upward) */}
      <div className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 bg-primary border-r border-secondary transition-all duration-300 ${sidebarCollapsed ? 'md:w-20' : 'md:w-64'}`}>
        <div className="flex-1 overflow-y-auto py-8 px-4">
          <Navbar isMobile={false} closeMenu={() => undefined} collapsed={sidebarCollapsed} />
        </div>
        {/* Collapse toggle button visible on md+ */}
        <button
          onClick={toggleSidebar}
          className="m-2 mb-4 h-10 rounded-md bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted transition-colors"
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronsRightIcon size={20} /> : <ChevronsLeftIcon size={20} />}
        </button>
      </div>
      {/* Main Content */}
      <main className={`min-h-screen pb-8 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        {/* Add extra top padding on mobile to avoid overlap with fixed hamburger button */}
        <div className="container mx-auto px-4 pt-20 md:pt-12">{children}</div>
      </main>
    </div>;
};
export default Layout;
