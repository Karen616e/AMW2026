import React from 'react';

const CallForStudentConsortium = () => {
  const dates = [
    { event: "Submission Deadline", date: "August 28, 2026", icon: "📝" },
    { event: "Notification of Acceptance", date: "September 11, 2026", icon: "✉️" },
    { event: "Final Camera-Ready", date: "September 25, 2026", icon: "📸" },
    { event: "Presentation Session", date: "Nov 9 - 10, 2026", icon: "🎤" }
  ];

  const guidelines = [
    "Authors must submit an original blind abstract written in English with a maximum of two (2) printed pages.",
    "Submissions must follow the One-Column Conference Format (Springer template).",
    "A recommendation letter from the student's advisor must be submitted to consider the submission for review.",
    "It is mandatory to select the 'Student Consortium' track during submission on the CMT platform."
  ];

  return (
    <section id="student-consortium" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ENCABEZADO E INTRODUCCIÓN --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Call for Student Consortium
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
            The MCyRA 2026 Student Consortium Organizing Committee invites graduate students and early-stage researchers to submit their work.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            The forum aims to provide a setting for participants to present their work in progress, articulate their research plans, and receive constructive feedback on their proposals and results from established researchers in the field.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full font-bold">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Ciudad Universitaria, UNAM, in Mexico City — November 9 and 10, 2026
          </div>
        </div>

        {/* --- FECHAS CLAVE --- */}
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

        {/* --- SUBMISSION GUIDELINES Y PUBLICACIÓN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-6">Submission Guidelines</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Topics of interest are all the ones related to cybersecurity, including those of the MCyRA’s four main tracks.
            </p>
            <ul className="space-y-4 mb-8">
              {guidelines.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FMCyRA2026" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Submit to Student Consortium
            </a>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 md:p-10 rounded-3xl border border-blue-100 dark:border-blue-800/50 flex flex-col justify-center">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Publication Opportunity</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The best-evaluated work will be invited to submit an extended version to be considered for publication in the <strong className="text-slate-800 dark:text-slate-100">Research in Computing Science Journal</strong>.
            </p>
            <a href="http://www.cicling.org/magnocongreso/rcs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 mt-auto">
              Visit Journal Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>

        {/* --- AI POLICY WARNING --- */}
        <div className="mb-16 p-8 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-3xl">
          <h4 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Plagiarism and Use of AI Policy
          </h4>
          <p className="text-amber-900/80 dark:text-amber-200/70 font-medium">
            Presenting AI-generated text as your own work is strictly prohibited and treated as academic misconduct. AI must be fully disclosed, properly cited, and used only for editing, planning, or idea generation.
          </p>
        </div>

        {/* --- CHAIRS --- */}
        <div className="bg-slate-50 dark:bg-slate-800/30 rounded-3xl p-10 border border-slate-100 dark:border-slate-800 text-center">
          <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-8">Student Consortium Chairs</h3>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
            <div>
              <h4 className="text-xl font-bold text-slate-700 dark:text-slate-200">Gina Gallegos-García</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">CIC-IPN, Mexico</p>
            </div>
            <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-700"></div>
            <div>
              <h4 className="text-xl font-bold text-slate-700 dark:text-slate-200">Lil M. Rodríguez-Henríquez</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">DACB-UJAT, Mexico</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallForStudentConsortium;