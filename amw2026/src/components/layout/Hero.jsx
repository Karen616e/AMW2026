const Hero = () => { 
    return ( 
    <section
      className="relative bg-blue-900 py-16 px-4 overflow-hidden bg-contain bg-center bg-no-repeat"
      style={{
        backgroundSize: 'contain', // Ajustar tamaño de imagen
        backgroundPosition: 'center', // Centra la imagen
        backgroundColor: '#0E59E8', // Cambia el fondo a azul
        backgroundAttachment: 'fixed', // La imagen se queda fija al hacer scroll
        height: '100vh', // Ajusta la altura del contenedor
      }}
    >
        {/* Decoración geométrica de fondo (opcional) */} 
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"> 
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl">
            </div> 
        </div> 

        <div className="max-w-5xl mx-auto text-center relative z-10"> 
            <h1 className="mt-8 text-2xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"> 
                Mexican Conference on Cybersecurity Research and Applications 
            </h1> 
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"> 
                November 9 - 13, 2026 • Ciudad Universitaria, UNAM, Mexico City 
            </p> 
            
            <div className="flex flex-col sm:flex-row justify-center gap-4"> 
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg" onClick={() => window.location.href = "https://ceur-ws.org/Vol-3954/"}> 
                    Workshop Proceedings 
                </button> 
            </div>
            <div className="flex justify-center mt-8">
                <img
                    src="/RedAcaMexdeCiber.svg" 
                    alt="MCyRA logo"
                    className="h-75 w-75" // Tamaño del logo ajustado
                />
            </div>
        </div> 
    </section> 
    ); 
}; export default Hero;