import { importantDates } from '../../data/dates';

// Función auxiliar para iconos del timeline
const getEventIcon = (eventName) => {
  const name = eventName.toLowerCase();
  if (name.includes('cfp') || name.includes('starting')) return "🚀";
  if (name.includes('submission')) return "📝";
  if (name.includes('review')) return "🔍";
  if (name.includes('rebuttal')) return "⚖️";
  if (name.includes('notification')) return "✉️";
  if (name.includes('camera')) return "📄";
  if (name.includes('registration')) return "🎫";
  return "📅";
};

const DatesTable = () => {
  return (
    <section id="important-dates" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Important Dates
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Mark your calendar for the key milestones of MCyRA 2026.
          </p>
        </div>

        {/* =========================================
            VISTA 1: LÍNEA DE TIEMPO (TIMELINE)
        ========================================= */}
        <div className="relative max-w-4xl mx-auto mb-32">
          {/* La Línea Vertical */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-1.5 bg-slate-200 dark:bg-slate-800 rounded-full transform md:-translate-x-1/2"></div>

          {importantDates.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isPast = item.status === 'past';
            const isOpen = item.status === 'open';
            const icon = getEventIcon(item.event);

            return (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal mb-12 last:mb-0 group">
                {/* Icono */}
                <div className={`absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full border-4 shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 ${
                  isOpen 
                    ? 'bg-blue-600 border-white dark:border-slate-900 shadow-blue-500/40 text-white text-2xl animate-pulse' 
                    : isPast
                      ? 'bg-slate-200 dark:bg-slate-800 border-white dark:border-slate-950 text-slate-400 text-xl grayscale'
                      : 'bg-white dark:bg-slate-900 border-blue-500 text-xl shadow-blue-500/20'
                }`}>
                  {icon}
                </div>

                {/* Tarjeta */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 text-left'}`}>
                  <div className={`p-8 rounded-3xl shadow-sm border transition-all duration-300 hover:-translate-y-1 ${
                    isOpen 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20' 
                      : isPast
                        ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70'
                        : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md'
                  }`}>
                    <h4 className={`text-2xl font-black mb-3 ${isOpen ? 'text-white' : isPast ? 'text-slate-500 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-white'}`}>
                      {item.event}
                    </h4>
                    <p className={`text-lg font-bold ${isOpen ? 'text-blue-100' : isPast ? 'text-slate-400 dark:text-slate-600' : 'text-blue-600 dark:text-blue-400'}`}>
                      {item.date}
                    </p>
                    {item.note && (
                      <p className={`mt-4 text-sm italic border-t pt-4 ${isOpen ? 'text-blue-100 border-blue-500/50' : isPast ? 'text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800' : 'text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-800'}`}>
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Separador Visual 
        <div className="flex items-center justify-center gap-4 mb-16 opacity-50">
          <div className="h-px w-24 bg-slate-300 dark:bg-slate-700"></div>
          <span className="text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest text-sm">Quick Reference</span>
          <div className="h-px w-24 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        {/* ========================================= 
            VISTA 2: TABLA ESTILIZADA
        ========================================= 
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="py-5 px-6 font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-sm">Event</th>
                  <th className="py-5 px-6 font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-sm">Date</th>
                  <th className="py-5 px-6 font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-sm">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {importantDates.map((item, idx) => {
                  const isPast = item.status === 'past';
                  const isOpen = item.status === 'open';
                  
                  return (
                    <tr 
                      key={idx} 
                      className={`transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                        isOpen ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
                      } ${isPast ? 'opacity-60' : ''}`}
                    >
                      <td className="py-5 px-6">
                        <span className={`font-bold ${
                          isOpen ? 'text-blue-700 dark:text-blue-400' : isPast ? 'text-slate-500 line-through' : 'text-slate-800 dark:text-white'
                        }`}>
                          {item.event}
                        </span>
                        {isOpen && (
                          <span className="ml-3 inline-block text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </td>
                      <td className={`py-5 px-6 font-medium ${
                        isPast ? 'text-slate-500' : 'text-slate-600 dark:text-slate-300'
                      }`}>
                        {item.date}
                      </td>
                      <td className="py-5 px-6 text-sm text-slate-500 dark:text-slate-400 italic">
                        {item.note || '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>*/}

      </div>
    </section>
  );
};

export default DatesTable;