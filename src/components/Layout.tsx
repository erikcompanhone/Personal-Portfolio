import React, { useState } from 'react';
import Navbar from './Navbar';
import { MenuIcon, XIcon } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <div className="min-h-screen bg-background text-text">
      {/* Mobile Menu Button */}
      <button className="fixed top-4 right-4 z-50 p-2 bg-secondary rounded-md md:hidden" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-40 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col h-full pt-16 px-6">
          <Navbar isMobile={true} closeMenu={() => setMobileMenuOpen(false)} />
        </div>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:fixed md:inset-y-0 md:left-0 md:w-64 md:bg-primary md:border-r md:border-secondary">
        <div className="flex flex-col h-full py-8 px-6">
          <Navbar isMobile={false} closeMenu={() => {}} />
        </div>
      </div>
      {/* Main Content */}
      <main className="md:ml-64 min-h-screen pb-8">
        <div className="container mx-auto px-4 py-6 md:py-12">{children}</div>
      </main>
    </div>;
};
export default Layout;
