import React from 'react';
import { organizationData } from '../../data/organization';

const Organization = () => {
  return (
    <section id="organization" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Organization & Committees
          </h2>
          {/* Aplicamos max-w-2xl para que el párrafo no se estire de más */}
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The conference is organized by a dedicated team of researchers
            focused on cybersecurity research and applications.
          </p>
        </div>

        {/* Iteración sobre los grupos */}
        <div className="space-y-20">
          {organizationData.map((group, index) => {
            const hasImages = group.members.some(member => member.image);

            return (
              <div key={index} className="animate-fade-in">
                {/* Título de la categoría */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-10 text-center border-b-2 border-blue-100 dark:border-slate-800 pb-4 w-max mx-auto px-10">
                  {group.role}
                </h3>

                {hasImages ? (
                  /* --- VISTA DE TARJETAS CON FOTO --- */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {group.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-800/40 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 text-center group"
                      >
                        <div className="relative mb-6 inline-block">
                          {/* Efecto de halo azul al pasar el mouse */}
                          <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full scale-0 group-hover:scale-105 opacity-10 transition-transform duration-300"></div>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-white dark:border-slate-800 shadow-sm"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2 font-medium">
                          {member.affiliation}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* --- VISTA DE LISTA DE TEXTO --- */
                  <div className="bg-white dark:bg-slate-800/40 p-8 md:p-12 border border-slate-100 dark:border-slate-700/50 rounded-2xl shadow-sm transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                      {group.members.map((member, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <span className="text-blue-400 dark:text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">•</span>
                          <div>
                            <span className="font-bold text-slate-700 dark:text-slate-200 block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {member.name}
                            </span>
                            {member.affiliation && (
                              <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-tight block mt-0.5">
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