import React from 'react';
import { organizationData } from '../../data/organization';

const Organization = () => {
  return (
    <section id="organization" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Organization & Committees
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            The conference is organized by a dedicated team of researchers
            focused on cybersecurity research and applications.
          </p>
        </div>

        {/* Iteración sobre los grupos */}
        <div className="space-y-24">
          {organizationData.map((group, index) => {
            // Lógica para decidir el diseño: Si son pocos (Chairs), usamos tarjetas grandes. Si son muchos (PC), usamos lista compacta.
            const isLargeGroup = group.members.length > 6;

            return (
              <div key={index} className="animate-fade-in">
                
                {/* Título de la categoría */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <div className="h-px w-12 bg-blue-200 dark:bg-slate-700"></div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white text-center tracking-wide uppercase">
                    {group.role}
                  </h3>
                  <div className="h-px w-12 bg-blue-200 dark:bg-slate-700"></div>
                </div>

                {!isLargeGroup ? (
                  /* --- VISTA DE TARJETAS (Para Chairs) --- */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                    {group.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 text-center group relative overflow-hidden"
                      >
                        {/* Decoración de fondo sutil */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                        
                        <div className="relative z-10">
                          <h4 className="font-bold text-xl text-slate-800 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            {member.affiliation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* --- VISTA DE CUADRÍCULA COMPACTA (Para Program Committee / Track Chairs) --- */
                  <div className="bg-white dark:bg-slate-800/40 p-8 md:p-12 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
                      {group.members.map((member, idx) => (
                        <div key={idx} className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 cursor-default">
                          <span className="text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">
                            {/* SVG de usuario */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                          </span>
                          <div>
                            <span className="font-bold text-lg text-slate-800 dark:text-slate-200 block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {member.name}
                            </span>
                            {member.affiliation && (
                              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mt-1">
                                {member.affiliation}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Organization;