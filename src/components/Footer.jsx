import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import your logo from the assets folder
import logo from "../assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP NEWSLETTER SECTION (Centered) */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="mb-8 flex flex-col items-center">
            {/* Main Centered Logo */}
            <img 
              src={logo} 
              alt="Flowva Logo" 
              className="w-20 h-auto mb-2 brightness-0 invert" 
            />
            <span className="text-2xl font-bold tracking-tight">Flowva</span>
          </div>
          
          <div className="w-full max-w-xl bg-[#1a1a1a] rounded-full p-2 flex items-center border border-white/10 shadow-inner">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="flex-1 bg-transparent px-6 py-2 text-gray-300 focus:outline-none placeholder:text-gray-600"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all text-sm">
              Submit <span className="text-xl">→</span>
            </button>
          </div>
          <p className="mt-6 text-gray-500 text-sm font-medium">
            10,000+ end their week inspired. Join Friday Flow.
          </p>
        </div>

        {/* 2. MIDDLE GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-t border-white/5 pt-16">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="Flowva" 
                  className="w-10 h-10 brightness-0 invert" 
                />
                <span className="text-2xl font-bold tracking-tight">Flowva</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              The smart way to manage your digital life and get rewarded
            </p>
            <p className="text-gray-500 text-sm pt-4 font-medium">
              © 2025 Flowva
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-base">Hub</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Discover</li>
              <li className="hover:text-white cursor-pointer transition-colors">Library</li>
              <li className="hover:text-white cursor-pointer transition-colors">Rewards</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-base">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-base">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-base">Community</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Affiliate</li>
              <li className="hover:text-white cursor-pointer transition-colors">Influencer</li>
              <li className="hover:text-white cursor-pointer transition-colors">Referral</li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM SOCIALS BAR */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-10 border-t border-white/5">
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-semibold transition-colors">
            <FaFacebook className="text-xl" /> Facebook
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-semibold transition-colors">
            <FaXTwitter className="text-xl" /> X (Formerly Twitter)
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-semibold transition-colors">
            <FaInstagram className="text-xl" /> Instagram
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-semibold transition-colors">
            <FaLinkedin className="text-xl" /> Linkedin
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-semibold transition-colors">
            <FaTiktok className="text-xl" /> Tiktok
          </div>
        </div>

      </div>
    </footer>
  );
}