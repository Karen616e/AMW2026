const Footer = () => {
  const sponsors = [
    { 
      name: "UNAM", 
      logo: "/unam_logo.svg", 
      url: "https://www.unam.mx/" 
    },
    { 
      name: "INAOE", 
      logo: "/inaoe_logo.jpg", 
      url: "https://www.inaoep.mx/" 
    },
    { 
      name: "CIC IPN", 
      logo: "/cic_ipn_logo.png", 
      url: "https://www.cic.ipn.mx/" 
    },
    { 
      name: "ITESM", 
      logo: "/itesm_logo.svg", 
      url: "https://tec.mx/es" 
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 px-4 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Grid Principal: Info (Izquierda) - Sponsors (Centro) - Contacto (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          
          {/* Izquierda: Información */}
          <div className="text-center lg:text-left lg:col-span-1">
            <h4 className="text-white font-bold text-xl mb-3">MCyRA 2026</h4>
            <p className="text-sm leading-relaxed text-slate-400 dark:text-slate-500">
              Mexican Conference on Cybersecurity Research and Applications
            </p>
          </div>

          {/* Centro: Sponsors */}
          <div className="text-center lg:col-span-2">
            <p className="text-slate-500 dark:text-slate-600 font-semibold uppercase tracking-widest text-xs mb-5">
              Sponsored by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {sponsors.map((s, i) => (
                <a 
                  key={i} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Se mantiene bg-white para proteger la legibilidad de los logos
                  className="bg-white hover:bg-slate-50 p-2.5 rounded-xl transition-all shadow-sm group"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-10 md:h-12 grayscale group-hover:grayscale-0 transition-all object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Derecha: Contacto */}
          <div className="text-center lg:text-right lg:col-span-1">
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              For inquiries: <br />
              <a href="mailto:MCYRA2026@fi-b.unam.mx" className="text-blue-400 hover:text-blue-300 dark:text-blue-500 dark:hover:text-blue-400 transition-colors mt-2 inline-block">
                MCYRA2026@fi-b.unam.mx
              </a>
            </p>
          </div>

        </div>

        {/* Separador visual inferior */}
        <div className="border-t border-slate-800 dark:border-slate-900"></div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-600 dark:text-slate-700">
          © {new Date().getFullYear()} MCyRA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;