const Submission = () => {
  // Puedes descomentar y editar estos lineamientos cuando tengas la información final
  const guidelines = [/*
    { title: "Regular Papers", detail: "Up to 12 pages excluding references. Original research results." },
    { title: "Short Papers", detail: "Up to 6 pages excluding references. Work in progress or reports." },
    { title: "Format", detail: "Submissions must follow the CEUR-WS style (single-column)." },
    { title: "Review Process", detail: "Single-blind review. Authors' names should be visible." }
  */];

  return (
    <section id="submission" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center md:text-left">
          Paper Submission Guidelines
        </h2>
        
        {/* --- CUADRO DE INFORMACIÓN PRINCIPAL --- */}
        <div className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Submissions should be prepared following the authors' guidelines provided by <strong className="text-slate-900 dark:text-white">Springer LNCS series</strong>. Papers will be submitted and presented at the conference in English. All submissions will be blind peer-reviewed. The final acceptance will be based on a peer review of the full-length paper.
          </p>
        </div>

        {/* --- GRID DE LINEAMIENTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {guidelines.map((g, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center font-bold border border-blue-200 dark:border-blue-800 transition-transform group-hover:scale-110">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {g.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {g.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* --- RECUADRO INFERIOR DE PUBLICACIÓN Y TEMPLATES --- */}
        <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 text-center transition-all hover:shadow-md flex flex-col items-center">
          
          {/* TÍTULO DE LA SECCIÓN */}
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-8 tracking-tight">
            Proceedings and Indexing
          </h3>

          {/* TEXTOS DE INDEXACIÓN */}
          <div className="text-slate-600 dark:text-slate-300 mb-10 text-lg max-w-3xl space-y-5 leading-relaxed">
            <p>
              Accepted papers will be included in the proceedings of MCyRA 2026 that will be published by <strong className="text-slate-800 dark:text-slate-200">Springer Nature</strong> in the prestigious <strong className="text-slate-800 dark:text-slate-200">Communications in Computer and Information Science (CCIS)</strong> series.
            </p>
            <p>
              This publication venue ensures global dissemination and visibility of high-quality research contributions in cybersecurity, cryptography, artificial intelligence, and related areas.
            </p>
          </div>
          
          {/* BOTÓN DE DESCARGA */}
          <a 
            href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95 mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Templates (LaTeX / Word)
          </a>

          {/* CONTENEDOR DE LOS LOGOS (AHORA ABAJO) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-2">
            <img 
              src="/springer-logo.png" 
              alt="Springer Logo" 
              className="h-12 md:h-16 px-4 py-2 rounded-xl object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 dark:invert dark:brightness-200 dark:hover:invert-0 dark:hover:brightness-100 dark:hover:bg-white transition-all duration-300"
            />
            <div className="hidden md:block w-px h-12 bg-slate-300 dark:bg-slate-600"></div> {/* Divisor visual */}
            <img 
              src="/CCIS-Logo.png" 
              alt="CCIS Logo" 
              className="h-12 md:h-16 px-4 py-2 rounded-xl object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 dark:invert dark:brightness-200 dark:hover:invert-0 dark:hover:brightness-100 dark:hover:bg-white transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Submission;