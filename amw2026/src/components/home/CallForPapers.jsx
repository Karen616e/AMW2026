import { cfpData } from '../../data/topics';

const CallForPapers = () => {
    return (
        <section id="call-for-papers" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">

        {/* Columna de Texto */}
        <div className="lg:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
        Call for Papers
        </h2>
        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
        {cfpData.description}
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h4 className="font-bold text-blue-900 mb-2">Submission Site</h4>
        <p className="text-blue-800 text-sm mb-4">
        All papers must be submitted electronically via EasyChair.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
        Go to EasyChair
        </button>
        </div>
        </div>

        {/* Columna de Topics */}
        <div className="lg:w-2/3">
        <h3 className="text-xl font-bold text-slate-700 mb-8 uppercase tracking-widest">
        Topics of Interest
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cfpData.categories.map((category, idx) => (
            <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-colors">
            <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            {category.title}
            </h4>
            <ul className="space-y-2">
            {category.topics.map((topic, tidx) => (
                <li key={tidx} className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-400">•</span>
                {topic}
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

export default CallForPapers;
