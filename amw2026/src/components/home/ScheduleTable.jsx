import React, { useState } from 'react';

const MAPS_URL = "https://maps.app.goo.gl/4xz6xJaWTK2Xwtde6";

const ScheduleTable = () => {
  // Estados para controlar la apertura/cierre de los Pop-ups
  const [isBartModalOpen, setIsBartModalOpen] = useState(false);
  const [isGustavoModalOpen, setIsGustavoModalOpen] = useState(false);
  const [isSantiagoModalOpen, setIsSantiagoModalOpen] = useState(false);
  const [isKeynoteModalOpen, setIsKeynoteModalOpen] = useState(false);
  const [isTutorial1ModalOpen, setIsTutorial1ModalOpen] = useState(false);
  const [isTutorial2ModalOpen, setIsTutorial2ModalOpen] = useState(false);
  const [isTutorial3ModalOpen, setIsTutorial3ModalOpen] = useState(false);

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-[#001449] dark:text-white tracking-tight">
            Program
          </h1>
          <div className="w-16 h-1.5 bg-[#005BC5] rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl">
            Schedule of activities and sessions · MCyRA 2026
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm italic mt-2">
            Raúl J. Marsal Auditorium. Building S, First Floor, Anexo de Ingeniería. CU, UNAM
          </p>
        </div>

        {/* Contenedor de la tabla */}
        <div className="overflow-x-auto shadow-xl rounded-lg border-2 border-black bg-white">
          <table className="w-full text-center border-collapse border border-black text-sm">
            
            {/* Header: Días */}
            <thead>
              <tr className="bg-[#001449] text-white">
                <th className="p-3 w-32 font-bold uppercase text-xs tracking-wider border border-black text-slate-200 text-center align-middle">
                  Time
                </th>
                <th className="p-3 border border-black w-1/4 text-center align-middle">
                  <div className="font-extrabold text-base text-white">10-nov</div>
                </th>
                <th className="p-3 border border-black w-1/4 text-center align-middle">
                  <div className="font-extrabold text-base text-white">11-nov</div>
                </th>
                <th className="p-3 border border-black w-1/4 text-center align-middle">
                  <div className="font-extrabold text-base text-white">12-nov</div>
                </th>
                <th className="p-3 border border-black w-1/4 text-center align-middle">
                  <div className="font-extrabold text-base text-white">13-nov</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* 9:00 - 9:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  9:00 - 9:30
                </td>
                <td className="p-0 border border-black bg-[#164775] text-center align-middle">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full p-2 text-white font-semibold hover:underline hover:bg-sky-800/50 transition-colors cursor-pointer"
                    title="View location on Google Maps"
                  >
                    Registration
                  </a>
                </td>
                <td rowSpan={2} className="p-0 border border-black bg-[#164775] text-center align-middle">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full p-2 text-white font-semibold hover:underline hover:bg-sky-800/50 transition-colors cursor-pointer"
                    title="View location on Google Maps"
                  >
                    Registration
                  </a>
                </td>
                <td rowSpan={2} className="p-0 border border-black bg-[#164775] text-center align-middle">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full p-2 text-white font-semibold hover:underline hover:bg-sky-800/50 transition-colors cursor-pointer"
                    title="View location on Google Maps"
                  >
                    Registration
                  </a>
                </td>
                <td rowSpan={2} className="p-0 border border-black bg-[#164775] text-center align-middle">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full p-2 text-white font-semibold hover:underline hover:bg-sky-800/50 transition-colors cursor-pointer"
                    title="View location on Google Maps"
                  >
                    Registration
                  </a>
                </td>
              </tr>

              {/* 9:30 - 10:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  9:30 - 10:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#012677]/80 text-white font-medium text-center align-middle">
                  <span className="font-bold">Opening MCyRA 2026 & RAMC</span>
                  <br />
                  Introduction
                </td>
              </tr>

              {/* 10:00 - 10:30 & 10:30 - 11:00 (Keynotes) */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  10:00 - 10:30
                </td>
                
                {/* Bart Mennink */}
                <td 
                  rowSpan={2} 
                  className="p-2 border border-black bg-[#001449] text-white font-normal text-xs text-center align-middle leading-tight"
                >
                  <div 
                    onClick={() => setIsBartModalOpen(true)}
                    className="font-bold text-sm text-white mb-1 hover:underline cursor-pointer inline-block"
                    title="Click to view Bart Mennink's bio"
                  >
                    Bart Mennink
                  </div>
                  <div>Maastricht University</div>
                  <div>The Netherlands</div>
                  <span 
                    onClick={() => setIsKeynoteModalOpen(true)}
                    className="font-semibold text-sky-300 hover:text-sky-100 hover:underline mt-1 inline-block cursor-pointer bg-sky-950/60 px-2 py-0.5 rounded border border-sky-400/30 transition-colors"
                    title="Click to view Keynote details"
                  >
                    Keynote
                  </span>
                </td>

                {/* Gustavo Betarte */}
                <td 
                  rowSpan={2} 
                  className="p-2 border border-black bg-[#001449] text-white font-normal text-xs text-center align-middle leading-tight"
                >
                  <div 
                    onClick={() => setIsGustavoModalOpen(true)}
                    className="font-bold text-sm text-white mb-1 hover:underline cursor-pointer inline-block"
                    title="Click to view Gustavo Betarte's bio"
                  >
                    Gustavo Betarte
                  </div>
                  <div>Universidad de la República</div>
                  <div>Uruguay</div>
                  <span className="font-semibold text-sky-300 mt-1 inline-block">Keynote</span>
                </td>

                {/* Santiago Torres Arias */}
                <td 
                  rowSpan={2} 
                  className="p-2 border border-black bg-[#001449] text-white font-normal text-xs text-center align-middle leading-tight"
                >
                  <div 
                    onClick={() => setIsSantiagoModalOpen(true)}
                    className="font-bold text-sm text-white mb-1 hover:underline cursor-pointer inline-block"
                    title="Click to view Santiago Torres Arias's bio"
                  >
                    Santiago Torres Arias
                  </div>
                  <div>Purdue University</div>
                  <div>USA</div>
                  <span className="font-semibold text-sky-300 mt-1 inline-block">Keynote</span>
                </td>
              </tr>

              {/* 10:30 - 11:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  10:30 - 11:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#608bae] text-slate-950 font-bold text-center align-middle">
                  Student Consortium
                </td>
              </tr>

              {/* 11:00 - 11:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  11:00 - 11:30
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold text-center align-middle">
                  Coffee break
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold text-center align-middle">
                  Coffee break
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold text-center align-middle">
                  Coffee break
                </td>
              </tr>

              {/* --- INTERVALOS DE 10 MINUTOS DESDE LAS 11:30 HASTA LAS 13:10 --- */}

              {/* 11:30 - 11:40 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  11:30 - 11:40
                </td>
                <td rowSpan={3} className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold text-center align-middle">
                  Coffee break
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Auditability and Verifiability in Dynamic Security Service Workflows: A State-of-the-Art Review</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Cecilia Angulo Domínguez, Arturo Díaz Pérez, José González Compeán</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">On The Complexity Comparison of Mined ABAC Policy Rule Sets</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Hector Diaz-Rodriguez, Arturo Diaz-Perez</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Detecting Jailbreak attacks through Unrestricted Model responses for Large Language Models</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Fabio Sánchez-Arévalo, Alfonso Martínez-Cruz, Raziel Campos-Sánchez</div>
                </td>
              </tr>

              {/* 11:40 - 11:50 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  11:40 - 11:50
                </td>
              </tr>

              {/* 11:50 - 12:00 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  11:50 - 12:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">A Noise Reduction Method for Privacy-Preserving Logistic Regression Training</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Alejandro Ojeda-Xiqui, Miguel Morales-Sandoval, Shanel Reyes-Palacios</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Design and Implementation of Secure Storage Region Using SRAM PUFs for IoT Devices</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Alejandro Salinas Victorino, Claudia Feregrino Uribe, Raziel Campos Sánchez, Alejandro Peñuelas Angulo</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Online Machine Learning Approach for Production-Ready DDoS Detection</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Jose de Jesus Zapata Lara, Heidy Marisol Marin Castro</div>
                </td>
              </tr>

              {/* 12:00 - 12:10 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:00 - 12:10
                </td>
                <td rowSpan={6} className="p-2 border border-black bg-[#608bae] text-slate-950 font-bold text-center align-middle">
                  Student Consortium
                </td>
              </tr>

              {/* 12:10 - 12:20 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:10 - 12:20
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Assessing the Impact of Standardized Post-Quantum Digital Signatures on Self-Sovereign Identity Artifacts</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Israel Jaudy Perez-Bermudez, Miguel Morales-Sandoval, Lil Maria Xibai Rodriguez Henriquez, Iván Olivera Romero</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">For a Safer University Internet: Detecting VPN Tunnels with Machine Learning</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Francisco Vega Salazar, Alejandra Silva Trujillo, Juan Cuevas Tello</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">SpearPhishMX: Dataset sanitizado de correos en español y benchmark para la detección de spear-phishing</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Juan Diaz Zeferino, Alfonso Martínez Cruz, Lázaro Bustio Martínez</div>
                </td>
              </tr>

              {/* 12:20 - 12:30 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:20 - 12:30
                </td>
              </tr>

              {/* 12:30 - 12:40 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:30 - 12:40
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">FPGA Design for Shamir Secret-Sharing Keys</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Martha Morales Meza, Arturo Díaz Pérez, Pedro Mejía Álvarez</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Network Traffic Classifier</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Emiliano Angeles Prado, Juan Carlos Cuevas Tello, Alejandra Guadalupe Silva Trujillo</div>
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Dataset Protection through Deception Techniques: A Systematic Review</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Eleazar Aguirre Anaya, Daniel Iván Castro Lara, Eleazar Aguirre Mandujano</div>
                </td>
              </tr>

              {/* 12:40 - 12:50 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:40 - 12:50
                </td>
              </tr>

              {/* 12:50 - 13:00 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  12:50 - 13:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-slate-950 text-xs text-center align-middle">
                  <div className="font-bold">Search for points with short periods in the AES round function with Constant Keys</div>
                  <div className="italic text-[11px] text-slate-800 mt-0.5">Luis A. Pérez Sarmiento, Abraham Gutierrez, Cuauhtemoc Mancillas -López</div>
                </td>
                <td className="p-2 border border-black bg-[#00B4FC]"></td>
                <td className="p-2 border border-black bg-[#00B4FC]"></td>
              </tr>

              {/* 13:00 - 13:10 */}
              <tr>
                <td className="px-3 py-1 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  13:00 - 13:10
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold text-center align-middle">
                  Lunch
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold text-center align-middle">
                  Lunch
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#012677]/80 text-white font-bold text-center align-middle">
                  Closing and lunch
                </td>
              </tr>

              {/* 13:10 - 14:00 */}
              <tr className="h-14">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  13:10 - 14:00
                </td>
                <td className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold text-center align-middle">
                  Lunch
                </td>
              </tr>

              {/* 14:00 - 18:00 */}
              <tr className="h-20">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black text-center align-middle">
                  14:00 - 18:00
                </td>

                {/* Tutorial 1 */}
                <td 
                  onClick={() => setIsTutorial1ModalOpen(true)}
                  className="p-2 border border-black bg-white text-[#001449] font-bold text-xs leading-snug text-center align-middle cursor-pointer hover:bg-slate-100 transition-colors group"
                  title="Click to view details for Tutorial 1"
                >
                  <span className="group-hover:underline">Tutorial 1:</span><br />
                  <span className="font-normal group-hover:underline">Hands-on Post-quantum cryptography</span>
                </td>
                
                {/* Tutorial 2 */}
                <td 
                  onClick={() => setIsTutorial2ModalOpen(true)}
                  className="p-2 border border-black bg-white text-[#001449] font-bold text-xs leading-snug text-center align-middle cursor-pointer hover:bg-slate-100 transition-colors group"
                  title="Click to view details for Tutorial 2"
                >
                  <span className="group-hover:underline">Tutorial 2:</span><br />
                  <span className="font-normal group-hover:underline">Introduction to pre-quantum cryptography</span>
                </td>

                {/* Tutorial 3 */}
                <td 
                  onClick={() => setIsTutorial3ModalOpen(true)}
                  className="p-2 border border-black bg-white text-[#001449] font-bold text-xs leading-snug text-center align-middle cursor-pointer hover:bg-slate-100 transition-colors group"
                  title="Click to view details for Tutorial 3"
                >
                  <span className="group-hover:underline">Tutorial 3:</span><br />
                  <span className="font-normal group-hover:underline">AI in cybersecurity</span>
                </td>

                <td className="p-2 border border-black bg-slate-100">
                  {/* Bloque libre */}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: BART MENNINK */}
      {isBartModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsBartModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBartModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-4 text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-[#001449] dark:text-white">
                Bart Mennink
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                Maastricht University, The Netherlands
              </p>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 mb-2 text-left">
              BIO.
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              Bart Mennink is a full professor at Maastricht University, The Netherlands. He obtained his PhD <i className="italic">summa cum laude</i> with congratulations of the Board of Examiners from KU Leuven, and subsequently held a research position at Radboud University. His research focuses on the design and provable security of symmetric cryptographic protocols. He has co-designed several cryptographic schemes, including Chaskey, COLM, Elephant, ISAP, and ddd-AES, and contributed to numerous in-depth security analyses of existing modes. Bart Mennink has received multiple awards and prizes for both research and education.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsBartModalOpen(false)}
                className="px-4 py-2 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: GUSTAVO BETARTE */}
      {isGustavoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsGustavoModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsGustavoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-4 text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-[#001449] dark:text-white">
                Gustavo Betarte
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                Universidad de la República, Uruguay
              </p>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 mb-2 text-left">
              BIO.
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              Gustavo Betarte is a Full Professor of the Department of Computer Science (InCo) and principal researcher and head of the Computer Security team (GSI) of FING-Udelar. He is member of the Uruguayan Researchers National System (SNI, Level II) and an active researcher (Grado 5) of the Informatics Area of PEDECIBA. Since 2006 he is the Technical Director of the Computer Security Consulting Team of Tilsor SA, an Uruguayan IT company. His research interests include formal methods, program verification, software and system security and foundations of computer science. He is currently working on the application of knowledge discovery techniques for adaptive software security, the formal definition and verification of security properties of critical systems and the design and implementation of cyber ranges.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsGustavoModalOpen(false)}
                className="px-4 py-2 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SANTIAGO TORRES ARIAS */}
      {isSantiagoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsSantiagoModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSantiagoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-4 text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-[#001449] dark:text-white">
                Santiago Torres Arias
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                Purdue University, USA
              </p>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 mb-2 text-left">
              BIO.
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              Santiago’s current research focuses on securing the software development life-cycle. Before that, he focused on secure password storage mechanisms and update systems. Because of this, he was the team lead of in-toto, a framework to secure the software development life-cycle, as well as PolyPasswordHasher, a password storage mechanism that’s incredibly resilient to offline password cracking. Also, he is a contributor for The Update Framework (TUF), which is the software update system being integrated on a variety of projects like Docker, CPAN, and others.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsSantiagoModalOpen(false)}
                className="px-4 py-2 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: KEYNOTE DE BART MENNINK */}
      {isKeynoteModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsKeynoteModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsKeynoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 block mb-1">
                Keynote
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#001449] dark:text-white leading-snug">
                Basics of Symmetric Cryptography
              </h2>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                Speaker: Bart Mennink (Maastricht University, The Netherlands)
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              <p>
                Modern cryptography relies on fundamental building blocks whose security properties enable the design of more complex cryptographic constructions. Among these, the Advanced Encryption Standard (AES) plays a central role. As a block cipher, AES defines a permutation over 128-bit strings for each fixed secret key. However, transforming this primitive into secure mechanisms for data encryption, message authentication, and authenticated encryption requires carefully designed modes of operation.
              </p>
              <p>
                Understanding the security of these modes is essential, as their guarantees depend not only on the underlying block cipher but also on how it is used. In this keynote, we will explore the fundamental principles behind the design and security analysis of block cipher modes of operation, with particular emphasis on how their security guarantees can be formally established.
              </p>
              <p>
                Starting with counter (CTR) mode as an intuitive example, we will progressively examine more sophisticated constructions, including CENC, and discuss how their designs provide stronger security guarantees. We will then extend the discussion to the use of AES for message authentication and authenticated encryption, highlighting the key principles that connect these cryptographic mechanisms.
              </p>
              <p>
                Through this progression, the keynote aims to provide insights into how simple cryptographic primitives can be transformed into powerful security mechanisms, illustrating the importance of rigorous security analysis in the design of trustworthy cryptographic systems.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsKeynoteModalOpen(false)}
                className="px-4 py-2 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL AMPLIO: TUTORIAL 1 (MIGUEL MORALES-SANDOVAL) */}
      {isTutorial1ModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsTutorial1ModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTutorial1ModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 block mb-1">
                Tutorial 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001449] dark:text-white leading-tight">
                Hands-on Post-quantum cryptography
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-2">
                Speaker: <span className="text-[#005BC5] dark:text-sky-400 font-bold">Miguel Morales-Sandoval</span>
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-left">
              
              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Abstract
                </h3>
                <p className="text-justify">
                  Most daily today digital services rely on the now widely called “conventional” public key cryptography (RSA and ECC). However, the latest advancements in Quantum Computing suggest that one quantum computer with enough qubits able to break RSA and ECC is foreseen by 2035 or before, thus making both of these systems obsolete. In 2024, the National Institute of Standards and Technology (NIST) released the first suite of new quantum-resistant crypto algorithms. This fact initiated a transition to those new post-quantum cryptographic algorithms, but few bachelor or graduate programs teach them. Even more, there is still a misunderstanding about what PQC is, and how and when to use them.
                </p>
                <p className="text-justify mt-2">
                  This tutorial introduces Post-quantum cryptography, its motivation and context as well as discusses the myths around it. Then, the tutorial reviews the fundamentals of PQC and particularizes on the NIST crypto suite. The tutorial covers a practice session where the two PQC use cases are conceptually and practically detailed: key encapsulation and digital signatures. The tutorial concludes with the development of a laboratory, where the attendants develop a basic quantum-safe end-to-end encryption module.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Topics
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Myths and realities on PQC</li>
                  <li>The real threat: far or near</li>
                  <li>Fundamentals of post-quantum cryptography</li>
                  <li>Post-quantum cryptography families</li>
                  <li>The NIST’s PQC suite: KEM and DSA</li>
                  <li>KEM-based algorithm implementations</li>
                  <li>DSA-based algorithms implementations</li>
                  <li>Integrated laboratory</li>
                  <li>An insight to research and development on PQC</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Audience
                </h3>
                <p className="text-justify">
                  The main audience for this tutorial is bachelor, graduate students, or professionals with interest in cryptography. It is highly desirable but not a strict requirement that the participants have knowledge of public key cryptography and programming skills.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Brief CV of the Speaker
                </h3>
                <p className="text-justify">
                  Miguel Morales-Sandoval is a Computer Science researcher at the National Institute for Astrophysics, Optics and Electronics (INAOE), Mexico, with extensive experience in cryptography, cybersecurity, and privacy-enhancing technologies. His research focuses on translating advanced cryptographic techniques into practical solutions for emerging security challenges. His current work places particular emphasis on post-quantum cryptography (PQC), including the evaluation and deployment of quantum-resistant encryption and digital signatures, their integration into existing security infrastructures, and the challenges of transitioning organizations toward quantum-safe cybersecurity. His broader expertise includes homomorphic encryption, privacy-preserving machine learning, blockchain and decentralized identity, with applications in data-intensive and distributed systems. Through his research, graduate supervision, and collaboration with academic and industry communities, he contributes to the development of practical cybersecurity technologies capable of addressing the security and privacy challenges posed by the transition to the post-quantum era.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Contact information
                </h3>
                <div className="space-y-1">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:mmorales@inaoep.mx" className="text-[#005BC5] hover:underline">
                      mmorales@inaoep.mx
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="https://ccc.inaoep.mx/~mmorales/" target="_blank" rel="noopener noreferrer" className="text-[#005BC5] hover:underline">
                      https://ccc.inaoep.mx/~mmorales/
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Technical requirements
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Preferably, bring your own device.</li>
                  <li>Internet connection.</li>
                </ul>
              </div>

            </div>

            <div className="mt-8 flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4">
              <button
                onClick={() => setIsTutorial1ModalOpen(false)}
                className="px-5 py-2.5 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-bold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL AMPLIO: TUTORIAL 2 (ROBERTO GÓMEZ CÁRDENAS) - TRADUCIDO AL INGLÉS */}
      {isTutorial2ModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsTutorial2ModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTutorial2ModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 block mb-1">
                Tutorial 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001449] dark:text-white leading-tight">
                Introduction to Pre-Quantum Cryptography
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-2">
                Instructor: <span className="text-[#005BC5] dark:text-sky-400 font-bold">Roberto Gómez Cárdenas</span>
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-left">
              
              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Abstract
                </h3>
                <p className="text-justify">
                  Cryptography is one of the fundamental pillars of information security and an essential component for protecting organizational digital assets. Its application ensures the confidentiality, integrity, and authenticity of information, forming the foundation of numerous daily security mechanisms such as data encryption, secure communications, and digital signatures.
                </p>
                <p className="text-justify mt-2">
                  In this tutorial, we will address the fundamental principles of modern cryptography and put these concepts into practice using open-source tools to reinforce the acquired knowledge. We will analyze the operation of the AES cryptosystem as a representative of symmetric cryptography, as well as the mathematical foundations of RSA, one of the most widely used asymmetric cryptography algorithms.
                </p>
                <p className="text-justify mt-2">
                  Additionally, the concept of steganography will be introduced, exploring its main features and applications while highlighting the key differences between hiding information and encrypting information. By the end of the tutorial, participants will understand the core concepts underlying modern cryptographic mechanisms and experience their practical application in real-world scenarios.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Topics
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cryptology, cryptography, and cryptanalysis</li>
                  <li>Symmetric cryptosystems</li>
                  <li>The AES cryptosystem</li>
                  <li>Hands-on practice with VeraCrypt</li>
                  <li>Asymmetric cryptosystems</li>
                  <li>The RSA cryptosystem</li>
                  <li>Hands-on practice with Kleopatra</li>
                  <li>Steganography</li>
                  <li>Use of steganographic tools</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Audience
                </h3>
                <p className="text-justify">
                  Aimed at students, professionals, and technology enthusiasts who wish to understand how cryptography protects information in the digital world. The tutorial is designed for participants with no prior experience in cryptography, combining theoretical concepts with practical exercises that facilitate comprehension of the primary encryption mechanisms used today.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Instructor Bio
                </h3>
                <p className="text-justify">
                  Dr. Roberto Gómez Cárdenas is Chief Information Security Officer (CISO) at a financial institution, where he leads cybersecurity strategy and regulatory compliance before CNBV and Banxico. He possesses extensive experience leading and participating in security teams within banks and brokerage firms across the Mexican financial sector.
                </p>
                <p className="text-justify mt-2">
                  He earned his Ph.D. in Computer Science from the University of Paris 8, conducting research at INRIA-Rocquencourt, France. He was a research professor at Tecnológico de Monterrey, Estado de México Campus, where he directed Master's and Ph.D. dissertations in information security and cryptography, and was a member of the National System of Researchers (SNI).
                </p>
                <p className="text-justify mt-2">
                  He is an author of academic and outreach articles, a speaker at national and international forums, and a professor in graduate programs as well as the Executive Diploma in Information Security Management, where he serves as academic coordinator.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Contact Information
                </h3>
                <div className="space-y-1">
                  <p><strong>Email 1:</strong> rogoca [at] gmail.com</p>
                  <p><strong>Email 2:</strong> rogomez [at] cryptomex.org</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="http://cryptomex.org" target="_blank" rel="noopener noreferrer" className="text-[#005BC5] hover:underline">
                      http://cryptomex.org
                    </a>
                  </p>
                  <p><strong>X:</strong> @cryptomex</p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/roberto-g%C3%B3mez-c%C3%A1rdenas-b2675126/" target="_blank" rel="noopener noreferrer" className="text-[#005BC5] hover:underline">
                      View LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Technical Requirements
                </h3>
                <p className="mb-2">Windows machine with the following software installed:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>VeraCrypt:</strong>{" "}
                    <a href="https://veracrypt.io/en/Downloads.html" target="_blank" rel="noopener noreferrer" className="text-[#005BC5] hover:underline">
                      https://veracrypt.io/en/Downloads.html
                    </a>
                  </li>
                  <li>
                    <strong>Kleopatra:</strong>{" "}
                    <a href="https://kleopatra.app/tools/kleopatra-download" target="_blank" rel="noopener noreferrer" className="text-[#005BC5] hover:underline">
                      https://kleopatra.app/tools/kleopatra-download
                    </a>
                  </li>
                </ul>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Internet connection to download software and access websites.
                </p>
              </div>

            </div>

            <div className="mt-8 flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4">
              <button
                onClick={() => setIsTutorial2ModalOpen(false)}
                className="px-5 py-2.5 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-bold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL AMPLIO: TUTORIAL 3 (JORGE RODRÍGUEZ RUIZ) */}
      {isTutorial3ModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setIsTutorial3ModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTutorial3ModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              &times;
            </button>

            <div className="mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005BC5] dark:text-sky-400 block mb-1">
                Tutorial 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001449] dark:text-white leading-tight">
                AI in Cybersecurity
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-2">
                Speaker: <span className="text-[#005BC5] dark:text-sky-400 font-bold">Jorge Rodríguez Ruiz</span>
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-left">
              
              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Abstract
                </h3>
                <p className="text-justify">
                  Currently, AI is widely spread and used, as generative AI has taken a center stage for solving daily tasks. LLMs are used in different tasks such as coding, configuring and securing devices, penetration testing, vulnerability assessment, and other tasks pertaining IT and cybersecurity. Furthermore, as the capabilities of the LLMs get refined, and different tools can be used to interact with them, we have observed the use of agents to further automate different tasks.
                </p>
                <p className="text-justify mt-2">
                  This tutorial will talk about the use of AI in cybersecurity, considering the different types of AI, from machine learning/predictive AI to agentic AI, how these technologies are used in cybersecurity, and the vulnerabilities/risk associated with the different technologies. Lastly, we will have a practice session where participants will be able to generate an agent with a local LLM using Ollama and a local harness and apply it to a cybersecurity context.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Topics
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Predictive AI</li>
                  <li>LLMs and generative AI</li>
                  <li>Agentic AI</li>
                  <li>Risks associated with AI</li>
                  <li>Use of AI in cybersecurity use cases</li>
                  <li>Deployment of local LLMs</li>
                  <li>Architecture for local agents</li>
                  <li>Construction of local agent for vuln testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Audience
                </h3>
                <p className="text-justify">
                  The main audience for this tutorial is bachelor, graduate students, or professionals with interest in AI and cybersecurity, that want to demystify what agents do, how they are constructed and how they can be better leveraged in industry.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Brief CV of the Speaker
                </h3>
                <p className="text-justify">
                  Jorge Rodríguez is a professor in the Computer Science Department and the National Director of the Master’s in Cybersecurity program at Tecnológico de Monterrey. He holds a Ph.D. in Engineering Sciences, and his project focused on using machine learning to detect anomalies. Previously, he worked as a research contractor at HP Labs in the Business Analytics and Cloud Computing laboratories, integrating AI elements into these systems and reviewing their security.
                </p>
                <p className="text-justify mt-2">
                  He has collaborated on several research projects, such as applying deep learning to detect minutiae in fingerprint and palmprint images, detecting bots on social networks, and creating anomaly detection systems for user behavior when interacting with computer systems. He has also carried out consulting projects to identify vulnerabilities, conduct penetration testing, and provide threat mitigation recommendations.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Contact information
                </h3>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:jorger@tec.mx" className="text-[#005BC5] hover:underline">
                    jorger@tec.mx
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#001449] dark:text-white uppercase tracking-wider mb-2">
                  Technical requirements
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Preferably, bring your own device with a GPU and Ollama installed.</li>
                  <li>Internet connection.</li>
                </ul>
              </div>

            </div>

            <div className="mt-8 flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4">
              <button
                onClick={() => setIsTutorial3ModalOpen(false)}
                className="px-5 py-2.5 bg-[#001449] hover:bg-[#002b80] text-white text-xs font-bold rounded-lg transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ScheduleTable;