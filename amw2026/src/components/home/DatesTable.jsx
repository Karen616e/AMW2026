import { importantDates } from '../../data/dates';

const DatesTable = () => {
    return (
        <section id="dates" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3">
        <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
        Important Dates
        </h2>

        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {/* Header - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-4 bg-slate-50 border-b border-slate-200 p-4 text-sm font-semibold text-slate-600">
        <div className="col-span-2">Event</div>
        <div>Date</div>
        <div className="text-right">Status</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">
        {importantDates.map((item, index) => (
            <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 p-4 md:items-center hover:bg-blue-50/50 transition-colors group"
            >
            {/* Event Name */}
            <div className="col-span-2 mb-2 md:mb-0">
            <p className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
            {item.event}
            </p>
            {item.note && (
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {item.note}
                </span>
            )}
            </div>

            {/* Date */}
            <div className="text-slate-600 text-sm md:text-base mb-2 md:mb-0">
            <span className="md:hidden font-semibold text-slate-400 mr-2">Date:</span>
            {item.date}
            </div>

            {/* Status Badge */}
            <div className="text-left md:text-right">
            <span className={`
                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${item.status === 'open' ? 'bg-green-100 text-green-800' : ''}
                ${item.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : ''}
                ${item.status === 'past' ? 'bg-slate-100 text-slate-500 line-through' : ''}
                `}>
                {item.status.toUpperCase()}
                </span>
                </div>
                </div>
        ))}
        </div>
        </div>

        <p className="mt-6 text-sm text-slate-500 italic">
        * All deadlines are at 23:59 AoE (Anywhere on Earth).
        </p>
        </div>
        </section>
    );
};

export default DatesTable;
