const Footer = () => {
  const years = [2024, 2023, 2022, 2021, 2020];
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h4 className="text-white font-bold text-xl mb-4">MCyRA 2026</h4>
          <p className="text-sm">Mexican Conference on Cybersecurity Research and Applications</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Past Workshops</h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {years.map(y => (
              <a key={y} href={`https://amw${y}.github.io/`} className="hover:text-blue-400 transition-colors">
                AMW {y}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm">For inquiries: <span className="text-blue-400">amw2026@googlegroups.com</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;