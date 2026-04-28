import React from 'react';

const CallForTutorials = () => {
  const dates = [
    { event: "Deadline for proposals", date: "August 17, 2026", icon: "📝" },
    { event: "Notification of acceptance", date: "September 7th, 2026", icon: "✉️" },
    { event: "Tutorial materials due", date: "October 12th, 2026", icon: "📚" },
    { event: "Tutorial dates", date: "Nov 9th or 10th, 2026", icon: "🗓️" }
  ];

  const requirements = [
    "Title, name of the speaker, and a short, informative abstract (5 - 10 lines).",
    "A detailed outline of the topics to be presented, with a short comment on each topic.",
    "A description of the target audience and pre-requisites expected from participants.",
    "A brief CV of the speaker indicating his/her background in the tutorial area.",
    "Contact address, phone, e-mail, webpage of the speaker.",
    "Technical requirements (equipment, hardware, and software)."
  ];

  const remarks = [
    "Tutorial materials include an electronic copy of tutorial slides or a tutorial paper, and any other material regarding software requirements.",
    "While the tutorials can include demos, the tutorial should serve an academic purpose, not a commercial one.",
    "Regarding equipment requirements, please consider that PCs can be provided to the attendants by the venue."
  ];

  return (
    <section id="call-for-tutorials" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ENCABEZADO E INTRODUCCIÓN --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Call for Tutorials
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
            The MCyRA 2026 Tutorial Organizing Committee invites you to submit tutorial proposals on all topics related to Cybersecurity.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A tutorial may cover surveys, theoretical issues, important advances, and practical applications. It is encouraged that the tutorials follow the same topics of our four main tracks.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full font-bold border border-blue-100 dark:border-blue-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Tutorials will be 4 hours in length
          </div>
        </div>

        {/* --- FECHAS CLAVE (Mini Timeline Grid) --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-8 text-center uppercase tracking-widest">
            Important Dates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dates.map((item, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{item.event}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- GRID DE DOS COLUMNAS: SUBMISSION & REMARKS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Columna 1: Proposal Submission */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white">Proposal Submission</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
              Proposals should be submitted electronically in <strong className="text-slate-800 dark:text-slate-200">Word or PDF format</strong> to the tutorial Chairs and must contain:
            </p>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Remarks */}
          <div className="bg-slate-50 dark:bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500 text-white rounded-xl shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white">Important Remarks</h3>
            </div>
            <ul className="space-y-6">
              {remarks.map((remark, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-amber-500 font-black text-xl">0{idx + 1}.</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{remark}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* --- CHAIRS Y CONTACTO --- */}
        <div className="bg-blue-900 dark:bg-slate-950 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-blue-800 dark:border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-8">Tutorial Chairs</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-10">
              <div className="group">
                <h4 className="text-xl font-bold text-blue-100 group-hover:text-white transition-colors">Raúl Monroy</h4>
                <p className="text-blue-300/80 text-sm font-medium mb-2">Tecnológico de Monterrey</p>
                <a href="mailto:raulm@tec.mx" className="text-blue-400 hover:text-blue-300 transition-colors">raulm@tec.mx</a>
              </div>
              <div className="hidden md:block w-px bg-blue-800"></div>
              <div className="group">
                <h4 className="text-xl font-bold text-blue-100 group-hover:text-white transition-colors">Jorge Rodríguez</h4>
                <p className="text-blue-300/80 text-sm font-medium mb-2">Tecnológico de Monterrey</p>
                <a href="mailto:jorger@tec.mx" className="text-blue-400 hover:text-blue-300 transition-colors">jorger@tec.mx</a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-blue-800/50 max-w-2xl mx-auto">
              <p className="text-blue-200/80 mb-4">
                For additional information please feel free to contact either or both tutorial chairs. For general conference information, reach out to:
              </p>
              <a href="mailto:mcyra2026@fi-b.unam.mx" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                mcyra2026@fi-b.unam.mx
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallForTutorials;