const Grants = () => {
  return (
    <section id="grants" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
          Student Grants
        </h2>

        {/* Limitamos el ancho del párrafo a 2xl para que el texto centrado sea más fácil de leer */}
        <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
          To support the participation of the next generation of researchers, a limited number of 
          travel grants will be available for students who are co-authors of accepted papers. 
          These grants aim to cover registration fees and contribute toward travel expenses to Mexico City.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Botón Principal */}
          <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:scale-105 active:scale-95">
            Apply for a Grant
          </button>

          {/* Enlace Estilizado */}
          <a 
            href="#registration" 
            className="text-blue-600 dark:text-blue-400 font-semibold py-2 px-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          >
            View Registration Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Grants;