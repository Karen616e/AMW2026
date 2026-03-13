import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // --- Lógica de Modo Oscuro Robusta ---
  const [theme, setTheme] = useState(() => {
    // Al cargar, verifica primero el localStorage
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

  // --- Lógica de Navegación y Scroll ---
  const location = useLocation();
  const isHome = location.pathname === '/';
  // El navbar se vuelve sólido si hacemos scroll > 50px o si no estamos en la Home
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
    { name: 'Attend', path: '/attend' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isSolid 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-transparent dark:border-slate-800 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y Nombre */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/Logo 1.jpeg" 
              alt="MCyRA logo"
              className="rounded-full h-12 w-12 md:h-14 md:w-14 object-cover border-2 border-transparent group-hover:border-blue-500 transition-all" 
            />
            <div className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
              isSolid ? 'text-blue-700 dark:text-blue-400' : 'text-white'
            }`}>
              MCyRA <span className={isSolid ? 'text-slate-500 dark:text-slate-400' : 'text-blue-200'}>2026</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`text-sm font-semibold transition-colors ${
                    isSolid 
                      ? 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400' 
                      : 'text-white/90 hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Botón de Modo Oscuro */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all hover:scale-110 active:scale-90 ${
                isSolid 
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                /* Icono Sol */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Icono Luna */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-md transition-colors ${
                  isSolid 
                    ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-fade-in-down shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;