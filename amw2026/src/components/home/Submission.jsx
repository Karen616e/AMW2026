const Submission = () => {
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
        
        {/* --- CUADRO DE INFORMACIÓN PRINCIPAL (Springer LNCS) --- */}
        <div className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Submissions should be prepared following the authors' guidelines provided by <strong className="text-slate-900 dark:text-white">Springer LNCS series</strong>. Papers will be submitted and presented at the conference in English. All submissions will be blind peer-reviewed. The final acceptance will be based on a peer review of the full-length paper.
          </p>
          <div className="flex items-center gap-3 py-3 px-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-blue-200 dark:border-blue-800/50 w-fit">
            <span className="font-bold text-slate-800 dark:text-slate-200">Submission site:</span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">TBA</span>
          </div>
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
        <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center transition-all hover:shadow-md">
          <p className="text-slate-600 dark:text-slate-300 mb-6 italic text-lg">
            Accepted papers will be presented at the conference proceedings, which are planned to be published by <strong className="text-slate-800 dark:text-slate-200">Springer</strong> in a <strong className="text-slate-800 dark:text-slate-200">Computer Science Proceedings series</strong>.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Templates (LaTeX / Word)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Submission;