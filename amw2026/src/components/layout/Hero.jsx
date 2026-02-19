const Hero = () => {
    return (
        <section className="relative bg-blue-900 py-24 px-4 overflow-hidden">
        {/* Decoración geométrica de fondo (opcional) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        20th Alberto Mendelzon International Workshop
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
        Foundations of Data Management • May 2026 • CDMX, Mexico
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
        Call for Papers
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
        Important Dates
        </button>
        </div>
        </div>
        </section>
    );
};

export default Hero;
