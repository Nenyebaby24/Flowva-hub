import React from 'react';
// Import the SVG from your assets folder
import flowCoin from '../assets/flow.svg'; 

const CTA = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      
      {/* Main Yellow Card */}
      <div className="relative w-full max-w-4xl bg-[#EBFF38] rounded-[50px] py-12 px-10 overflow-hidden flex flex-col items-center justify-center shadow-sm">
        
        {/* LEFT SIDE COINS - "C" Curve Alignment */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-6 h-full pointer-events-none">
          {/* Top Left - Tucked away */}
          <img src={flowCoin} className="w-28 -translate-x-12 opacity-90" alt="" />
          
          {/* Middle Left - Pushed inward toward center */}
          <div className="flex flex-col gap-4 translate-x-4">
             <img src={flowCoin} className="w-36 drop-shadow-xl" alt="" />
             <img src={flowCoin} className="w-36 drop-shadow-xl" alt="" />
          </div>
          
          {/* Bottom Left - Tucked away */}
          <img src={flowCoin} className="w-28 -translate-x-12 opacity-90" alt="" />
        </div>

        {/* RIGHT SIDE COINS - Mirrored "C" Curve & Upside Down */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-6 h-full pointer-events-none">
          {/* Top Right - Tucked away */}
          <img src={flowCoin} className="w-28 translate-x-12 rotate-180 opacity-90" alt="" />
          
          {/* Middle Right - Pushed inward toward center */}
          <div className="flex flex-col gap-4 -translate-x-4">
             <img src={flowCoin} className="w-36 rotate-180 drop-shadow-xl" alt="" />
             <img src={flowCoin} className="w-36 rotate-180 drop-shadow-xl" alt="" />
          </div>
          
          {/* Bottom Right - Tucked away */}
          <img src={flowCoin} className="w-28 translate-x-12 rotate-180 opacity-90" alt="" />
        </div>

        {/* CONTENT AREA */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-[52px] md:text-[84px] font-[1000] text-black leading-[0.85] tracking-[ -0.05em] uppercase mb-8">
            Stay Productive.<br />Get Rewarded.
          </h1>
          
          <p className="text-xl md:text-[26px] font-bold text-black max-w-2xl leading-[1.2] mb-12 px-4">
            Turn your tools, subscriptions, and daily habits into <br className="hidden md:block"/> rewards all in one calm space
          </p>

          <button className="bg-[#151515] text-white px-12 py-5 rounded-full font-bold text-xl 
                             hover:scale-105 transition-all duration-300 
                             shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-t border-white/10">
            Unlock Rewards Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default CTA;