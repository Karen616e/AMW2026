const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decoración de fondo (Círculos de desenfoque) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            About <span className="text-blue-600 dark:text-blue-500">MCyRA</span>
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-10"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
              The <span className="text-blue-700 dark:text-blue-400 font-bold">Mexican Conference on Cybersecurity Research and Applications (MCyRA 2026)</span> is the premier forum for collaboration in the digital security landscape.
            </p>
          </div>
        </div>

        {/* --- SECCIÓN DE ENFOQUE (Ahora en una sola columna centrada) --- */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="group bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
            <div className="text-blue-600 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
              {/* Icono de Escudo SVG */}
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center md:text-left">
              MCyRA shifts the focus to the <strong className="text-slate-900 dark:text-white">rapidly evolving field of cybersecurity</strong>, addressing current challenges in protecting digital infrastructure and applications.
            </p>
          </div>
        </div>

        {/* SECCIÓN DESTACADA: Introduction and Scope */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 dark:bg-blue-600 blur-2xl opacity-10 rounded-[3rem]"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-blue-100 dark:border-blue-900/30 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white">
                  Introduction and Scope
                </h3>
              </div>
              
              <div className="space-y-8">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic">
                    "Cybersecurity has evolved from a technical concern into a multidisciplinary field that intersects technology, society, and governance."
                  </p>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  The rapid digitalization of critical infrastructures has expanded the attack surface at an unprecedented scale. 
                  Contemporary threats include coordinated attacks on <strong className="text-blue-600 dark:text-blue-400">cloud-edge platforms, supply chains, and cyber-physical systems</strong>, 
                  exploiting human and organizational vulnerabilities alongside technical ones.
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  MCyRA serves as a collaborative space to encourage growth and the development of new ideas that 
                  contribute to enhancing the cybersecurity landscape in Latin America and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;