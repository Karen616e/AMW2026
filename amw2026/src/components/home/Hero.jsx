const Hero = () => { 
  return ( 
    <section
      className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat transition-colors duration-500 bg-[#0E59E8] dark:bg-slate-950"
    >
      {/* Decoración geométrica de fondo (blur) */} 
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"> 
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white dark:bg-blue-600 rounded-full blur-3xl opacity-30">
        </div> 
      </div> 

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full"> 
        {/* Título: Ajustamos el leading para que no se vea tan separado en móviles */}
        <h1 className="mt-8 text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"> 
          Mexican Conference on Cybersecurity Research and Applications 
        </h1> 
        
        {/* Párrafo: Aplicamos el max-w-3xl para que las líneas no sean infinitas */}
        <p className="text-xl md:text-2xl text-blue-100 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"> 
          November 9 - 13, 2026 • Ciudad Universitaria, UNAM, Mexico City 
        </p> 
        
        {/*<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12"> 

          <button 
            className="bg-white text-[#0E59E8] dark:bg-slate-800 dark:text-blue-400 px-8 py-3 rounded-full font-bold hover:bg-blue-50 dark:hover:bg-slate-700 transition-all shadow-xl hover:scale-105 active:scale-95"
            onClick={() => window.location.href = "https://ceur-ws.org/Vol-3954/"}
          > 
            Workshop Proceedings 
          </button>
        </div>*/}

        {/* Logo: Agregamos un borde sutil para que no flote "en el vacío" */}
        <div className="flex justify-center">
          <img
            src="Logo 2.jpeg" 
            alt="MCyRA logo"
            className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-8 border-white/10 dark:border-slate-800/50 shadow-2xl transition-transform duration-700 hover:rotate-3" 
          />
        </div>
      </div> 
    </section> 
  ); 
}; 

export default Hero;