import React from 'react';
import flowCoin from '../assets/flow.svg'; 

const CTA = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      
      {/* Main Yellow Card */}
      <div className="relative w-full max-w-5xl bg-[#EBFF38] rounded-[40px] py-24 px-10 overflow-hidden flex flex-col items-center justify-center">
        
        {/* LEFT SIDE COINS */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-6 h-full pointer-events-none">
          <img src={flowCoin} className="w-32 -translate-x-14 opacity-90" alt="" />
          <div className="flex flex-col gap-10 translate-x-8">
             <img src={flowCoin} className="w-40 drop-shadow-2xl" alt="" />
             <img src={flowCoin} className="w-40 drop-shadow-2xl" alt="" />
          </div>
          <img src={flowCoin} className="w-32 -translate-x-14 opacity-90" alt="" />
        </div>

        {/* RIGHT SIDE COINS */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-6 h-full pointer-events-none">
          <img src={flowCoin} className="w-32 translate-x-14 rotate-180 opacity-90" alt="" />
          <div className="flex flex-col gap-10 -translate-x-8">
             <img src={flowCoin} className="w-40 rotate-180 drop-shadow-2xl" alt="" />
             <img src={flowCoin} className="w-40 rotate-180 drop-shadow-2xl" alt="" />
          </div>
          <img src={flowCoin} className="w-32 translate-x-14 rotate-180 opacity-90" alt="" />
        </div>

        {/* CONTENT AREA */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Main Heading: Heavy weight, tight tracking, uppercase */}
          <h1 className="text-[48px] md:text-[72px] font-black text-[#111] leading-[1.1] tracking-tighter uppercase mb-6">
            Stay Productive.<br />Get Rewarded.
          </h1>
          
          {/* Subheading: Medium-bold weight, relaxed leading */}
          <p className="text-xl md:text-[32px] font-semibold text-[#111] max-w-3xl leading-[1.3] mb-10 tracking-tight">
            Turn your tools, subscriptions, and daily habits into<br className="hidden md:block"/> rewards all in one calm space
          </p>

          {/* Button: Pill shape with specific dark gradient and soft glow */}
          <button className="bg-gradient-to-b from-[#333] to-[#111] text-white px-10 py-5 rounded-[40px] font-bold text-lg 
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