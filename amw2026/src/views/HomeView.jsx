// src/views/HomeView.jsx
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import DatesTable from '../components/home/DatesTable';
import Contact from '../components/home/Contact';
// import Sponsors from '../components/home/Sponsors'; 

const HomeView = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <Hero />
      <About />
      <DatesTable />
      <Contact />
      {/* <Sponsors /> */}
    </div>
  );
};

export default HomeView;