import { importantDates } from '../../data/dates';

const DatesTable = () => {
    return (
        <section id="dates" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* Título */}
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-10 flex items-center gap-3">
                    <span className="w-8 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                    Important Dates
                </h2>

                {/* Tabla/Grid */}
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm transition-colors duration-300">
                    
                    {/* Header - Oculto en Móviles */}
                    <div className="hidden md:grid grid-cols-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 p-4 text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        <div className="col-span-2">Event</div>
                        <div>DEADLINE</div>
                        <div className="text-right">Status</div>
                    </div>

                    {/* Filas */}
                    <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
                        {importantDates.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-4 p-4 md:items-center hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-colors group"
                            >
                                {/* Nombre del Evento */}
                                <div className="col-span-2 mb-2 md:mb-0">
                                    <p className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                        {item.event}
                                    </p>
                                    {item.note && (
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1 inline-block">
                                            {item.note}
                                        </span>
                                    )}
                                </div>

                                {/* Fecha */}
                                <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-2 md:mb-0 flex items-center">
                                    <span className="md:hidden font-semibold text-slate-400 dark:text-slate-500 mr-2">Date:</span>
                                    {item.date}
                                </div>

                                {/* Badge de Estado */}
                                <div className="text-left md:text-right">
                                    <span className={`
                                        inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-colors
                                        ${item.status === 'open' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : ''}
                                        ${item.status === 'upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                                        ${item.status === 'past' ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 line-through' : ''}
                                    `}>
                                        {item.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nota al pie */}
                <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 italic">
                    * All deadlines are at 23:59 AoE (Anywhere on Earth).
                </p>
            </div>
        </section>
    );
};

export default DatesTable;