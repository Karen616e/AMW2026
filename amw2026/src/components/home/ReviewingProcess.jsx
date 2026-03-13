import { cfpData } from '../../data/list';
import { cfpData as cfpArtifacts } from '../../data/Artifacts'; 
import { cfpData as cfpConflicts } from '../../data/Conflicts'; 

const ReviewingProcess = () => {
  // Función auxiliar para renderizar los bloques de categorías (evita código repetido y cajas anidadas)
  const renderCategoryCards = (data) => (
    <div className="grid grid-cols-1 gap-6 w-full">
      {data.categories.map((category, idx) => (
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
  );

  return (
    <section id="ReviewingProcess" className="bg-white dark:bg-slate-900 py-20 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* --- SECCIÓN: REVIEWING PROCESS --- */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Reviewing Process
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Each track operates with its own Track Chairs and Track Program Committee, all of them being part of the 
              Conference Program Committee (PC members).
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              PC members might be asked to provide reviews for papers outside their track. At the time
              of submission, authors must select one track, which should be the most relevant to the
              topic of the paper. Track chairs will try to provide the best possible reviews and may decide to move a paper to another track.
            </p>
          </div>
        </div>

        {/* Tarjetas de Reviewing Process */}
        <div className="mb-20">
          {renderCategoryCards(cfpData)}
        </div>

        <div className="mb-20 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-xl">
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic">
            At least one author is required to be registered for the conference, and the paper presented in-person for the work to be considered for publication.
          </p>
        </div>

        {/* --- SECCIÓN: POLICIES --- */}
        <div className="space-y-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center"> 
              Policy for Peer-Review 
            </h2> 
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4"> 
              The conference adheres to international policies against harassment, the Code of Ethics, and Publication Policies. 
              Any violation should be reported to the track or general chairs. 
              Authors must follow international guides ({""} 
              <a href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline"> 
                COPE 
              </a>). 
            </p> 
          </div>

          <div> 
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center"> 
              Authorship and Withdrawing Policy 
            </h2> 
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4"> 
              Adding or removing authors is not permitted after submission. Affiliation changes must be approved by track chairs. 
              A paper can be withdrawn at any point before reviews are sent; after that, the paper cannot be withdrawn.
            </p> 
          </div>

          {/* --- SECCIÓN: ARTIFACTS --- */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-10 text-center">
              Artifacts at Submission Time
            </h2>
            {renderCategoryCards(cfpArtifacts)}
          </div>

          {/* --- SECCIÓN: CONFLICTS --- */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-10 text-center">
              Conflicts of Interest
            </h2>
            {renderCategoryCards(cfpConflicts)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewingProcess;