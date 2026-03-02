const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          About AMW
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Since 2006, the <strong>Alberto Mendelzon International Workshop</strong> on Foundations of Data Management (AMW) brings together top researchers from all over the world, creating the opportunity to discuss and spread research results around the areas of Data Management and the Web.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          The co-located <strong>AMW Summer School</strong> provides an opportunity for Latin American students (graduate and undergraduate), researchers, and practitioners, to interact with top researchers from all over the world, promoting collaboration, learning, and teaching in a friendly environment.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          AMW is a way to honour the memory of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Alberto_O._Mendelzon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Alberto Mendelzon
          </a>
          , by promoting research ties with Latin America.
        </p>
        <img
          src="/src/images/alberto-mendelzon.webp"
          alt="Alberto Mendelzon"
          className="mx-auto rounded-full max-w-xs mb-6"
        />
      </div>
    </section>
  );
};

export default About;