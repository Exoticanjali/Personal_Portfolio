import React, { useState, useEffect } from 'react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#projects',
    label: 'Projects'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-gradient">@exoticanjali.</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-gray-300 hover:text-neon-blue transition-colors duration-300 px-3 py-2 text-sm font-medium relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </a>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              <i className={`ph ${isOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden absolute top-16 left-0 right-0 glass-card border-t border-white/10 mx-4 rounded-xl">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block text-gray-300 hover:text-neon-blue transition-colors duration-300 py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>)}
          </div>
        </div>}
    </nav>;
};
export default Navigation;