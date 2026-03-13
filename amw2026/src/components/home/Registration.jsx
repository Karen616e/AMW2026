import { registrationFees } from '../../data/registration';

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">
          Registration
        </h2>

        {/* Contenedor con scroll horizontal para móviles */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-5 font-bold text-slate-700 dark:text-slate-200">Fee Category</th>
                <th className="p-5 font-bold text-slate-700 dark:text-slate-200">Students</th>
                <th className="p-5 font-bold text-slate-700 dark:text-slate-200">Regular</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {registrationFees.map((fee, i) => (
                <tr key={i} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                  <td className="p-5 text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white">
                    {fee.type}
                  </td>
                  <td className="p-5 text-blue-600 dark:text-blue-400 font-extrabold text-lg">
                    {fee.student}
                  </td>
                  <td className="p-5 text-slate-800 dark:text-slate-100 font-extrabold text-lg">
                    {fee.regular}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nota de información adicional */}
        <div className="mt-8 p-5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3 transition-colors">
          <div className="text-amber-600 dark:text-amber-500 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-amber-800 dark:text-amber-200/80 text-sm leading-relaxed">
            <strong className="text-amber-900 dark:text-amber-400">Note:</strong> Registration includes access to all sessions, coffee breaks, and the gala dinner.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Registration;