import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-primary py-6 text-center text-muted md:ml-64">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
      </div>
    </footer>;
};
export default Footer;
