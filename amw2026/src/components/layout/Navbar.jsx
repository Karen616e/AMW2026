import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Efecto para cambiar el estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about'},
    { name: 'Topics', href: '#call-for-papers' },
    { name: 'Submission', href: '#submission' },
    { name: 'Reviewing Process', href: '#ReviewingProcess' },
    { name: 'Dates', href: '#dates' },
    { name: 'Contact', href: '#contact'},
    { name: 'Registration', href: '#registration' },
    { name: 'Organization', href: '#organization' },
    { name: 'Grants', href: '#grants' },
    { name: 'Venue', href: '#venue' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-2">
            <img src="/Logo_RedAcaMexDeCiber(sinfondo).png" 
              alt="MCyRA logo"
              className="h-15 w-15" // Tamaño del logo
            />
            <div className={`font-bold text-2xl transition-colors duration-300 ${
              scrolled ? 'text-blue-700' : 'text-white'
            }`}>
              MCyRA <span className={scrolled ? 'text-slate-400' : 'text-blue-200'}>2026</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-500 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${scrolled ? 'text-slate-600' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;