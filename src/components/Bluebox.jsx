import React from "react"; // Corrected import path

const Bluebox = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Blue Card */}
      <div className="relative w-full max-w-5xl bg-blue-500 rounded-[40px] py-42 px-10 overflow-hidden flex flex-col items-center justify-center">
        <h1 className="absolute top-10 text-white text-4xl font-bold">START YOUR CAMPAIGN</h1>
        
        <div className="mt-8 md:mt-0 flex shrink-0" >
          <img src="/handshake.png" alt="Handshake" className="w-64 h-auto object-contain" />
        </div>

        <p className="text-white text-semibold text-center text-2xl mt-8">
          Flowva works with brands to give our users exclusive discounts,
          cashback, and <br/>perks.
        </p>

        <button className="bg-gradient-to-b from-[#333] to-[#111] text-white px-10 py-5 rounded-[40px] font-bold text-lg 
                           hover:scale-105 transition-all duration-300 
                           shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-t border-white/20 mt-10">
          Claim Your Spot
        </button>
      </div>
    </section>
  );
};

export default Bluebox;