import { cfpData } from '../../data/topics';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* --- INTRODUCCIÓN DEL CALL FOR PAPERS --- */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6">
            Call for Papers
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-10"></div>
          
          <div className="text-left space-y-6">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Despite significant advances in defensive mechanisms, cybersecurity remains fundamentally asymmetric: attackers benefit from 
              low entry barriers, automation, and global reach, whereas defenders must secure highly heterogeneous, interconnected, and 
              evolving environments.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Emerging paradigms such as cloud-native architectures, artificial intelligence, Internet of Things, 
              and quantum computing introduce new capabilities but also amplify uncertainty, complexity, and risk. Moreover, the speed at 
              which new technologies are adopted frequently surpasses the development of sound security models, standards, and ethical frameworks.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl mt-8">
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                The Mexican Conference on Cybersecurity Research and Applications is a forum for innovative research on cybersecurity, 
                presenting the latest developments and bringing together researchers and practitioners. 
              </p>
            </div>
          </div>
        </div>

        {/* --- TOPICS OF INTEREST --- */}
        <div>
          <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-widest text-center">
            Topics of Interest
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-16 text-lg max-w-3xl mx-auto text-center font-medium">
            {cfpData.description}
          </p>
          
          {/* Grid de Tracks Académicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {cfpData.categories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 dark:bg-slate-800/40 border-t-4 border-blue-600 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-xl shadow-md group-hover:rotate-6 transition-transform">
                    {/* Icono de Track SVG */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 dark:text-white">
                    {category.title}
                  </h4>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-8 font-medium italic border-b border-slate-200 dark:border-slate-700 pb-6">
                  {category.description} 
                </p>

                <h5 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">
                  Key Track Topics
                </h5>

                <ul className="grid grid-cols-1 gap-4">
                  {category.topics.map((topic, tidx) => (
                    <li
                      key={tidx}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                      <span 
                        className="text-slate-600 dark:text-slate-300 text-base leading-snug group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors"
                        dangerouslySetInnerHTML={{ __html: topic }} 
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- CALL TO ACTION FINAL --- */}
        <div className="text-center bg-blue-600 dark:bg-blue-700 rounded-3xl p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4">Ready to contribute?</h3>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
              Join us in Mexico City and present your research to a global audience of cybersecurity experts.
            </p>
            <a 
              href="#submission" 
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xl hover:bg-blue-50 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Submit Your Research
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallForPapers;