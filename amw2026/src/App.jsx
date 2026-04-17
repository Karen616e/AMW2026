import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop'; 
import HomeView from './views/HomeView';
import SubmissionView from './views/SubmissionView';
import CommitteeView from './views/CommitteeView';
import AttendView from './views/AttendView';
import VenueView from './views/VenueView';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cfp" element={<SubmissionView />} />
            <Route path="/committee" element={<CommitteeView />} />
            <Route path="/attend" element={<AttendView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
