import React from 'react';
import { organizationData } from '../../data/organization'; // Ajusta la ruta si es necesario

const Organization = () => {
  return (
    <section id="organization" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Organization & Committees
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The conference is organized by a dedicated team of researchers
            focused on cybersecurity research and applications.
          </p>
        </div>

        {/* Iteración sobre los grupos */}
        <div className="space-y-16">
          {organizationData.map((group, index) => {
            // Verificamos si este grupo usa imágenes revisando el primer miembro
            const hasImages = group.members.some(member => member.image);

            return (
              <div key={index}>
                {/* Título de la categoría (ej. General Chairs) */}
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center border-b-2 border-blue-100 pb-4 w-max mx-auto px-8">
                  {group.role}
                </h3>

                {/* RENDERIZADO CONDICIONAL: Tarjetas con fotos vs Lista de texto */}
                {hasImages ? (
                  // --- VISTA DE TARJETAS CON FOTO ---
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {group.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group"
                      >
                        <div className="relative mb-4 inline-block">
                          <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300"></div>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-sm"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed mt-2">
                          {member.affiliation}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  // --- VISTA DE LISTA DE TEXTO ---
                  <div className="bg-white p-8 border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                      {group.members.map((member, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                          <div>
                            <span className="font-medium text-slate-700">{member.name}</span>
                            {member.affiliation && (
                              <span className="text-sm text-slate-500 block">
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