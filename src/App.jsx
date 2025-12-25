import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
import Dashboard from "./pages/Dashboard";
import "./index.css";

/**
 * WhatsApp Button Component
 * Positioned fixed to the bottom-right as per your mockup.
 */
const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890" // Replace with your actual phone number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-[9999] flex items-center justify-center bg-[#25D366] w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
  >
    <svg 
      viewBox="0 0 24 24" 
      className="w-9 h-9 fill-white"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.014L0 24l6.135-1.61a11.787 11.787 0 005.912 1.586h.005c6.634 0 12.048-5.414 12.048-12.05a11.75 11.75 0 00-3.51-8.525z"/>
    </svg>
  </a>
);

export default function App() {
  return (
    <Router>
      {/* Ensure min-h-screen is set. 
          The 'relative' class helps children with 'fixed' positioning 
          calculate their spot correctly in some browsers.
      */}
      <div className="min-h-screen bg-white relative">
        <AnnouncementBar />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* This icon stays visible on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}