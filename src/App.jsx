import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import "./index.css"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}




