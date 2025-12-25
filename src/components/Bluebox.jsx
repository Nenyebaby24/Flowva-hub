import React from "react"; // Corrected import path

const Bluebox = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Blue Card */}
      <div className="relative w-full max-w-6xl bg-blue-500 rounded-[40px] py-20 px-10 overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">START YOUR CAMPAIGN</h1>
        
        <div>
          <img src="/handshake.png" alt="Handshake" className="w-10 h-10 mb-4" />
        </div>

        <p className="text-white text-center mb-8">
          Flowva works with brands to give our users exclusive discounts, <br /> 
          cashback, and <b>perks.</b>
        </p>

        <button className="bg-gradient-to-b from-[#333] to-[#111] text-white px-10 py-5 rounded-[40px] font-bold text-lg 
                           hover:scale-105 transition-all duration-300 
                           shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-t border-white/20">
          Claim Your Spot
        </button>
      </div>
    </section>
  );
};

export default Bluebox;