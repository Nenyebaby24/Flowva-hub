import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const menuData = {
  Support: {
    items: [
      { title: "FAQ", icon: "❓", color: "from-purple-50 to-white" },
      { title: "CONTACT US", icon: "✉️", color: "from-blue-50 to-white" },
    ],
    buttonText: "Get Help Now",
  },
  Community: {
    items: [
      { title: "AFFILIATE", icon: "🤝", color: "from-purple-50 to-white" },
      { title: "INFLUENCER", icon: "🤳", color: "from-blue-50 to-white" },
      { title: "REFER TO EARN", icon: "➡️", color: "from-pink-50 to-white" },
    ],
    buttonText: "Start Earning Today",
  },
};

export default function Navbar() {
  const navItems = ["Hub", "Company", "Support", "Community"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Flowva" className="w-10 h-10" />
        </div>

        {/* Navigation */}
<div className="flex items-center gap-8 text-sm font-medium">
  {navItems.map((item) => {
    const menuConfig = {
      Hub: {
        cols: "grid-cols-3",
        items: [
          { title: "DISCOVER", icon: "🧭", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200"},
          { title: "LIBRARY", icon: "📑", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border:"border-purple-200" },
          { title: "REWARD", icon: "🪙", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
        ],
      },
      Company: {
        cols: "grid-cols-2",
        items: [
          { title: "ABOUT US", icon: "ℹ️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
          { title: "BLOG", icon: "💬", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
        ],
      },
      Support: {
        cols: "grid-cols-2",
        items: [
          { title: "FAQ", icon: "❓", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
          { title: "CONTACT US", icon: "✉️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
        ],
      },
      Community: {
        cols: "grid-cols-3",
        items: [
          { title: "AFFILIATE", icon: "🤝", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
          { title: "INFLUENCER", icon: "🤳", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
          { title: "REFER TO EARN", icon: "➡️", color: "from-[#FFE4E6] via-[#FAF5FF] to-white", border: "border-purple-200" },
        ],
      },
    };

    const data = menuConfig[item];

    return (
      <div key={item} className="group py-2">
        {/* Trigger Link */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition">
          {item}
          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
        </div>

        {/* Mega Dropdown Panel */}
        {data && (
          <div className="absolute left-0 right-0 top-[65px] bg-white border-b-2 border-x-2 border-gray-100 rounded-b-[4rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            {/* Reduced bottom padding since button is removed */}
            <div className="max-w-6xl mx-auto py-12 px-6">
              
              {/* Dynamic Grid */}
              <div className={`grid gap-6 ${data.cols}`}>
                {data.items.map((card) => (
                  <div
                    key={card.title}
                    className={`bg-gradient-to-b ${card.color} to-white rounded-[2.5rem] p-14 flex flex-col items-center justify-center border border-gray-100 hover:shadow-lg transition-all cursor-pointer`}
                  >
                    <div className="text-7xl mb-10 drop-shadow-md">
                      {card.icon}
                    </div>
                    
                    <h3 className="font-black text-3xl tracking-tighter text-[#2D2D39]">
                      {card.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* The "Start Earning Today" button section has been removed */}
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>
        {/* Auth Buttons */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-bold">Login</Link>
          <Link to="/signup" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}