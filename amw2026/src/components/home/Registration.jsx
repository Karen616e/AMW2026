import { registrationFees } from '../../data/registration';

const Registration = () => {
  // Asumimos que el primer elemento es el precio actual/Early Bird
  const currentFee = registrationFees[0];
  const upcomingFees = registrationFees.slice(1);

  // Lista de beneficios (lo que incluía tu nota amarilla)
  const includedFeatures = [
    "Access to all conference sessions",
    "Coffee breaks and networking",
    "Entrance to the Gala Dinner",
    "Conference materials and proceedings"
  ];

  return (
    <section id="registration" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Registration
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Secure your spot at MCyRA 2026. Choose the pass that fits your profile.
          </p>
        </div>

        {/* Tarjetas de Precios (SaaS Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* --- TARJETA 1: STUDENT --- */}
          <div className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl">🎓</span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Student Pass</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">For undergraduate and graduate students.</p>
            
            {/* Precio Principal */}
            <div className="mb-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black text-blue-600 dark:text-blue-400">{currentFee.student}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest rounded-full">
                Best Value: {currentFee.type}
              </span>
            </div>

            {/* Fases Siguientes */}
            <div className="space-y-3 mb-8 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Upcoming Phases</h4>
              {upcomingFees.map((fee, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 dark:text-slate-400">{fee.type}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{fee.student}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
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

          {/* --- TARJETA 2: REGULAR (Destacada) --- */}
          <div className="flex flex-col bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white">
            {/* Elemento decorativo de fondo */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">Regular Pass</h3>
                <span className="text-4xl opacity-50">💼</span>
              </div>
              <p className="text-blue-200 font-medium mb-8">For researchers, academics, and industry professionals.</p>
              
              {/* Precio Principal */}
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black">{currentFee.regular}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-black uppercase tracking-widest rounded-full backdrop-blur-md">
                  Current Phase: {currentFee.type}
                </span>
              </div>

              {/* Fases Siguientes */}
              <div className="space-y-3 mb-8 bg-black/10 p-4 rounded-2xl border border-white/10">
                <h4 className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">Upcoming Phases</h4>
                {upcomingFees.map((fee, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-blue-100">{fee.type}</span>
                    <span className="font-bold">{fee.regular}</span>
                  </div>
                ))}
              </div>

              {/* Features List */}
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
                Register as Regular
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Registration;