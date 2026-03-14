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
    { name: 'Call for Papers', path: '/cfp' },
    { name: 'Committee', path: '/committee' },
    { name: 'Attendance', path: '/attend' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isSolid 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-transparent dark:border-slate-800 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y Nombre - Subimos a text-2xl/3xl */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/Logo 1.jpeg" 
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
            {/* Desktop Menu - Tamaño aumentado a text-xl */}
            <div className="hidden lg:flex space-x-12">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`text-xl transition-all duration-300 relative group ${
                      isActive 
                        ? (isSolid ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-white font-extrabold')
                        : (isSolid 
                            ? 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-bold' 
                            : 'text-white/90 hover:text-white font-bold')
                    }`}
                  >
                    {item.name}
                    {/* Línea indicadora más gruesa (h-1) */}
                    {isActive && (
                      <span className={`absolute -bottom-2 left-0 w-full h-1 rounded-full ${
                        isSolid ? 'bg-blue-600 dark:bg-blue-400' : 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      }`}></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Botón de Modo Oscuro - Más grande */}
            <button 
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all hover:scale-110 active:scale-90 shadow-sm ${
                isSolid 
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Dark Mode"
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

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-lg transition-colors ${
                  isSolid 
                    ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Texto aún más grande para pulgares */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b-4 border-blue-600 dark:border-blue-500 animate-fade-in-down shadow-2xl">
          <div className="px-6 pt-4 pb-10 space-y-4">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-5 text-2xl font-black rounded-2xl transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none' 
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;