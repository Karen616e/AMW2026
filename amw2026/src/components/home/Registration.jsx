import { useState, useEffect } from 'react';
import { registrationFees } from '../../data/registration';
import { primaryActionButtonClassName } from '../../data/buttonStyles';

const Registration = () => {
  const currentFee = registrationFees[0];
  const upcomingFees = registrationFees.slice(1);
  const lateFee = upcomingFees[0] || currentFee;

  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para saber qué tipo de registro seleccionó (Early o Late)
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isPaymentPolicyOpen, setIsPaymentPolicyOpen] = useState(false);
  const [hasAgreedToPaymentPolicy, setHasAgreedToPaymentPolicy] = useState(false);

  const includedFeatures = [
    "Access to all conference sessions",
    "Coffee breaks and networking",
    "Conference materials and proceedings"
  ];

  // Función para abrir el modal
  const handleOpenModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  // --- MAGIA DE TALLY PARA REACT ---
  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Tally) {
          window.Tally.loadEmbeds();
        }
      };

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isModalOpen]);

  return (
    <section id="registration" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
            Registration
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Secure your spot at MCyRA 2026. Choose the pass that fits your profile.
          </p>
        </div>

        {/* ==========================================
            SECCIÓN 1: AUTORES (Azul -> Blanco)
            ========================================== */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <button
              type="button"
              onClick={() => setIsPaymentPolicyOpen(true)}
              className={primaryActionButtonClassName}
            >
              Registration Payment Policy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-8 text-center uppercase tracking-widest">
            For Authors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* --- AUTHOR EARLY (Blue) --- */}
            <div className="flex flex-col bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <span className="text-6xl">⏰</span>
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold">Early</h4>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/50 text-blue-50 text-sm font-bold w-fit mb-6 backdrop-blur-sm border border-blue-400/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Before September 30th
                </div>

                {/*<p className="text-blue-200 font-medium mb-8">For researchers, academics, and industry professionals.</p>*/}
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black">{currentFee.regular}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {includedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-medium text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative group">
                  <button 
                    type="button"
                    disabled={!hasAgreedToPaymentPolicy}
                    aria-describedby={!hasAgreedToPaymentPolicy ? 'early-payment-policy-tooltip' : undefined}
                    onClick={() => handleOpenModal('Author - Early')}
                    className={`w-full py-4 rounded-xl font-bold text-lg bg-white text-blue-700 transition-colors duration-300 shadow-lg ${hasAgreedToPaymentPolicy ? 'hover:bg-blue-50' : 'cursor-not-allowed opacity-50'}`}
                  >
                    Register as Author
                  </button>
                  {!hasAgreedToPaymentPolicy && (
                    <span
                      id="early-payment-policy-tooltip"
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-72 -translate-x-1/2 rounded-xl bg-slate-100 px-4 py-3 text-center text-xs font-medium leading-relaxed text-slate-900 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-200"
                    >
                      Please read and accept the Registration Payment Policy above to enable author registration.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* --- AUTHOR LATE (White) --- */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-2xl font-bold text-slate-800 dark:text-white">Late</h4>
                <span className="text-4xl opacity-30 dark:opacity-50">💼</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-bold w-fit mb-6 border border-amber-200 dark:border-amber-800/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                September 30th and after
              </div>

              {/*<p className="text-slate-500 dark:text-slate-400 font-medium mb-8">For researchers, academics, and industry professionals.</p>*/}
              
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-blue-600 dark:text-blue-400">{lateFee.regular}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative group">
                <button 
                  type="button"
                  disabled={!hasAgreedToPaymentPolicy}
                  aria-describedby={!hasAgreedToPaymentPolicy ? 'late-payment-policy-tooltip' : undefined}
                  onClick={() => handleOpenModal('Author - Late')}
                  className={`w-full py-4 rounded-xl font-bold text-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 transition-colors duration-300 ${hasAgreedToPaymentPolicy ? 'hover:bg-blue-600 hover:text-white' : 'cursor-not-allowed opacity-50'}`}
                >
                  Register as Author
                </button>
                {!hasAgreedToPaymentPolicy && (
                  <span
                    id="late-payment-policy-tooltip"
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-72 -translate-x-1/2 rounded-xl bg-slate-100 px-4 py-3 text-center text-xs font-medium leading-relaxed text-slate-900 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-200"
                  >
                    Please read and accept the Registration Payment Policy above to enable author registration.
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================
            SECCIÓN 2: ESTUDIANTES (Blanco -> Azul)
            ========================================== 
        <div className="mb-16">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-8 text-center uppercase tracking-widest">
            For Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
             --- STUDENT EARLY (White) --- 
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">⏰</span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Early</h4>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold w-fit mb-6 border border-green-200 dark:border-green-800/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Before August 7th
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">For currently enrolled undergraduate and graduate students.</p>
              
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-blue-600 dark:text-blue-400">{currentFee.student}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleOpenModal('Student - Early')}
                className="w-full py-4 rounded-xl font-bold text-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Register as Student
              </button>
            </div>

            {/* --- STUDENT LATE (Blue) --- 
            <div className="flex flex-col bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold">Late</h4>
                  <span className="text-4xl opacity-50">🎓</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/50 text-blue-50 text-sm font-bold w-fit mb-6 backdrop-blur-sm border border-blue-400/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  August and after
                </div>

                <p className="text-blue-200 font-medium mb-8">For currently enrolled undergraduate and graduate students.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black">{lateFee.student}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {includedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-medium text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleOpenModal('Student - Late')}
                  className="w-full py-4 rounded-xl font-bold text-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                >
                  Register as Student
                </button>
              </div>
            </div>

          </div>
        </div>*/}

      </div>

      {/* ==========================================
          MODAL DE REGISTRO CON TALLY EMBED
          ========================================== */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          
          <div 
            className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl relative animate-fade-in-down border border-slate-200 dark:border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="p-6 md:px-10 md:pt-10 md:pb-6 flex-shrink-0 border-b border-slate-100 dark:border-slate-700 relative z-10">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-700 rounded-full p-2 z-20"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1 pr-10">Registration Form</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Selected Plan: <strong className="text-blue-600 dark:text-blue-400">{selectedPlan}</strong></p>
            </div>

            <div className="flex-grow overflow-y-auto w-full relative rounded-b-3xl">
              <iframe 
                  data-tally-src={`https://tally.so/embed/eqGA4k?alignLeft=1&dynamicHeight=1&plan=${encodeURIComponent(selectedPlan)}`} 
                  loading="lazy" 
                  width="100%" 
                  height="1075" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Mexican Conference on Cybersecurity Research and Applications"
                ></iframe>
            </div>

          </div>
        </div>
      )}

      {isPaymentPolicyOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsPaymentPolicyOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-800 md:p-10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-policy-title"
          >
            <button
              type="button"
              onClick={() => setIsPaymentPolicyOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-400 transition-colors hover:text-slate-600 dark:bg-slate-700 dark:hover:text-white"
              aria-label="Close payment policy"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 id="payment-policy-title" className="mb-4 pr-10 text-2xl font-black text-slate-800 dark:text-white">
              Registration Payment Policy
            </h3>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              The following registration policy applies to all accepted papers at MCyRA 2026.
            </p>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">1</span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Author Registration Requirement</h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    Each accepted paper must have at least one registered author. Papers without a completed registration by the corresponding deadline may be excluded from the conference program and proceedings.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">2</span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Registration Fee</h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    The registration fee is charged per accepted paper. Consequently, a separate registration must be completed for each accepted paper, regardless of whether the same individual is an author or co-author of multiple papers.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">3</span>
                <div className="min-w-0 flex-1">
                  <h4 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Payment Method</h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    Registration fees must be paid by bank transfer using the bank account information provided below. Participants are encouraged to retain proof of payment until their registration has been confirmed.
                  </p>

                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/50 dark:bg-blue-950/30">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Bank transfer details</p>
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Bank</dt>
                        <dd className="mt-1 font-semibold text-slate-800 dark:text-white">BBVA Bancomer</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Account number</dt>
                        <dd className="mt-1 font-mono font-semibold tracking-wide text-slate-800 dark:text-white">0127473257</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Name of the holder</dt>
                        <dd className="mt-1 font-semibold text-slate-800 dark:text-white">ASOCIACION MEXICANA DE RECONOCIMIENTO DE PATRONES AC</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Standard Key (CLABE)</dt>
                        <dd className="mt-1 break-all font-mono font-semibold tracking-wide text-slate-800 dark:text-white">012654001274732576</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Swift</dt>
                        <dd className="mt-1 font-mono font-semibold tracking-wide text-slate-800 dark:text-white">BCMRMXMMPYM</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Branch</dt>
                        <dd className="mt-1 font-semibold text-slate-800 dark:text-white">5106</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Address</dt>
                        <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">Calle Vistas de Mayorazgo 7 B, Vistas del Angel, San Andres Cholula, Pue Mexico CP 72824</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">4</span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Invoice (Factura) Requests</h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    Participants requiring a Mexican tax invoice (factura) must provide their official tax information, including their Constancia de Situación Fiscal, at the time of registration.
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">The invoice will be issued with the mandatory concept:</p>
                  <blockquote className="mt-3 rounded-xl border-l-4 border-blue-600 bg-slate-50 px-4 py-3 font-semibold text-slate-800 dark:bg-slate-700/50 dark:text-white">
                    “Inscripción a MCyRA 2026”
                  </blockquote>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                    This invoice concept cannot be modified after the invoice has been issued. Participants who require a different invoice concept must notify the Organizing Committee before making the bank transfer and before the invoice is generated.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">5</span>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Payment Confirmation</h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    Registration will be considered complete only after the payment has been received, verified, and confirmed by the Organizing Committee.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-700">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/40">
                <input
                  type="checkbox"
                  checked={hasAgreedToPaymentPolicy}
                  onChange={(event) => setHasAgreedToPaymentPolicy(event.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
                />
                <span className="font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  I have read and agree to the Registration Payment Policy.
                </span>
              </label>

              <button
                type="button"
                disabled={!hasAgreedToPaymentPolicy}
                onClick={() => setIsPaymentPolicyOpen(false)}
                className={`${primaryActionButtonClassName} mt-5 w-full justify-center disabled:cursor-not-allowed disabled:opacity-50`}
              >
                Accept and continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Registration;
