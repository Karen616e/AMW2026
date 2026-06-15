import { registrationFees } from '../../data/registration';

const Registration = () => {
  // Asumimos que el primer elemento es el precio actual/Early Bird
  const currentFee = registrationFees[0];
  // Asumimos que el segundo elemento (índice 0 de upcomingFees) es el precio Late
  const upcomingFees = registrationFees.slice(1);
  const lateFee = upcomingFees[0] || currentFee; // Fallback por si acaso

  // Lista de beneficios
  const includedFeatures = [
    "Access to all conference sessions",
    "Coffee breaks and networking",
    "Conference materials and proceedings"
  ];

  return (
    <section id="registration" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Registration
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Secure your spot at MCyRA 2026. Choose the pass that fits your profile.
          </p>
        </div>

        {/* ==========================================
            SECCIÓN 1: ESTUDIANTES (Blanco -> Azul)
            ========================================== */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-8 text-center uppercase tracking-widest">
            For Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* --- STUDENT EARLY (White) --- */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">⏰</span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Early</h4>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold w-fit mb-6 border border-green-200 dark:border-green-800/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Before August
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">For currently enrolled undergraduate and graduate students.</p>
              
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-blue-600 dark:text-blue-400">{currentFee.student}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl font-bold text-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Register as Student
              </button>
            </div>

            {/* --- STUDENT LATE (Blue) --- */}
            <div className="flex flex-col bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold">Late</h4>
                  <span className="text-4xl opacity-50">🎓</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/50 text-blue-50 text-sm font-bold w-fit mb-6 backdrop-blur-sm border border-blue-400/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  August and after
                </div>

                <p className="text-blue-200 font-medium mb-8">For currently enrolled undergraduate and graduate students.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black">{lateFee.student}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {includedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-medium text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold text-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                  Register as Student
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================
            SECCIÓN 2: AUTORES (Azul -> Blanco)
            ========================================== */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-8 text-center uppercase tracking-widest">
            For Authors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* --- AUTHOR EARLY (Blue) --- */}
            <div className="flex flex-col bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <span className="text-6xl">⏰</span>
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold">Early</h4>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/50 text-blue-50 text-sm font-bold w-fit mb-6 backdrop-blur-sm border border-blue-400/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Before August
                </div>

                <p className="text-blue-200 font-medium mb-8">For researchers, academics, and industry professionals.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black">{currentFee.regular}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {includedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-medium text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold text-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                  Register as Author
                </button>
              </div>
            </div>

            {/* --- AUTHOR LATE (White) --- */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white">Late</h4>
                <span className="text-4xl opacity-30 dark:opacity-50">💼</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-bold w-fit mb-6 border border-amber-200 dark:border-amber-800/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                August and after
              </div>

              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">For researchers, academics, and industry professionals.</p>
              
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-blue-600 dark:text-blue-400">{lateFee.regular}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl font-bold text-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Register as Author
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Registration;