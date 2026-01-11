import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the hook
import { Home, Compass, Book, Layers, CreditCard, Gift, Settings, Bell, X } from 'lucide-react';

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, to }) => (
  <NavLink 
    to={to}
    end // Ensures 'Home' isn't highlighted when on other sub-pages
    className={({ isActive }) => 
      `flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-600'
      }`
    }
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

// Main Dashboard Shell (The steady part)
export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useAuth(); // Get user data from context

  return (
    <div className="flex min-h-screen bg-white">
      {/* --- STEADY SIDEBAR (Fixed Position) --- */}
      <aside className="w-64 border-r border-gray-200 p-6 flex flex-col fixed h-screen z-30 bg-white">
        <div className="flex items-center mb-10">
            <img
            src="/logo.png"
            alt="Flowva logo"
            className="w-8 h-8 mr-2 object-contain"
          />
          <span className="text-purple-600 font-bold text-2xl">
          Flowva
          </span>
          </div>
        
        <nav className="space-y-2 flex-1">
          <SidebarItem icon={Home} label="Home" to="/dashboard" />
          <SidebarItem icon={Compass} label="Discover" to="/dashboard/discover" />
          <SidebarItem icon={Book} label="Library" to="/dashboard/library" />
          <SidebarItem icon={Layers} label="Tech Stack" to="/dashboard/tech-stack" />
          <SidebarItem icon={CreditCard} label="Subscriptions" to="/dashboard/subscriptions" />
          <SidebarItem icon={Gift} label="Rewards Hub" to="/dashboard/rewards" />
          <SidebarItem icon={Settings} label="Settings" to="/dashboard/settings" />
        </nav>

       {/* DYNAMIC USER PROFILE BOTTOM */}
        <div className="mt-auto pt-6 border-t flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-gray-800">
              {user?.name || "Guest User"}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {user?.email || "No email provided"}
            </p>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA (Pushed right by ml-64) --- */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Header - Steady at the top of content */}
        <header className="flex justify-between items-center p-8 sticky top-0 bg-white/80 backdrop-blur-md z-20">
          <h1 className="text-2xl font-semibold text-gray-800">
            Good morning, <span className="text-purple-600">Chinenye</span>
          </h1>
          <div className="relative">
            <button 
               onClick={() => setShowNotifications(!showNotifications)}
               className="p-2 bg-gray-100 rounded-full relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full">4</span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded-xl p-4 z-50">
                <p className="text-sm font-bold border-b pb-2 mb-2">Notifications</p>
                <p className="text-xs text-gray-500">Welcome to Bravoo! 🎉</p>
              </div>
            )}
          </div>
        </header>

        {/* This is where ONLY the sub-page content changes */}
        <div className="p-8 pt-0 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

// The "Home" view for the Dashboard (Cards and Banner)
export const DashboardHome = () => (
  <div className="animate-in fade-in duration-500">
    <section className="bg-purple-700 rounded-3xl p-8 mb-8 text-white flex items-center gap-8 relative overflow-hidden">
      <div className="flex-shrink-0 z-10">
        <img src="/banner/banner.png" alt="Bravoo" className="w-40 h-auto rounded-2xl border-2 border-purple-400/30 shadow-xl" />
      </div>
      <div className="z-10">
        <h2 className="text-3xl font-bold mb-3">Big News: We're Becoming Bravoo! 🎉</h2>
        <p className="text-purple-100 max-w-xl text-sm md:text-base mb-4">
           Bravoo is a platform designed to make learning fun and rewarding. With Bravoo, you'll complete quick, engaging missions that help you build real digital skills while earning coins, prizes, gadgets, and more. Explore what's coming on our brand-new website:
        </p>
        <a href="https://www.joinbravoo.com" target="_blank" className="underline font-medium">www.joinbravoo.com</a>
        You'll get a sneak peek of the experience and learn how to join the growing Bravoo community. We officially launch on January 10, and we're excited to have you on this journey
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ActionCard title="Discover New Tools" desc="Find the best tools for your workflow" to="/dashboard/discover" icon={Compass} color="bg-purple-400" />
      <ActionCard title="Manage Your Library" desc="Manage all your tools in one place" to="/dashboard/library" icon={Book} color="bg-cyan-400" />
      <ActionCard title="Build Your Tech Stack" desc="Organize tools for projects" to="/dashboard/tech-stack" icon={Layers} color="bg-red-400" />
      <ActionCard title="Track Subscriptions" desc="Track renewals and spending" to="/dashboard/subscriptions" icon={CreditCard} color="bg-emerald-400" />
    </div>
  </div>
);

const ActionCard = ({ title, desc, to, icon: Icon, color }) => (
  <Link to={to} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-all">
    <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white`}><Icon size={20} /></div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-xs">{desc}</p>
    <div className="text-purple-600 font-bold text-xs mt-4">Open →</div>
  </Link>
);