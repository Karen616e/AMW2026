const Hero = () => { 
  return ( 
    <section
      className="relative py-16 px-4 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex flex-col justify-center transition-colors duration-300 bg-[#0E59E8] dark:bg-slate-950"
    >
      {/* Decoración geométrica de fondo */} 
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"> 
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl">
        </div> 
      </div> 

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full mt-16"> 
        <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"> 
          Mexican Conference on Cybersecurity Research and Applications 
        </h1> 
        
        {/* Aquí ya tenías el max-w-3xl, ¡perfecto para la legibilidad! */}
        <p className="text-xl md:text-2xl text-blue-100 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"> 
          November 9 - 13, 2026 • Ciudad Universitaria, UNAM, Mexico City 
        </p> 
        
        <div className="flex flex-col sm:flex-row justify-center gap-4"> 
          <button 
            className="bg-white text-[#0E59E8] dark:bg-slate-800 dark:text-blue-400 px-8 py-3 rounded-full font-bold hover:bg-blue-50 dark:hover:bg-slate-700 transition-all shadow-lg" 
            onClick={() => window.location.href = "https://ceur-ws.org/Vol-3954/"}
          > 
            Workshop Proceedings 
          </button> 
        </div>

        <div className="flex justify-center mt-12">
          <img
            src="Logo 2.jpeg" 
            alt="MCyRA logo"
            className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-4 border-white/20 dark:border-slate-800/50 shadow-xl" 
          />
        </div>
      </div> 
    </section> 
  ); 
}; 

export default Hero;