import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Verificamos si estamos en la página de inicio
  const isHome = location.pathname === '/';
  
  // Si no estamos en el Home, forzamos el estilo "scrolled" para que el texto sea oscuro 
  // y no se pierda contra los fondos claros de las otras vistas.
  const isSolid = scrolled || !isHome;

  // Efecto para cambiar el estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Actualizamos el menú para que apunte a las nuevas rutas
  const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Call for Papers', path: '/cfp' }, // o '/authors'
  { name: 'Committee', path: '/committee' },
  { name: 'Attendance', path: '/attend' } // 
];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isSolid ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/Logo 1.jpeg" 
              alt="MCyRA logo"
              className="rounded-full h-15 w-15 object-cover" // Añadí object-cover por si acaso
            />
            <div className={`font-bold text-2xl transition-colors duration-300 ${
              isSolid ? 'text-blue-700' : 'text-white'
            }`}>
              MCyRA <span className={isSolid ? 'text-slate-400' : 'text-blue-200'}>2026</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-blue-500 ${
                  isSolid ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${isSolid ? 'text-slate-600' : 'text-white'}`}
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
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