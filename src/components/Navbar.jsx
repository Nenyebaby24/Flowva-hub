import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const navItems = ["Hub", "Company", "Support", "Community"];

  const menuConfig = {
    Hub: {
      cols: "grid-cols-1 md:grid-cols-3",
      items: [
        { title: "DISCOVER", icon: "🧭", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "LIBRARY", icon: "📑", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "REWARD", icon: "🪙", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
      ],
    },
    Company: {
      cols: "grid-cols-1 md:grid-cols-2",
      items: [
        { title: "ABOUT US", icon: "ℹ️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "BLOG", icon: "💬", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
      ],
    },
    Support: {
      cols: "grid-cols-1 md:grid-cols-2",
      items: [
        { title: "FAQ", icon: "❓", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "CONTACT US", icon: "✉️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
      ],
    },
    Community: {
      cols: "grid-cols-1 md:grid-cols-3",
      items: [
        { title: "AFFILIATE", icon: "🤝", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "INFLUENCER", icon: "🤳", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
        { title: "REFER TO EARN", icon: "➡️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white" },
      ],
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Flowva" className="w-10 h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <div key={item} className="group py-2">
              <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition">
                {item}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </div>

              {/* Mega Dropdown Panel */}
              <div className="absolute left-0 right-0 top-[65px] bg-white border-b-2 border-x-2 border-gray-100 rounded-b-[4rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-6xl mx-auto py-12 px-6">
                  <div className={`grid gap-6 ${menuConfig[item].cols}`}>
                    {menuConfig[item].items.map((card) => (
                      <div key={card.title} className={`bg-gradient-to-b ${card.color} to-white rounded-[2.5rem] p-10 flex flex-col items-center justify-center border border-gray-100 hover:shadow-lg transition-all cursor-pointer`}>
                        <div className="text-5xl mb-6 drop-shadow-md">{card.icon}</div>
                        <h3 className="font-black text-xl tracking-tighter text-[#2D2D39]">{card.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/login" className="text-sm font-bold px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white">Login</Link>
          <Link to="/signup" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ">
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-white h-screen overflow-y-auto border-t border-gray-100 px-6 py-8">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item} className="border-b border-gray-50 pb-4">
                <button 
                  onClick={() => setActiveMobileMenu(activeMobileMenu === item ? null : item)}
                  className="flex items-center justify-between w-full text-xl font-bold text-gray-800"
                >
                  {item}
                  <ChevronDown className={`transition-transform ${activeMobileMenu === item ? "rotate-180" : ""}`} />
                </button>
                
                {/* Mobile Dropdown Items */}
                {activeMobileMenu === item && (
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    {menuConfig[item].items.map((card) => (
                      <div key={card.title} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                        <span className="text-2xl">{card.icon}</span>
                        <span className="font-bold text-sm text-gray-700">{card.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex flex-col gap-4 mt-6">
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-4 text-center font-bold text-gray-800 border border-gray-200 rounded-2xl">
                Login
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full py-4 text-center font-bold text-white rounded-2xl
  bg-black hover:bg-purple-700 transition-colors duration-300"
>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}