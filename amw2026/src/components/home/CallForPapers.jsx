import { cfpData } from '../../data/topics';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
            {/* Columna de Texto centrada */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Call for Papers
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
                Introduction and scope
            </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Cybersecurity has evolved from a predominantly technical concern into a complex, multidisciplinary field that intersects 
            technology, society, economics, and governance. The rapid and pervasive digitalization of critical infrastructures, public 
            services, and everyday human activities has expanded the attack surface at an unprecedented scale and simultaneously increasing 
            the potential impact of security failures. Contemporary threats are no longer limited to isolated system breaches but include 
            coordinated attacks on cloudedge platforms, supply chains, cyber-physical systems, and information ecosystems, often exploiting 
            human, organizational, and regulatory vulnerabilities alongside technical ones.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Despite significant advances in defensive mechanisms, cybersecurity remains fundamentally asymmetric: attackers benefit from 
            low entry barriers, automation, and global reach, whereas defenders must secure highly heterogeneous, interconnected, and 
            evolving environments. Emerging paradigms such as cloud-native architectures, artificial intelligence, Internet of Things, 
            and quantum computing introduce new capabilities but also amplify uncertainty, complexity, and risk. Moreover, the speed at 
            which new technologies are adopted frequently surpasses the development of sound security models, standards, and ethical 
            frameworks.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            The Mexican Conference on Cybersecurity Research and Applications is a forum for innovative research on cybersecurity, 
            presenting the latest developments and bringing together researchers and practitioners. 
          </p>
        </div>

        {/* Columna de Topics */}
        <div>
          <h3 className="text-xl font-bold text-slate-700 mb-8 uppercase tracking-widest text-center">
            Topics of Interest
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            {cfpData.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cfpData.categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors"
              >
                <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {category.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                    {category.description} 
                </p>
                <h5 className="text-lg font-bold text-slate-700 mb-2">Track Topics:</h5>
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
    </section>
  );
};

export default CallForPapers;
