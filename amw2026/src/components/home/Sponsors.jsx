const Sponsors = () => {
  const sponsors = [
    { 
      name: "UNAM", 
      logo: "/logos/unam.png", // Coloca el logo real en tu carpeta public/logos
      url: "https://www.unam.mx/" 
    },
    { 
      name: "INAOE", 
      logo: "/logos/inaoe.png", // Coloca el logo real en tu carpeta public/logos
      url: "https://www.inaoep.mx/" 
    },
    { 
      name: "CIC IPN", 
      logo: "/logos/cic-ipn.png", // Coloca el logo real en tu carpeta public/logos
      url: "https://www.cic.ipn.mx/" 
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-slate-400 font-semibold uppercase tracking-widest text-xs mb-8">
          Supported by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {sponsors.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
              <img
                src={s.logo}
                alt={s.name}
                className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;