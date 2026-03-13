// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout global
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Vistas
import HomeView from './views/HomeView';
import CommitteeView from './views/CommitteeView';
import SubmissionView from './views/SubmissionView';
import AttendView from './views/AttendView';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Navbar siempre visible arriba */}
        <Navbar />

        {/* El contenido principal que cambia según la URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cfp" element={<SubmissionView />} />
            <Route path="/committee" element={<CommitteeView />} />
            <Route path="/attend" element={<AttendView />} />
          </Routes>
        </main>

        {/* Footer siempre visible abajo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;