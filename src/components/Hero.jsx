import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero({ view, setView }) {
  const navigate = useNavigate();

  return (
    <section className="pt-40 text-center px-4 relative z-10">
      {/* Switcher Pill Container */}
      <div className="inline-flex items-center p-1 bg-white rounded-full -mt-16 mb-8 border border-gray-100 shadow-sm relative z-20">
        
        {/* For Users Button */}
        <button
          type="button"
          onClick={() => {
            console.log("Switching to users");
            setView('users');
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-lg font-bold transition-all cursor-pointer relative ${
            view === 'users' 
              ? 'bg-gradient-to-b from-[#3a3a3a] to-black text-white shadow-lg' 
              : 'text-black bg-transparent'
          }`}
        >
          <span>👥</span>
          For users
          {/* Red notification dot from screenshot */}
          {view === 'users' && (
            <span className="absolute bottom-1.5 right-4 w-2 h-2 bg-red-500 rounded-full border border-white" />
          )}
        </button>
        
        {/* For Brands Button */}
        <button
          type="button"
          onClick={() => {
            console.log("Switching to brands");
            setView('brands');
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-lg font-bold transition-all cursor-pointer ${
            view === 'brands' 
              ? 'bg-gradient-to-b from-[#3a3a3a] to-black text-white shadow-lg' 
              : 'text-black bg-transparent'
          }`}
        >
          <span>🏪</span>
          For brands
        </button>
      </div>

      {/* Conditional Headline logic remains same */}
      <div className="mt-8">
        {view === 'users' ? (
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase">
            YOUR <span className="bg-[#A855F7] text-white px-4 py-1 rounded-2xl text-[0.8em]">SMART</span>
            <br /> SPACE TO MANAGE YOUR DIGITAL LIFE
          </h1>
        ) : (
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase">
            CONNECT WITH <span className="bg-[#A855F7] text-white px-4 py-1 rounded-2xl text-[0.8em]">TECH</span>
            <br /> PROFESSIONALS WHO ENGAGE
          </h1>
        )}
      </div>
    </section>
  );
}

