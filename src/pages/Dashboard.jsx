import React from 'react';

export default function BrandsContent() {
  return (
    <div className="animate-fadeIn pb-20">
      {/* ... previous sections (Logos, Amplify, Why Subscribe, Pricing) ... */}

      {/* 5. HOW IT WORKS SECTION (Exact Match) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-black uppercase mb-16 tracking-tight">
          How It Works
        </h2>
        
        {/* Top Row: 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Reach */}
          <div className="bg-[#FFB7A0] p-12 rounded-[3.5rem] min-h-[550px] flex flex-col justify-between shadow-sm">
            <div className="flex justify-center items-center flex-1">
              <span className="text-[160px] drop-shadow-2xl">🚀</span>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-3">1. REACH YOUR AUDIENCE</h3>
              <p className="font-bold text-lg opacity-80 leading-snug">
                Launch targeted ad campaigns and sponsorships to the right professionals.
              </p>
            </div>
          </div>

          {/* Card 2: Engage */}
          <div className="bg-[#A7F3F0] p-12 rounded-[3.5rem] min-h-[550px] flex flex-col justify-between shadow-sm">
            <div className="flex justify-center items-center flex-1">
              <span className="text-[160px] drop-shadow-2xl">📢</span>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-3">2. ENGAGE & CONNECT</h3>
              <p className="font-bold text-lg opacity-80 leading-snug">
                Offer rewards, exclusive content, and interactive challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 3: Drive Growth */}
          <div className="bg-[#FFB7A0] p-10 rounded-[3rem] min-h-[400px] flex flex-col justify-between shadow-sm">
            <h3 className="text-2xl font-black">3. DRIVE GROWTH</h3>
            <p className="font-bold opacity-70">Launch targeted ad campaigns to the professionals.</p>
            <div className="flex justify-end"><span className="text-6xl">📢</span></div>
          </div>

          {/* Card 4: ID Card (Purple) */}
          <div className="bg-[#B084FF] p-10 rounded-[3rem] min-h-[400px] flex flex-col justify-between text-white shadow-sm relative overflow-hidden">
             <div className="bg-white/20 self-start px-4 py-1 rounded-full text-[10px] font-bold">ID</div>
             <div className="flex justify-center"><span className="text-8xl drop-shadow-lg">🚀</span></div>
             <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-widest">E2DFA2FFE</h3>
                <p className="text-xs opacity-80">Organic growth engine identifier.</p>
             </div>
          </div>

          {/* Card 5: Flowva Utility (Green) */}
          <div className="bg-[#059669] p-10 rounded-[3rem] min-h-[400px] flex flex-col justify-between text-white shadow-sm">
            <h3 className="text-2xl font-black">FLOWVA UTILITY</h3>
            <div className="flex justify-center"><span className="text-[100px]">👑</span></div>
            <p className="font-bold opacity-80">Maximize brand loyalty with custom rewards.</p>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES (Bubbles) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="text-center mb-12">
            <span className="text-purple-600 text-3xl font-bold">💬</span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Success Stories</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#93C5FD] p-8 rounded-[2.5rem] font-bold text-lg leading-tight shadow-sm">
            "Flowvahub increased our sign-ups by 40% in two months!"
            <div className="mt-4 text-sm opacity-60">@marketing_lead</div>
          </div>
          <div className="bg-[#BEF264] p-8 rounded-[2.5rem] font-bold text-lg leading-tight shadow-sm">
            "The highest quality tech leads we've found in the market."
            <div className="mt-4 text-sm opacity-60">@brand_owner</div>
          </div>
          <div className="bg-[#A5F3FC] p-8 rounded-[2.5rem] font-bold text-lg leading-tight shadow-sm">
            "Exceptional partnership and organic growth."
            <div className="mt-4 text-sm opacity-60">@startup_founder</div>
          </div>
        </div>
      </section>

      {/* 7. NEED ANSWERS? (FAQ trigger) */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight">Need Answers?</h2>
      </section>
    </div>
  );
}
