import { cfpData } from '../../data/Inclusion';

const Diversity = () => {
  return (
    <section id="Diversity" className="bg-white dark:bg-slate-900 py-20 px-4 transition-colors duration-300">
      {/* Usamos max-w-4xl para que las tarjetas no se estiren demasiado y la lectura sea central */}
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-10 text-center">
          Diversity and Inclusion
        </h2>

        {/* Contenedor Grid limpio (sin bordes ni fondos redundantes) */}
        <div className="grid grid-cols-1 gap-8">
          {cfpData.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 border border-slate-100 dark:border-slate-700/60 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 shadow-sm"
            >
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-500 rounded-full flex-shrink-0"></span>
                {category.title}
              </h4>
              
              <ul className="space-y-4">
                {category.topics.map((topic, tidx) => (
                  <li
                    key={tidx}
                    className="text-slate-600 dark:text-slate-300 text-base md:text-lg flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-blue-400 dark:text-blue-500 mt-1.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Diversity;