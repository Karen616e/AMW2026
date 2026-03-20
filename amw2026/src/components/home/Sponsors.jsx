const Sponsors = () => {
  const sponsors = [
    { 
      name: "UNAM", 
      logo: "unam_logo.svg", 
      url: "https://www.unam.mx/" 
    },
    { 
      name: "INAOE", 
      logo: "inaoe_logo.jpg", 
      url: "https://www.inaoep.mx/" 
    },
    { 
      name: "CIC IPN", 
      logo: "cic_ipn_logo.png", 
      url: "https://www.cic.ipn.mx/" 
    },
    { 
      name: "ITESM", 
      logo: "itesm_logo.svg", 
      url: "https://tec.mx/es" 
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        
        <p className="text-center text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-widest text-xs mb-10">
          Sponsored by
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((s, i) => (
            <a 
              key={i} 
              href={s.url} 
              target="_blank" 
              rel="noopener noreferrer"
              // Envolvemos el logo en una pequeña tarjeta blanca para proteger su legibilidad en modo oscuro
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-12 md:h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;