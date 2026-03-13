const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-10">
          About MCyRA
        </h2>
        
        {/* Contenedor central limitado a 3xl para una lectura perfecta */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Following the legacy of the <strong className="text-slate-800 dark:text-slate-100">Alberto Mendelzon International Workshop on Foundations of Data Management (AMW)</strong>, 
            the <strong className="text-slate-800 dark:text-slate-100">Mexican Conference on Cybersecurity Research and Applications (MCyRA 2026)</strong> continues the tradition of bringing 
            together leading researchers, practitioners, and students from around the world to exchange knowledge and foster 
            collaboration in the realm of cybersecurity.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            While AMW has been an essential platform for discussing advancements in data management and the web, 
            MCyRA shifts the focus to the dynamic and rapidly evolving field of cybersecurity, aiming to address 
            current challenges and future directions in protecting digital infrastructure and applications.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The co-located MCyRA Summer School, much like its AMW counterpart, offers an invaluable opportunity for 
            Latin American students—both graduate and undergraduate—to interact with top cybersecurity experts, gaining 
            hands-on experience and insights into cutting-edge practices. This collaborative space encourages learning, 
            growth, and the development of new ideas that contribute to enhancing the cybersecurity landscape in Latin 
            America.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Just as AMW honored the memory of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Alberto_O._Mendelzon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Alberto Mendelzon
            </a>
            , by promoting research ties with Latin America, MCyRA aims to honor the continued pursuit of cybersecurity 
            excellence, emphasizing the importance of international collaboration in securing our digital future.
          </p>
        </div>

        {/* Imagen con estilos mejorados y responsivos */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://amw2024.github.io/media/alberto-mendelzon_hu0a98c6f57b440a5ce2eff07c7bb1fe96_13143_1200x1200_fit_q75_h2_lanczos.webp"
            alt="Alberto Mendelzon"
            className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-white dark:border-slate-800 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;