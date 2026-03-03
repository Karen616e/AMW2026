import { cfpData } from '../../data/list';

const ReviewingProcess = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título centrado */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Reviewing process
        </h2>

        {/* Descripción 1 */}
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6 text-center">
          Each track operates with its own Track Chairs and Track Program Committee, all of them being part of the 
          Conference Program Committee (PC members).
        </p>

        {/* Descripción 2 */}
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 text-center">
            PC members might be asked to provide reviews for papers outside their track. At the time
            of submission, authors must select one track, which should be the most relevant to the
            topic of the paper, even if the paper might span multiple topics. Track chairs will try to
            provide the best possible reviews to the authors and they can decide to move a paper to
            another track.
        </p>
        
        {/* Cuadro centrado con lista */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cfpData.categories.map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {category.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.topics.map((topic, tidx) => (
                      <li
                        key={tidx}
                        className="text-slate-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400">•</span>
                        <span dangerouslySetInnerHTML={{ __html: topic }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Descripción final */}
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mt-8 text-center">
          At least one author is required to be registered for the conference, and the paper presented in-person at the conference for the work be considered for publication in the proceedings.
        </p>
      </div>
    </section>
  );
};

export default ReviewingProcess;