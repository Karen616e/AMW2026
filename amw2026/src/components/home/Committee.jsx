import { committeeMembers } from '../../data/committee';

const Committee = () => {
    return (
        <section id="organization" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Organization
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
        The workshop is organized by a dedicated team of researchers
        focused on the foundations of data management.
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {committeeMembers.map((member, index) => (
            <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group"
            >
            <div className="relative mb-4 inline-block">
            {/* Círculo decorativo de fondo en el hover */}
            <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300"></div>

            <img
            src={member.image}
            alt={member.name}
            className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-sm"
            />
            </div>

            <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors">
            {member.name}
            </h3>

            <p className="text-blue-600 text-sm font-semibold mb-2 uppercase tracking-tight">
            {member.role}
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
            {member.affiliation}
            </p>
            </div>
        ))}
        </div>
        </div>
        </section>
    );
};

export default Committee;
