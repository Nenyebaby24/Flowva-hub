import React from 'react';
import { Home, Compass, Book, Layers, CreditCard, Gift, Settings, Bell } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100 text-gray-600'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </div>
);

const ActionCard = ({ title, desc, linkText, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm 
                  flex flex-col justify-between 
                  transition-all duration-300 ease-in-out 
                  hover:-translate-y-2 hover:shadow-md cursor-pointer">
    <div>
      <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center mb-4`}>
        <Icon className="text-white" size={20} />
      </div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{desc}</p>
    </div>
    <button className="text-purple-600 font-semibold text-sm flex items-center hover:underline mt-2">
      {linkText} <span className="ml-1">→</span>
    </button>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center mb-10 text-purple-600 font-bold text-2xl">
          <div className="mr-2">🟣</div> Flowva
        </div>
        
        <nav className="space-y-2 flex-1">
          <SidebarItem icon={Home} label="Home" active />
          <SidebarItem icon={Compass} label="Discover" />
          <SidebarItem icon={Book} label="Library" />
          <SidebarItem icon={Layers} label="Tech Stack" />
          <SidebarItem icon={CreditCard} label="Subscriptions" />
          <SidebarItem icon={Gift} label="Rewards Hub" />
          <SidebarItem icon={Settings} label="Settings" />
        </nav>

        {/* User Profile Bottom */}
        <div className="mt-auto pt-6 border-t flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white">U</div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Chinenye</p>
            <p className="text-xs text-gray-400 truncate">udochinenye16@gmail.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Good morning, <span className="text-purple-600">Chinenye</span>
          </h1>
          <div className="relative p-2 bg-gray-100 rounded-full">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full">4</span>
          </div>
        </header>

       {/* Purple Banner */}
      <section className="bg-purple-700 rounded-3xl p-6 mb-8 text-white flex items-center gap-8 relative overflow-hidden">
  
      {/* 1. Image Placement: Left Side */}
     <div className="flex-shrink-0 z-10">
    <img 
      src="/banner/banner.png" 
      alt="Bravoo Mission" 
      className="w-40 lg:w-48 h-auto rounded-2xl shadow-2xl object-cover border-2 border-purple-400/30" 
    />
    </div>

  {/* 2. Text Content: Right Side */}
  <div className="z-10 max-w-2xl">
    <h2 className="text-3xl font-bold mb-3">Big News: We're Becoming Bravoo! 🎉</h2>
    <p className="text-purple-100 leading-relaxed mb-4 text-sm md:text-base">
      Bravoo is a platform designed to make learning fun, simple, and truly rewarding. 
      With Bravoo, you'll complete quick, engaging missions that help you build 
      real digital skills while earning coins, prizes, and more.
      
    </p>
   
       <a href="https://www.joinbravoo.com" target="_blank" className="underline font-medium hover:text-white transition-colors">
         www.joinbravoo.com
       </a>
       You’ll get a sneak peek of the experience and learn how to join the growing Bravoo community. We officially launch on January 10, and we’re excited to have you on this journey with us.
    
    </div>

    {/* Decorative Background Element */}
    <div className="absolute right-[-20px] top-[-20px] w-64 h-64 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>
   </section>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ActionCard 
            title="Discover New Tools" 
            desc="Find the best tools for your workflow" 
            linkText="Browse tools"
            icon={Compass}
            color="bg-purple-400"
          />
          <ActionCard 
            title="Manage Your Library" 
            desc="Manage all your tools in one place" 
            linkText="View library"
            icon={Book}
            color="bg-cyan-400"
          />
          <ActionCard 
            title="Build Your Tech Stack" 
            desc="Organize your tools for specific projects" 
            linkText="Build stacks"
            icon={Layers}
            color="bg-red-400"
          />
          <ActionCard 
            title="Track Your Subscriptions" 
            desc="Track renewals and spending" 
            linkText="Manage subscriptions"
            icon={CreditCard}
            color="bg-emerald-400"
          />
        </div>
      </main>
    </div>
  );
}