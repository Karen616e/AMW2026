import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import DatesTable from './components/home/DatesTable';
import Committee from './components/home/Committee';
import CallForPapers from './components/home/CallForPapers';
import Venue from './components/home/Venue';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
    <Navbar />
    <main>
    <Hero />
    <CallForPapers />
    <DatesTable />
    <Committee />
    <Venue />

    </main>
    <footer className="bg-slate-900 text-white py-12 px-4 text-center">
    <div className="max-w-4xl mx-auto">
    <p className="font-bold text-lg mb-2">AMW 2026</p>
    <p className="text-slate-400 text-sm">
    20th Alberto Mendelzon International Workshop on Foundations of Data Management
    </p>
    <div className="mt-6 border-t border-slate-800 pt-6 text-slate-500 text-xs">
    © 2026 CDMX, México. Renovación diseñada con React + Tailwind CSS.
    </div>
    </div>
    </footer>
    </div>
  );
}

export default App;
