const Footer = () => {
  const sponsors = [
    { name: "UNAM", logo: "/unam_logo.svg", url: "https://www.unam.mx/" },
    { name: "INAOE", logo: "/inaoe_logo.jpg", url: "https://www.inaoep.mx/" },
    { name: "CIC IPN", logo: "/cic_ipn_logo.png", url: "https://www.cic.ipn.mx/" },
    { name: "ITESM", logo: "/itesm_logo.svg", url: "https://tec.mx/es" }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-6 px-4 mt-auto transition-colors duration-300 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-center gap-6 text-sm">
        
        {/* 1. Marca */}
        <div className="flex items-center gap-3">
          <img 
            src="/Logo 1.jpeg" 
            alt="MCyRA Logo" 
            className="w-8 h-8 rounded-full object-cover border border-slate-700" 
          />
          <span className="text-white font-bold tracking-tight">
            MCyRA <span className="text-blue-500">2026</span>
          </span>
        </div>

        {/* 2. Contacto */}
        <a 
          href="mailto:mcyra2026@fi-b.unam.mx" 
          className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          mcyra2026@fi-b.unam.mx
        </a>

        {/* 3. Patrocinadores (Logos pequeños) */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 uppercase tracking-widest hidden md:inline-block mr-2">
            Sponsored by:
          </span>
          {sponsors.map((s, i) => (
            <a 
              key={i} 
              href={s.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-1.5 rounded-lg hover:scale-110 transition-transform"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-5 md:h-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all object-contain"
              />
            </a>
          ))}
        </div>

        {/* 4. Copyright */}
        <div className="text-slate-500 text-xs md:text-sm">
          © {new Date().getFullYear()} MCyRA. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;