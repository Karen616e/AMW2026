import { venueInfo } from '../../data/venueData';

const Venue = () => {
    return (
        <section id="venue" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Venue & City</h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
        {venueInfo.description}
        </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Tarjeta Principal: UNAM */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
        <div className="h-64 bg-blue-800 relative flex items-center justify-center overflow-hidden">
        {/* Aquí podrías poner una foto de la Biblioteca Central o el Anexo */}
        <span className="text-white text-6xl opacity-20 font-bold uppercase tracking-widest">UNAM</span>
        <div className="absolute bottom-6 left-6 text-white text-left">
        <h3 className="text-2xl font-bold">{venueInfo.mainVenue.name}</h3>
        <p className="text-blue-100 text-sm">{venueInfo.mainVenue.address}</p>
        </div>
        </div>
        <div className="p-8 flex-grow">
        <p className="text-slate-600 mb-6 leading-relaxed">
        {venueInfo.mainVenue.details}
        </p>
        <a
        href="https://www.google.com/maps/place/Anexo+de+la+Facultad+de+Ingenier%C3%ADa+UNAM/"
        target="_blank"
        className="text-blue-600 font-bold hover:underline flex items-center gap-2"
        >
        View on Google Maps →
        </a>
        </div>
        </div>

        {/* Columna Derecha: Hotel y Cultura */}
        <div className="space-y-8">
        {/* Hotel */}
        <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group">
        <div className="relative z-10">
        <span className="bg-blue-500/30 text-xs font-bold uppercase py-1 px-3 rounded-full mb-4 inline-block">Recommended Accommodation</span>
        <h4 className="text-xl font-bold mb-2">{venueInfo.accommodation[0].name}</h4>
        <p className="text-blue-200 text-sm mb-4">{venueInfo.accommodation[0].description}</p>
        <div className="flex justify-between items-center mt-6">
        <span className="text-xs text-blue-300 italic">{venueInfo.accommodation[0].distance}</span>
        <a href={venueInfo.accommodation[0].link} className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-bold">Book Now</a>
        </div>
        </div>
        </div>

        {/* Cultural Spot */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl flex items-start gap-6">
        <div className="hidden sm:block w-20 h-20 bg-amber-100 rounded-2xl flex-shrink-0 flex items-center justify-center">
        <span className="text-2xl">🏛️</span>
        </div>
        <div>
        <h4 className="font-bold text-slate-800 text-lg mb-1">{venueInfo.culturalSpot.name}</h4>
        <p className="text-slate-500 text-sm mb-3">Location: {venueInfo.culturalSpot.location}</p>
        <p className="text-slate-600 text-sm leading-relaxed">
        {venueInfo.culturalSpot.description}
        </p>
        </div>
        </div>
        </div>
        </div>

        {/* Tips de Viaje para CDMX */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
        <div className="text-3xl mb-4 text-blue-600">🚇</div>
        <h5 className="font-bold mb-2">Public Transport</h5>
        <p className="text-sm text-slate-500">Use the Metro (Line 3, Universidad Station) or Metrobus to reach Ciudad Universitaria easily.</p>
        </div>
        <div className="text-center">
        <div className="text-3xl mb-4 text-blue-600">🌮</div>
        <h5 className="font-bold mb-2">Gastronomy</h5>
        <p className="text-sm text-slate-500">Don't miss the local tacos and street food near the campus, especially in the Coyoacán area.</p>
        </div>
        <div className="text-center">
        <div className="text-3xl mb-4 text-blue-600">☁️</div>
        <h5 className="font-bold mb-2">Altitude & Weather</h5>
        <p className="text-sm text-slate-500">CDMX is at 2,240m altitude. May is usually sunny and warm with occasional afternoon showers.</p>
        </div>
        </div>
        </div>
        </section>
    );
};

export default Venue;
