const Grants = () => {
  return (
    <section id="grants" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Student Grants</h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          To support the participation of the next generation of researchers, a limited number of 
          travel grants will be available for students who are co-authors of accepted papers. 
          These grants aim to cover registration fees and contribute toward travel expenses to **Mexico City**.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">
            Apply for a Grant
          </button>
          <a href="#registration" className="text-blue-600 font-semibold py-3 px-8 hover:underline">
            View Registration Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Grants;