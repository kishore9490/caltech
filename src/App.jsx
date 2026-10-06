import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileBottomNav from './components/MobileBottomNav';

// Pages
import HomePage from './pages/HomePage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import TechnologyPage from './pages/TechnologyPage';
import WhyCalibratePage from './pages/WhyCalibratePage';
import IndustriesPage from './pages/IndustriesPage';
import ReachPage from './pages/ReachPage';
import CustomersPage from './pages/CustomersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col selection:bg-[#ff6b00]/30 selection:text-white pb-16 xl:pb-0">
        {/* Floating Top Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/capabilities" element={<CapabilitiesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/technology" element={<TechnologyPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/why-calibrate" element={<WhyCalibratePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/industries" element={<IndustriesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/reach" element={<ReachPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/customers" element={<CustomersPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />

        {/* Mobile Bottom 1-Tap Navigation */}
        <MobileBottomNav onOpenBooking={handleOpenBooking} />

        {/* Modal Drawer for Expedited Booking */}
        <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
      </div>
    </Router>
  );
}

export default App;

