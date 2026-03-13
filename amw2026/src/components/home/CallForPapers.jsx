import { cfpData } from '../../data/topics';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Envolvemos toda la introducción en max-w-3xl para una lectura óptima */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            Call for Papers
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6 text-center md:text-left">
            Introduction and scope
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Cybersecurity has evolved from a predominantly technical concern into a complex, multidisciplinary field that intersects 
            technology, society, economics, and governance. The rapid and pervasive digitalization of critical infrastructures, public 
            services, and everyday human activities has expanded the attack surface at an unprecedented scale and simultaneously increasing 
            the potential impact of security failures. Contemporary threats are no longer limited to isolated system breaches but include 
            coordinated attacks on cloudedge platforms, supply chains, cyber-physical systems, and information ecosystems, often exploiting 
            human, organizational, and regulatory vulnerabilities alongside technical ones.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Despite significant advances in defensive mechanisms, cybersecurity remains fundamentally asymmetric: attackers benefit from 
            low entry barriers, automation, and global reach, whereas defenders must secure highly heterogeneous, interconnected, and 
            evolving environments. Emerging paradigms such as cloud-native architectures, artificial intelligence, Internet of Things, 
            and quantum computing introduce new capabilities but also amplify uncertainty, complexity, and risk. Moreover, the speed at 
            which new technologies are adopted frequently surpasses the development of sound security models, standards, and ethical 
            frameworks.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The Mexican Conference on Cybersecurity Research and Applications is a forum for innovative research on cybersecurity, 
            presenting the latest developments and bringing together researchers and practitioners. 
          </p>
        </div>

        {/* Columna de Topics */}
        <div>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-6 uppercase tracking-widest text-center">
            Topics of Interest
          </h3>
          
          {/* También centramos y limitamos el texto de la descripción de los topics */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-12 text-lg max-w-3xl mx-auto text-center">
            {cfpData.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cfpData.categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-100 dark:border-slate-700/60 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300"
              >
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-500 rounded-full flex-shrink-0"></span>
                  {category.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                  {category.description} 
                </p>
                <h5 className="text-base font-bold text-slate-700 dark:text-slate-200 mb-3">Track Topics:</h5>
                <ul className="space-y-2.5">
                  {category.topics.map((topic, tidx) => (
                    <li
                      key={tidx}
                      className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 dark:text-blue-500 mt-0.5">•</span>
                      <span dangerouslySetInnerHTML={{ __html: topic }} className="leading-relaxed" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;