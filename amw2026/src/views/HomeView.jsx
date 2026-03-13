// src/views/HomeView.jsx
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import DatesTable from '../components/home/DatesTable';
import Sponsors from '../components/home/Sponsors';
import Contact from '../components/home/Contact';
// Importa los demás componentes que quieras en la página principal

const HomeView = () => {
  return (
    <>
      <Hero />
      <About />
      <DatesTable />
      <Contact />
      {/* <Sponsors /> */}
    </>
  );
};

export default HomeView;