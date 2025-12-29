import React from 'react';
import flowCoin from '../assets/flow.svg'; 

const CTA = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      
      {/* Main Yellow Card */}
      <div className="relative w-full max-w-6xl bg-[#EBFF38] rounded-[30px] md:rounded-[40px] py-16 md:py-24 px-6 md:px-10 overflow-hidden flex flex-col items-center justify-center">
        
        {/* LEFT SIDE COINS - Hidden on mobile to prevent text overlap */}
        <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col justify-between py-6 h-full pointer-events-none">
          <img src={flowCoin} className="w-32 -translate-x-14 opacity-90" alt="" />
          <div className="flex flex-col gap-10 translate-x-8">
             <img src={flowCoin} className="w-40 drop-shadow-2xl" alt="" />
             <img src={flowCoin} className="w-40 drop-shadow-2xl" alt="" />
          </div>
          <img src={flowCoin} className="w-32 -translate-x-14 opacity-90" alt="" />
        </div>

        {/* RIGHT SIDE COINS - Hidden on mobile */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex flex-col justify-between py-6 h-full pointer-events-none">
          <img src={flowCoin} className="w-32 translate-x-14 rotate-180 opacity-90" alt="" />
          <div className="flex flex-col gap-10 -translate-x-8">
             <img src={flowCoin} className="w-40 rotate-180 drop-shadow-2xl" alt="" />
             <img src={flowCoin} className="w-40 rotate-180 drop-shadow-2xl" alt="" />
          </div>
          <img src={flowCoin} className="w-32 translate-x-14 rotate-180 opacity-90" alt="" />
        </div>

        {/* CONTENT AREA */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Main Heading: Scaled for mobile */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-black text-[#111] leading-[1.1] tracking-tighter uppercase mb-6">
            Stay Productive.<br />Get Rewarded.
          </h1>
          
          {/* Subheading: Adjusted size and max-width */}
          <p className="text-lg md:text-[32px] font-semibold text-[#111] max-w-[280px] sm:max-w-none md:max-w-3xl leading-[1.3] mb-10 tracking-tight">
            Turn your tools, subscriptions, and daily habits into<br className="hidden md:block"/> rewards all in one calm space
          </p>

          {/* Button: Maintained style with slightly smaller mobile padding */}
          <button className="bg-gradient-to-b from-[#333] to-[#111] text-white px-8 md:px-10 py-4 md:py-5 rounded-[40px] font-bold text-base md:text-lg 
                             hover:scale-105 transition-all duration-300 
                             shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-t border-white/20">
            Unlock Rewards Now
          </button>
        </div>

      </div>
    </div>
  );  
};

export default CTA;