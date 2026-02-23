import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import CallForPapers from './components/home/CallForPapers';
import Submission from './components/home/Submission';
import DatesTable from './components/home/DatesTable';
import Registration from './components/home/Registration';
import Committee from './components/home/Committee';
import Venue from './components/home/Venue';
import Sponsors from './components/home/Sponsors';
import Footer from './components/layout/Footer';
import Grants from './components/home/Grants';

function App() {
  return (
    // Agregamos scroll-smooth aquí también por seguridad
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth">
      
      <Navbar />

      <main>
        {/* Sección Hero con ID para el scroll */}
        <div id="home">
          <Hero />
        </div>

        {/* El flujo lógico de un sitio de Workshop */}
        <CallForPapers />
        <Submission />
        <DatesTable />
        <Registration />
        <Grants/>
        <Committee />
        <Venue />
        <Sponsors />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;