import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP NEWSLETTER SECTION (Centered) */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="mb-8">
             {/* Replace with your actual SVG logo if available */}
             <div className="text-3xl font-bold flex flex-col items-center">
                <span className="text-4xl">👓</span>
                <span className="tracking-widest mt-1">Flowva</span>
             </div>
          </div>
          
          <div className="w-full max-w-xl bg-[#1a1a1a] rounded-full p-2 flex items-center border border-white/5">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="flex-1 bg-transparent px-6 py-2 text-gray-300 focus:outline-none"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all">
              Submit <span className="text-xl">→</span>
            </button>
          </div>
          <p className="mt-6 text-gray-500 text-sm font-medium">
            10,000+ end their week inspired. Join Friday Flow.
          </p>
        </div>

        {/* 2. MIDDLE GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
               <span>👓</span> Flowva
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
              The smart way to manage your digital life and get rewarded
            </p>
            <p className="text-gray-500 text-sm pt-4">
              © 2025 Flowva
            </p>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Hub</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Discover</li>
              <li className="hover:text-white cursor-pointer">Library</li>
              <li className="hover:text-white cursor-pointer">Rewards</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-base">Community</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Affiliate</li>
              <li className="hover:text-white cursor-pointer">Influencer</li>
              <li className="hover:text-white cursor-pointer">Referral</li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM SOCIALS BAR (Icons + Text) */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-10 border-t border-white/5">
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
            <FaFacebook className="text-xl" /> Facebook
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
            <FaXTwitter className="text-xl" /> X (Formerly Twitter)
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
            <FaInstagram className="text-xl" /> Instagram
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
            <FaLinkedin className="text-xl" /> Linkedin
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer text-sm font-medium">
            <FaTiktok className="text-xl" /> Tiktok
          </div>
        </div>

      </div>
    </footer>
  );
}
