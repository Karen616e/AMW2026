import { cfpData } from '../../data/list';
import { cfpData as cfpArtifacts } from '../../data/Artifacts'; 
import { cfpData as cfpConflicts } from '../../data/Conflicts'; 

const ReviewingProcess = () => {
  return (
    <section id="ReviewingProcess" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Reviewing Process
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Each track operates with its own Track Chairs and Track Program Committee, all of them being part of the 
          Conference Program Committee (PC members).
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
            PC members might be asked to provide reviews for papers outside their track. At the time
            of submission, authors must select one track, which should be the most relevant to the
            topic of the paper, even if the paper might span multiple topics. Track chairs will try to
            provide the best possible reviews to the authors and they can decide to move a paper to
            another track.
        </p>

        {/* Columna de list */}
        <div className="max-w-3xl mx-auto p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors">
          <div className="grid grid-cols-1 gap-6">
            {cfpData.categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors"
              >
                <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.topics.map((topic, tidx) => (
                    <li
                      key={tidx}
                      className="text-slate-600 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            At least one author is required to be registered for the conference, and the paper presented in-person at the conference for the work be considered for publication in the proceedings.
          </p>
        </div>

        <div className="mt-8"> 
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center"> 
            Policy for Peer-Review 
          </h2> 
          <p className="text-lg text-slate-600 leading-relaxed mb-8"> 
            The conference must adhere to international policies against harassment activities, 
            Code of Ethics and Professional Conduct, and Publications Policies. 
            Any violation to the integrity of the review process should be reported to the track chairs or general chairs. 
            Authors are required to adhere to international guides on this matter ({""} 
              <a href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" > 
                COPE 
              </a>) 
          </p> 
        </div> 
        
        <div className="mt-8"> 
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center"> 
            Authorship and Withdrawing Policy 
          </h2> 
          <p className="text-lg text-slate-600 leading-relaxed"> 
            Adding or removing authors in the authorship list is not permitted after paper submission. 
            In case authors decide to change affiliation data, such changes must be approved by the track chairs. 
            A paper can be withdrawn at any point before the reviews have been sent to the authors. 
            Once the reviews have been sent to the authors, the paper cannot be withdrawn. 
          </p> 
        </div>

        {/* Artifacts at Submission Time */}
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Artifacts at Submission Time
          </h2>
          {/* Columna de artifacts */}
          <div className="max-w-3xl mx-auto p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors">
            <div className="grid grid-cols-1 gap-6">
              {cfpArtifacts.categories.map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors"
                >
                  <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.topics.map((topic, tidx) => (
                      <li
                        key={tidx}
                        className="text-slate-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conflicts of Interest */}
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Conflicts of Interest
          </h2>
          {/* Columna de artifacts */}
          <div className="max-w-3xl mx-auto p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors">
            <div className="grid grid-cols-1 gap-6">
              {cfpConflicts.categories.map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors"
                >
                  <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.topics.map((topic, tidx) => (
                      <li
                        key={tidx}
                        className="text-slate-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewingProcess;