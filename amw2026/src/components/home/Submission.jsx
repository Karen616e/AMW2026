const Submission = () => {
  const guidelines = [
    { title: "Regular Papers", detail: "Up to 12 pages excluding references. Original research results." },
    { title: "Short Papers", detail: "Up to 6 pages excluding references. Work in progress or reports." },
    { title: "Format", detail: "Submissions must follow the CEUR-WS style (single-column)." },
    { title: "Review Process", detail: "Single-blind review. Authors' names should be visible." }
  ];

  return (
    <section id="submission" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Submission Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((g, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">{g.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{g.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <p className="text-slate-600 mb-4 italic">
            Accepted papers will be published in the CEUR Workshop Proceedings.
          </p>
          <a href="#" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Download Templates (LaTeX / Word) →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Submission;