import React from "react"; 
import { useNavigate } from 'react-router-dom';

const Bluebox = () => {
   
  const navigate = useNavigate();

 
  const handleNavigation = () => {
    navigate('/jotform'); 
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-blue-500 rounded-[40px] py-42 px-10 overflow-hidden flex flex-col items-center justify-center">
        <h1 className="absolute top-10 text-white text-4xl font-bold">START YOUR CAMPAIGN</h1>
        
        <div className="mt-8 md:mt-0 flex shrink-0" >
          <img src="/handshake.png" alt="Handshake" className="w-64 h-auto object-contain" />
        </div>

        <p className="text-white font-semibold text-center text-2xl mt-8">
          Flowva works with brands to give our users exclusive discounts,
          cashback, and <br/>perks.
        </p>

        <button 
          onClick={handleNavigation} 
          className="relative inline-flex items-center justify-center rounded-full px-10 py-6 text-[17px] font-semibold tracking-tight text-white transition-all duration-300 bg-black bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border border-white/10 shadow-xl whitespace-nowrap cursor-pointer hover:from-purple-600 hover:via-purple-700 hover:to-purple-900 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.02] before:absolute before:-inset-[2px] before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:-z-10"
        >
          Claim Your Spot
        </button>
      </div>
    </section>
  );
};

export default Bluebox;