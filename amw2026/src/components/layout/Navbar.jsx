import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Calls', 
      path: '#',
      dropdown: [
        { name: 'Call for Papers', path: '/cfp' },
        { name: 'Call for Tutorials', path: '/tutorials' },
        { name: 'Student Consortium', path: '#', tba: true }
      ]
    },
    { name: 'Committee', path: '/committee' },
    { name: 'Attendance', path: '/attend' },
    { name: 'Venue', path: '/venue' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isSolid 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-transparent dark:border-slate-800 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="flex items-center gap-3 group">
            <img src="Logo 1.jpeg" 
              alt="MCyRA logo"
              className="rounded-full h-14 w-14 md:h-16 md:w-16 object-cover border-2 border-transparent group-hover:border-blue-500 transition-all shadow-sm" 
            />
            <div className={`font-black text-2xl md:text-3xl transition-colors duration-300 tracking-tighter ${
              isSolid ? 'text-blue-700 dark:text-blue-400' : 'text-white'
            }`}>
              MCyRA <span className={isSolid ? 'text-slate-500 dark:text-slate-400' : 'text-blue-200'}>2026</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 md:gap-10">
            <div className="hidden lg:flex space-x-12 items-center">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path || 
                               (item.dropdown && item.dropdown.some(d => location.pathname === d.path && !d.tba));
                
                return (
                  <div key={item.name} className="relative group">
                    <Link 
                      to={item.path}
                      className={`flex items-center gap-1 text-xl transition-all duration-300 relative py-2 ${
                        isActive 
                          ? (isSolid ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-white font-extrabold')
                          : (isSolid 
                              ? 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-bold' 
                              : 'text-white/90 hover:text-white font-bold')
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <svg className="w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      )}
                    </Link>

                    {item.dropdown && (
                      <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 animate-fade-in-down">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col py-2">
                          {item.dropdown.map((dropItem) => (
                            dropItem.tba ? (
                              <div key={dropItem.name} className="px-6 py-3 flex items-center justify-between text-base font-bold text-slate-400 dark:text-slate-500 cursor-not-allowed select-none">
                                <span>{dropItem.name}</span>
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-widest">TBA</span>
                              </div>
                            ) : (
                              <Link
                                key={dropItem.name}
                                to={dropItem.path}
                                className="px-6 py-3 text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 dark:hover:text-blue-400 transition-colors"
                              >
                                {dropItem.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button 
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all hover:scale-110 active:scale-90 shadow-sm ${
                isSolid 
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {theme === 'dark' ? (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;