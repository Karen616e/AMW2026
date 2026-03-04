const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          About MCyRA
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Following the legacy of the <strong>Alberto Mendelzon International Workshop on Foundations of Data Management (AMW)</strong>, 
          the <strong>Mexican Conference on Cybersecurity Research and Applications (MCyRA 2026)</strong> continues the tradition of bringing 
          together leading researchers, practitioners, and students from around the world to exchange knowledge and foster 
          collaboration in the realm of cybersecurity.
        </p>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          While AMW has been an essential platform for discussing advancements in data management and the web, 
          MCyRA shifts the focus to the dynamic and rapidly evolving field of cybersecurity, aiming to address 
          current challenges and future directions in protecting digital infrastructure and applications.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          The co-located MCyRA Summer School, much like its AMW counterpart, offers an invaluable opportunity for 
          Latin American students—both graduate and undergraduate—to interact with top cybersecurity experts, gaining 
          hands-on experience and insights into cutting-edge practices. This collaborative space encourages learning, 
          growth, and the development of new ideas that contribute to enhancing the cybersecurity landscape in Latin 
          America.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Just as AMW honored the memory of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Alberto_O._Mendelzon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Alberto Mendelzon
          </a>
          , by promoting research ties with Latin America, MCyRA aims to honor the continued pursuit of cybersecurity 
          excellence, emphasizing the importance of international collaboration in securing our digital future.
        </p>
        <img
          src="https://amw2024.github.io/media/alberto-mendelzon_hu0a98c6f57b440a5ce2eff07c7bb1fe96_13143_1200x1200_fit_q75_h2_lanczos.webp"
          alt="Alberto Mendelzon"
          className="mx-auto rounded-full max-w-xs mb-6"
        />
      </div>
    </section>
  );
};

export default About;