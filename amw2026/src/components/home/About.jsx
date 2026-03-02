const About = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-light text-slate-700 mb-10">
          DEI Disclaimer
        </h2>

        <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
          The <strong>AMW</strong> community believes that diversity and culture of support
          encourage retention and attraction of talent, promote diversity of thought and
          perspective, and help make the scientific community more flexible and responsive in
          times of change. For these reasons, AMW 2024 participates in the{" "}
          <a
            href="https://dbdni.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            Database Community Diversity, Equity and Inclusion (DEI) initiative
          </a>{" "}
          aiming to guide researchers in our community to adopt a more inclusive mindset. For
          more information see the{" "}
          <a
            href="https://amw.mx/dei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            AMW 2024 DEI statement
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;