const Sponsors = () => {
  const sponsors = [
    { name: "Very Large Data Bases", logo: "https://www.vldb.org/images/logo.gif", url: "https://www.vldb.org/" },
    { name: "Ambassade de France au Mexique", logo: "https://amw2024.github.io/uploads/logos/ambassade-france.svg", url: "https://mx.ambafrance.org/" },
    { name: "ACM", logo: "https://www.acm.org/binaries/content/gallery/global/top-menu/acm_logo_tablet.svg", url: "https://www.acm.org/" },
    { name: "CPE Lyon", logo: "https://www.cpe.fr/wp-content/themes/acti-main/img/logo-cpe-bleu.svg", url: "https://www.cpe.fr/" },
    { name: "CEUR", logo: "https://amw2024.github.io/uploads/logos/ceur-ws.png", url: "https://ceur-ws.org/" }
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
                className="h-12 grayscale hover:grayscale-0 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;