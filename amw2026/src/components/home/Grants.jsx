const Grants = () => {
  return (
    <section id="grants" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
          
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 dark:bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>

          <div className="p-8 md:p-14 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Columna Izquierda: Mensaje y Call to Action */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 shadow-inner">
                  {/* Icono de Birrete (Graduación) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
                  Student Grants
                </h2>
                
                <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed text-lg md:text-xl font-medium">
                  To support the participation of the next generation of researchers, a <strong className="text-blue-600 dark:text-blue-400">limited number of travel grants</strong> will be available to facilitate your presentation at MCyRA 2026.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95">
                    Apply for a Grant
                  </button>
                  <a 
                    href="#registration" 
                    className="inline-flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold py-4 px-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  >
                    View Registration Details
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Detalles estructurados en Checklist */}
              <div className="w-full lg:w-5/12 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                
                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                  Grant Details & Eligibility
                </h3>

                <div className="space-y-8">
                  {/* Qué incluye */}
                  <div>
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2 text-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      What's Included
                    </h4>
                    <ul className="space-y-3 pl-7">
                      <li className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        • Coverage of <strong className="text-slate-900 dark:text-white">registration fees</strong>.
                      </li>
                      <li className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        • Financial contribution toward <strong className="text-slate-900 dark:text-white">travel expenses</strong> to Mexico City.
                      </li>
                    </ul>
                  </div>

                  {/* Quién puede aplicar (Requisitos explícitos extraídos de tu texto) */}
                  <div>
                    <h4 className="font-bold text-amber-600 dark:text-amber-500 mb-3 flex items-center gap-2 text-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      Requirements
                    </h4>
                    <ul className="space-y-3 pl-7">
                      <li className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        • Must be currently enrolled as a student.
                      </li>
                      <li className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        • Must be a <strong className="text-slate-900 dark:text-white">co-author</strong> of an accepted paper.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Grants;