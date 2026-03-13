import { venueInfo } from '../../data/venueData';

const Venue = () => {
    return (
        <section id="venue" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Introducción */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">Venue & City</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                        The conference activities will take place in the <strong className="text-blue-600 dark:text-blue-400">Anexo de Ingeniería</strong> area. 
                        Please find below the specific rooms for the sessions:
                    </p>
                    
                    {/* Lista de Salas Optimizada */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-400 transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                            <div className="text-left">
                                <span className="block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Auditorium</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">Raúl J. Marsal, Bldg T</span>
                            </div>
                        </a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-400 transition-all group">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                            <div className="text-left">
                                <span className="block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Aula</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">Cisco (Q218), Bldg Q</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Tarjeta Principal: UNAM */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-700 transition-colors">
                        <div className="h-64 bg-blue-800 dark:bg-blue-900 relative flex items-center justify-center overflow-hidden">
                            <span className="text-white text-6xl opacity-10 font-bold uppercase tracking-widest select-none">UNAM</span>
                            <div className="absolute bottom-6 left-6 text-white text-left z-10">
                                <h3 className="text-2xl font-bold">{venueInfo.mainVenue.name}</h3>
                                <p className="text-blue-100 dark:text-blue-200 text-sm">{venueInfo.mainVenue.address}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                        </div>
                        <div className="p-8 flex-grow">
                            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                {venueInfo.mainVenue.details}
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md"
                            >
                                View on Google Maps
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Hotel y Cultura */}
                    <div className="space-y-8 flex flex-col">
                        {[venueInfo.accommodation[0], venueInfo.culturalSpot].map((item, idx) => (
                            <div key={idx} className="bg-blue-900 dark:bg-slate-950 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group border border-transparent dark:border-slate-800 flex-grow transition-colors">
                                <div className="relative z-10 flex flex-col h-full">
                                    <span className="bg-blue-500/30 text-[10px] font-bold uppercase py-1 px-3 rounded-full mb-4 w-fit tracking-wider">
                                        {idx === 0 ? "Recommended Accommodation" : "Cultural Highlight"}
                                    </span>
                                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{item.name}</h4>
                                    <p className="text-blue-200 dark:text-slate-400 text-sm mb-6 leading-relaxed">{item.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-xs text-blue-300 dark:text-slate-500 italic flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/></svg>
                                            {item.distance}
                                        </span>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" 
                                           className="bg-white text-blue-900 px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all shadow-sm">
                                            Visit Site
                                        </a>
                                    </div>
                                </div>
                                {/* Decoración de fondo */}
                                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tips de Viaje para CDMX */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: "🚇", title: "Public Transport", text: "Use the Metro (Line 3, Universidad) or Metrobus to reach Ciudad Universitaria efficiently." },
                        { icon: "🌮", title: "Gastronomy", text: "Explore local tacos and street food near campus or in the nearby Coyoacán historic center." },
                        { icon: "☀️", title: "Altitude & Weather", text: "CDMX is at 2,240m. November is usually pleasant, but evenings can be cool; bring a light jacket." }
                    ].map((tip, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{tip.icon}</div>
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-3">{tip.title}</h5>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[250px] mx-auto">{tip.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Venue;