import { cfpData } from '../../data/committeeslist';

const Committees = () => {
  return (
    <section id="Committees" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Committees
        </h2>

        {/* Columna de committees */}
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

      </div>
    </section>
  );
};

export default Committees;