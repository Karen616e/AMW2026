import { venueInfo } from '../../data/venueData';

const Venue = () => {
    return (
        <section id="venue" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Introducción */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6">Venue & City</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        The conference activities will take place in the <strong className="text-blue-600 dark:text-blue-400">Anexo de Ingeniería</strong> area. 
                        Please find below the specific locations for the sessions:
                    </p>
                </div>

                {/* NUEVO: Mapas de las Salas Específicas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Mapa 1: Auditorio */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-400 transition-colors group">
                        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 flex items-center gap-5">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Auditorium</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200 text-xl">Raúl J. Marsal, Bldg T</span>
                            </div>
                        </div>
                        <div className="h-72 w-full relative bg-slate-200 dark:bg-slate-700">
                            {/* Reemplaza el src con el enlace "Embed a map" de Google Maps */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.717148816694!2d-99.18485298464303!3d19.33083318694008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0003cb067a93%3A0xc392fb6fb8bdf581!2sAnexo%20de%20Ingenier%C3%ADa%2C%20UNAM!5e0!3m2!1sen!2smx!4v1710790000000!5m2!1sen!2smx" 
                                className="absolute inset-0 w-full h-full border-0" 
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="Map of Auditorium Raúl J. Marsal"
                            ></iframe>
                        </div>
                    </div>

                    {/* Mapa 2: Aula */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-400 transition-colors group">
                        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 flex items-center gap-5">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Aula</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200 text-xl">Cisco (Q218), Bldg Q</span>
                            </div>
                        </div>
                        <div className="h-72 w-full relative bg-slate-200 dark:bg-slate-700">
                            {/* Reemplaza el src con el enlace "Embed a map" de Google Maps para el Edificio Q */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.717148816694!2d-99.18485298464303!3d19.33083318694008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0003cb067a93%3A0xc392fb6fb8bdf581!2sAnexo%20de%20Ingenier%C3%ADa%2C%20UNAM!5e0!3m2!1sen!2smx!4v1710790000000!5m2!1sen!2smx" 
                                className="absolute inset-0 w-full h-full border-0" 
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="Map of Aula Cisco"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Tarjeta Principal: Foto del Anexo (Restaurada) */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-700 transition-colors max-w-5xl mx-auto mb-24">
                    <div className="h-64 md:h-80 relative flex items-center justify-center overflow-hidden">
                        {/* IMAGEN DE LA FACULTAD */}
                        <img 
                            src="/fi_unam.jpg" 
                            alt="Facultad de Ingeniería UNAM"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay degradado */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/40 to-transparent dark:from-slate-950 dark:via-slate-900/60"></div>
                        
                        <div className="absolute bottom-8 left-8 text-white text-left z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/40 backdrop-blur-sm text-blue-50 text-xs font-black uppercase tracking-widest mb-4 border border-blue-400/50">
                                Main Campus
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">{venueInfo.mainVenue.name}</h3>
                            <p className="text-blue-100 dark:text-blue-200 text-sm md:text-base font-medium drop-shadow-md flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                {venueInfo.mainVenue.address}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 md:p-12 flex-grow">
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                            {venueInfo.mainVenue.details}
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Facultad+de+Ingenier%C3%ADa+UNAM/@19.3313883,-99.1872813,1075m/data=!3m3!1e3!4b1!5s0x85ce0001577b6221:0x74dc9613abb964b1!4m6!3m5!1s0x85ce00015be0a713:0x3fc11681a8244370!8m2!3d19.3313833!4d-99.1847064!16s%2Fm%2F027vtty?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                        >
                            Open in Google Maps
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>

                {/* Hoteles y Cultura (Manteniendo el diseño limpio nuevo) */}
                <h3 className="text-3xl font-black text-center text-slate-800 dark:text-white mb-10">Accommodation & Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {[venueInfo.accommodation[0], venueInfo.culturalSpot].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-colors group">
                            <span className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest block mb-3">
                                {idx === 0 ? "Hotel Recommendation" : "Cultural Highlight"}
                            </span>
                            <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{item.name}</h4>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{item.description}</p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                <span className="text-sm text-slate-500 font-medium bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                    🚗 {item.distance}
                                </span>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" 
                                   className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                                    Visit Website →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tips de Viaje Extendidos */}
                <div className="bg-blue-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-slate-700">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-10 text-center">Travel Logistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: "🚇", title: "Public Transport", text: "Use the Metro (Line 3, Universidad) or Metrobus. Ubers are also safe and widely available." },
                            { icon: "🌮", title: "Gastronomy", text: "Explore local tacos and street food near campus or in the nearby Coyoacán historic center." },
                            { icon: "🛂", title: "Visa & Entry", text: "Check your country's requirements early. We can provide invitation letters for accepted authors." }
                        ].map((tip, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-5 border border-slate-100 dark:border-slate-600">
                                    {tip.icon}
                                </div>
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-2">{tip.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Venue;