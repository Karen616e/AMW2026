import { registrationFees } from '../../data/registration';

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Registration</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-bold text-slate-700">Fee Category</th>
                <th className="p-4 font-bold text-slate-700">Students</th>
                <th className="p-4 font-bold text-slate-700">Regular</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {registrationFees.map((fee, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 text-slate-600 font-medium">{fee.type}</td>
                  <td className="p-4 text-blue-600 font-bold">{fee.student}</td>
                  <td className="p-4 text-slate-800 font-bold">{fee.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
          <p className="text-amber-800 text-sm">
            <strong>Note:</strong> Registration includes access to all sessions, coffee breaks, and the gala dinner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;