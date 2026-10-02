import React from 'react';

const ScheduleTable = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado con título grande + rayita azul */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-[#001449] dark:text-white tracking-tight">
            Program
          </h1>
          {/* Rayita azul */}
          <div className="w-16 h-1.5 bg-[#005BC5] rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl">
            Schedule of activities and sessions · MCyRA 2026
          </p>
        </div>

        {/* Contenedor con scroll responsivo y borde exterior negro */}
        <div className="overflow-x-auto shadow-xl rounded-lg border-2 border-black bg-white">
          <table className="w-full text-center border-collapse border border-black text-sm">
            
            {/* Header: Días y Lugar */}
            <thead>
              <tr className="bg-[#001449] text-white">
                <th className="p-3 w-36 font-bold uppercase text-xs tracking-wider border border-black text-slate-200">
                  Time
                </th>
                <th className="p-3 border border-black">
                  <div className="font-extrabold text-base text-white">10-nov</div>
                 {/*<div className="text-xs text-sky-200 italic font-normal">Place 1</div>*/}
                </th>
                <th className="p-3 border border-black">
                  <div className="font-extrabold text-base text-white">11-nov</div>
                  {/* <div className="text-xs text-sky-200 italic font-normal">Place 1</div> */}
                </th>
                <th className="p-3 border border-black">
                  <div className="font-extrabold text-base text-white">12-nov</div>
                  {/* <div className="text-xs text-sky-200 italic font-normal">Place 1</div> */}
                </th>
                <th className="p-3 border border-black">
                  <div className="font-extrabold text-base text-white">13-nov</div>
                  {/* <div className="text-xs text-sky-200 italic font-normal">Place 1</div> */}
                </th>
              </tr>
            </thead>

            {/* Filas del horario */}
            <tbody>

              {/* 9:00 - 9:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  9:00 - 9:30
                </td>
                <td className="p-2 border border-black bg-[#164775] text-white font-semibold">
                  Register
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#164775] text-white font-semibold align-middle">
                  Register
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#164775] text-white font-semibold align-middle">
                  Register
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#164775] text-white font-semibold align-middle">
                  Register
                </td>
              </tr>

              {/* 9:30 - 10:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  9:30 - 10:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#012677]/80 text-white font-medium align-middle">
                  Opening MCyRA and<br />presentation of the RAMC
                </td>
              </tr>

              {/* 10:00 - 10:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  10:00 - 10:30
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#001449] text-white font-bold align-middle">
                  Keynote 1
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#001449] text-white font-bold align-middle">
                  Keynote 2
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#001449] text-white font-bold align-middle">
                  Keynote 3
                </td>
              </tr>

              {/* 10:30 - 11:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  10:30 - 11:00
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-white font-semibold align-middle">
                  Consorcium
                </td>
              </tr>

              {/* 11:00 - 11:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  11:00 - 11:30
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold">
                  Coffee break
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold">
                  Coffee break
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold">
                  Coffee break
                </td>
              </tr>

              {/* 11:30 - 12:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  11:30 - 12:00
                </td>
                <td className="p-2 border border-black bg-[#418EC3] text-slate-900 font-semibold">
                  Coffee break
                </td>
                <td rowSpan={3} className="p-2 border border-black bg-[#00B4FC] text-slate-950 font-bold align-middle">
                  Track 1 -<br />5 papers
                </td>
                <td rowSpan={3} className="p-2 border border-black bg-[#00B4FC] text-slate-950 font-bold align-middle">
                  Track 2 -<br />4 papers
                </td>
                <td rowSpan={3} className="p-2 border border-black bg-[#00B4FC] text-slate-950 font-bold align-middle">
                  Track 3 -<br />4 papers
                </td>
              </tr>

              {/* 12:00 - 12:30 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  12:00 - 12:30
                </td>
                <td rowSpan={2} className="p-2 border border-black bg-[#00B4FC] text-white font-semibold align-middle">
                  Consorcium
                </td>
              </tr>

              {/* 12:30 - 13:00 */}
              <tr className="h-12">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  12:30 - 13:00
                </td>
              </tr>

              {/* 13:00 - 14:00 */}
              <tr className="h-14">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  13:00 - 14:00
                </td>
                <td className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold">
                  Lunch
                </td>
                <td className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold">
                  Lunch
                </td>
                <td className="p-2 border border-black bg-[#005BC5]/80 text-white font-bold">
                  Lunch
                </td>
                <td className="p-2 border border-black bg-[#012677]/80 text-white font-bold">
                  Closing and lunch
                </td>
              </tr>

              {/* 14:00 - 18:00 */}
              <tr className="h-16">
                <td className="px-3 py-2 font-bold text-xs bg-slate-100 text-slate-800 border border-black">
                  14:00 - 18:00
                </td>
                <td className="p-2 border border-black bg-white text-[#001449] font-extrabold text-base">
                  Tutorials
                </td>
                <td className="p-2 border border-black bg-white text-[#001449] font-extrabold text-base">
                  Tutorials
                </td>
                <td className="p-2 border border-black bg-white text-[#001449] font-extrabold text-base">
                  Tutorials
                </td>
                <td className="p-2 border border-black bg-slate-100">
                  {/* Bloque libre */}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;