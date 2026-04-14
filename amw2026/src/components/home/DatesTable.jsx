import React from 'react';
import { importantDates } from '../../data/dates';
import { Link } from 'react-router-dom';

// Función auxiliar para iconos del timeline
const getEventIcon = (eventName) => {
  const name = eventName.toLowerCase();
  if (name.includes('cfp') || name.includes('starting')) return "🚀";
  if (name.includes('submission')) return "📝";
  if (name.includes('review')) return "🔍";
  if (name.includes('rebuttal')) return "⚖️";
  if (name.includes('notification')) return "✉️";
  if (name.includes('camera')) return "📄";
  if (name.includes('registration')) return "🎫";
  return "📅";
};

const DatesTable = () => {
  return (
    <section id="important-dates" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Important Dates
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Mark your calendar for the key milestones of MCyRA 2026.
          </p>
        </div>

        {/* =========================================
            VISTA 1: LÍNEA DE TIEMPO (TIMELINE)
        ========================================= */}
        <div className="relative max-w-4xl mx-auto mb-32">
          {/* La Línea Vertical */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-1.5 bg-slate-200 dark:bg-slate-800 rounded-full transform md:-translate-x-1/2"></div>

          {importantDates.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isPast = item.status === 'past';
            const isOpen = item.status === 'open';
            const icon = getEventIcon(item.event);
            
            // Lógica para detectar si es la tarjeta de Registration
            const isRegistration = item.event.toLowerCase().includes('registration');
            
            // USAMOS LINK EN LUGAR DE 'a'
            const CardWrapper = isRegistration ? Link : 'div';
            // USAMOS 'to' EN LUGAR DE 'href'
           const wrapperProps = isRegistration ? { to: '/attend' } : {};

            return (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal mb-12 last:mb-0 group">
                {/* Icono */}
                <div className={`absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full border-4 shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 ${
                  isOpen 
                    ? 'bg-blue-600 border-white dark:border-slate-900 shadow-blue-500/40 text-white text-2xl animate-pulse' 
                    : isPast
                      ? 'bg-slate-200 dark:bg-slate-800 border-white dark:border-slate-950 text-slate-400 text-xl grayscale'
                      : 'bg-white dark:bg-slate-900 border-blue-500 text-xl shadow-blue-500/20'
                }`}>
                  {icon}
                </div>

                {/* Tarjeta */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 text-left'}`}>
                  
                  {/* Aquí implementamos la etiqueta dinámica */}
                  <CardWrapper 
                    {...wrapperProps}
                    className={`block p-8 rounded-3xl shadow-sm border transition-all duration-300 hover:-translate-y-1 ${
                      isRegistration ? 'cursor-pointer hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500' : ''
                    } ${
                      isOpen 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20' 
                        : isPast
                          ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70'
                          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md'
                    }`}
                  >
                    <h4 className={`text-2xl font-black mb-3 ${isOpen ? 'text-white' : isPast ? 'text-slate-500 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-white'}`}>
                      {item.event}
                      {/* Agregamos una flechita visual solo para la tarjeta clickable */}
                      {isRegistration && <span className="inline-block ml-2 text-blue-500">↗</span>}
                    </h4>
                    <p className={`text-lg font-bold ${isOpen ? 'text-blue-100' : isPast ? 'text-slate-400 dark:text-slate-600' : 'text-blue-600 dark:text-blue-400'}`}>
                      {item.date}
                    </p>
                    {item.note && (
                      <p className={`mt-4 text-sm italic border-t pt-4 ${isOpen ? 'text-blue-100 border-blue-500/50' : isPast ? 'text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800' : 'text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-800'}`}>
                        {item.note}
                      </p>
                    )}
                  </CardWrapper>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DatesTable;