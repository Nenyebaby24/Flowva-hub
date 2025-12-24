import React from 'react';

export default function BrandsContent() {
  return (
    <div className="animate-fadeIn">
      {/* 1. BRAND LOGOS SECTION */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 opacity-60">
          <img src="/reclaim-logo.png" alt="Reclaim" className="h-8 md:h-12" />
          <img src="/brevo-logo.png" alt="Brevo" className="h-8 md:h-12" />
          <img src="/jotform-logo.png" alt="Jotform" className="h-8 md:h-12" />
        </div>
      </section>

      {/* 2. FEATURES GRID: AMPLIFY YOUR BRAND */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-black uppercase mb-12">
          Amplify your brand's success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F3E8FF] p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-black uppercase leading-tight">Engage active community of tech professionals</h3>
            <div className="flex justify-end"><span className="text-6xl">🧩</span></div>
          </div>
          <div className="bg-[#ECFCCB] p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-black uppercase leading-tight">Drive targeted conversion</h3>
            <div className="flex justify-end"><span className="text-6xl">💎</span></div>
          </div>
        </div>
      </section>

      {/* 3. GROWTH PLANS (Pricing) */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-4xl font-black uppercase mb-16">Growth Plans</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="border border-gray-200 p-8 rounded-[2.5rem] flex flex-col items-center">
            <span className="text-lg font-bold">Free</span>
            <div className="text-4xl font-black my-4">$0/Month</div>
            <button className="w-full py-3 bg-black text-white rounded-full font-bold mb-6">Get Started</button>
            <ul className="text-sm space-y-3 self-start text-gray-600">
              <li>• Limited analytics</li>
              <li>• Community access</li>
            </ul>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="bg-[#A855F7] p-8 rounded-[2.5rem] flex flex-col items-center text-white scale-105 shadow-2xl relative">
            <span className="absolute -top-4 bg-black text-white px-4 py-1 rounded-full text-xs">Recommended</span>
            <span className="text-lg font-bold">Pro</span>
            <div className="text-4xl font-black my-4">$150/Month</div>
            <button className="w-full py-3 bg-white text-black rounded-full font-bold mb-6">Start Trial</button>
            <ul className="text-sm space-y-3 self-start opacity-90">
              <li>• Advanced targeting</li>
              <li>• Custom reporting</li>
              <li>• Priority support</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-200 p-8 rounded-[2.5rem] flex flex-col items-center">
            <span className="text-lg font-bold">Premium</span>
            <div className="text-4xl font-black my-4">$450/Month</div>
            <button className="w-full py-3 bg-black text-white rounded-full font-bold mb-6">Contact Us</button>
            <ul className="text-sm space-y-3 self-start text-gray-600">
              <li>• Dedicated manager</li>
              <li>• API Access</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. SUCCESS STORIES (Small Testimonials for Brands) */}
      <section className="py-20 bg-[#F9FAFB]">
        <h2 className="text-center text-3xl font-black uppercase mb-10 italic">Success Stories</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#D1FAE5] p-6 rounded-3xl font-bold">"Flowvahub increased our sign-ups by 40% in two months!"</div>
            <div className="bg-[#FDF2F8] p-6 rounded-3xl font-bold">"The highest quality tech leads we've found."</div>
            <div className="bg-[#E0F2FE] p-6 rounded-3xl font-bold">"Exceptional partnership and organic growth."</div>
        </div>
      </section>
    </div>
  );
}