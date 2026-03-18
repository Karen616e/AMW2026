import { cfpData } from '../../data/list';
import { cfpData as cfpArtifacts } from '../../data/Artifacts'; 
import { cfpData as cfpConflicts } from '../../data/Conflicts'; 

const ReviewingProcess = () => {
  
  // Función para crear acordeones interactivos sin dependencias extra
  const renderAccordion = (data, icon) => (
    <div className="space-y-4 w-full">
      {data.categories.map((category, idx) => (
        <details 
          key={idx} 
          className="group bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-300"
        >
          <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                {icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                {category.title}
              </h4>
            </div>
            {/* Flecha animada */}
            <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          
          <div className="px-6 pb-8 md:px-8 md:pb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
            <ul className="space-y-4">
              {category.topics.map((topic, tidx) => (
                <li key={tidx} className="text-slate-600 dark:text-slate-300 text-base md:text-lg flex items-start gap-3 leading-relaxed">
                  <span className="text-blue-400 dark:text-blue-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );

  return (
    // Alternamos el fondo a slate-50/slate-950 para separarlo del componente superior
    <section id="ReviewingProcess" className="bg-slate-50 dark:bg-slate-950 py-24 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* --- SECCIÓN: REVIEWING PROCESS --- */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6">
              Reviewing Process
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Each track operates with its own Track Chairs and Track Program Committee, all of them being part of the 
              Conference Program Committee (PC members).
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              PC members might be asked to provide reviews for papers outside their track. At the time
              of submission, authors must select one track. Track chairs will try to provide the best possible reviews and may decide to move a paper to another track.
            </p>
          </div>

          {/* Stepper / Nodos de Decisión Visuales */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-10">Evaluation Outcomes</h3>
            <div className="grid grid-cols-1 gap-6">
              {cfpData.categories[0]?.topics.map((topic, idx) => {
                // Separar el título (ej: "Accept:") del resto del texto para darle formato
                const parts = topic.split(':');
                const title = parts[0];
                const text = parts.slice(1).join(':');
                
                // Asignar colores e iconos según el paso (0: Accept, 1: Minor, 2: Reject)
                const isAccept = idx === 0;
                const isMinor = idx === 1;
                
                return (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${
                      isAccept ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' :
                      isMinor ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400' :
                      'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400'
                    }`}>
                      {isAccept ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      ) : isMinor ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      )}
                    </div>
                    <div>
                      <h4 className={`text-xl font-black mb-3 ${
                        isAccept ? 'text-emerald-700 dark:text-emerald-400' :
                        isMinor ? 'text-amber-700 dark:text-amber-400' :
                        'text-rose-700 dark:text-rose-400'
                      }`}>
                        {title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Nota de Autor (Highlight Box) */}
        <div className="mb-24 p-8 bg-blue-600 dark:bg-blue-700 rounded-3xl shadow-lg text-center max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform">
          <p className="text-xl text-white leading-relaxed font-medium">
            At least <strong className="font-black text-blue-100">one author is required to be registered</strong> for the conference, and the paper presented in-person for the work to be considered for publication.
          </p>
        </div>

        {/* --- SECCIÓN: POLICIES (Grid 2 Columnas) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3"> 
              <span className="text-blue-500">⚖️</span> Policy for Peer-Review 
            </h2> 
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"> 
              The conference adheres to international policies against harassment, the Code of Ethics, and Publication Policies. 
              Any violation should be reported to the track or general chairs. 
              Authors must follow international guides (
              <a href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline"> 
                COPE
              </a>). 
            </p> 
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"> 
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3"> 
              <span className="text-blue-500">📝</span> Authorship & Withdrawing 
            </h2> 
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"> 
              Adding or removing authors is not permitted after submission. Affiliation changes must be approved by track chairs. 
              A paper can be withdrawn at any point <strong className="text-slate-800 dark:text-slate-200">before reviews are sent</strong>; after that, the paper cannot be withdrawn.
            </p> 
          </div>
        </div>

        {/* --- SECCIÓN: ARTIFACTS & CONFLICTS (Acordeones) --- */}
        <div className="space-y-12">
          {/* Artifacts */}
          <div>
            {renderAccordion(cfpArtifacts, 
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            )}
          </div>

          {/* Conflicts */}
          <div>
            {renderAccordion(cfpConflicts, 
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewingProcess;