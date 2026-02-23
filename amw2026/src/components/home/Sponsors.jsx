const Sponsors = () => {
  const sponsors = [
    { name: "UNAM", logo: "https://via.placeholder.com/150x80?text=UNAM" },
    { name: "Sede 2026", logo: "https://via.placeholder.com/150x80?text=Sede" },
    { name: "Funding Org", logo: "https://via.placeholder.com/150x80?text=Sponsor" }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-slate-400 font-semibold uppercase tracking-widest text-xs mb-8">
          Supported by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {sponsors.map((s, i) => (
            <img key={i} src={s.logo} alt={s.name} className="h-12 grayscale hover:grayscale-0 transition-all" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;