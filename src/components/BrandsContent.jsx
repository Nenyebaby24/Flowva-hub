import React from 'react';
import { BadgeCheck, Gift } from "lucide-react";
import { motion } from "framer-motion";



export default function BrandsContent() {
  return (
    <div className="animate-fadeIn">
      {/* 1. BRAND LOGOS SECTION */}
<section className="py-12 px-4 overflow-hidden bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Container with a mask for soft edges (optional but looks better) */}
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      
      <motion.div
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"], // Moves halfway because the list is doubled
        }}
        transition={{
          duration: 20, // Adjust for speed (higher = slower)
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set of logos */}
        <div className="flex gap-20 items-center shrink-0 opacity-60">
          <img src="/banner/reclaim.svg" alt="Reclaim" className="h-8 md:h-12" />
          <img src="/banner/brevo.svg" alt="Brevo" className="h-8 md:h-12" />
          <img src="/banner/jotform.svg" alt="Jotform" className="h-8 md:h-12" />
          <img src="/banner/monday.svg" alt="monday.com" className="h-8 md:h-12" />
        </div>

        {/* Duplicated set for seamless looping */}
        <div className="flex gap-20 items-center shrink-0 opacity-60">
          <img src="/banner/reclaim.svg" alt="Reclaim" className="h-8 md:h-12" />
          <img src="/banner/brevo.svg" alt="Brevo" className="h-8 md:h-12" />
          <img src="/banner/jotform.svg" alt="Jotform" className="h-8 md:h-12" />
          <img src="/banner/monday.svg" alt="monday.com" className="h-8 md:h-12" />
        </div>
      </motion.div>

      
      
    </div>
  </div>


  <section className="py-20 bg-white flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          
          {/* Text Container: Centers the H2 and P */}
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-[#344054] font-bold text-base mb-3 tracking-tight">
              Trusted by 20+ forward-thinking brands
            </h2>
            <p className="text-[#475467] text-lg max-w-2xl leading-relaxed">
              Join companies already reaching 10,000+ remote workers and freelancers 
              actively discovering and organizing their digital tools
            </p>
          </div>

          {/* Logo Row: Perfectly centered horizontal line */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-12 gap-y-8">
            
            {/* Boltshift */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/boltshift-logo.png" alt="" className="h-8 w-auto grayscale" />
              <span className="text-[#344054] font-bold text-2xl tracking-tight">Boltshift</span>
            </div>

            {/* FeatherDev */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/featherdev-logo.png" alt="" className="h-8 w-auto grayscale" />
              <span className="text-[#344054] font-bold text-2xl tracking-tight">FeatherDev</span>
            </div>

            {/* Spherule */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/spherule-logo.png" alt="" className="h-8 w-auto grayscale" />
              <span className="text-[#344054] font-bold text-2xl tracking-tight">Spherule</span>
            </div>

            {/* GlobalBank */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/globalbank-logo.png" alt="" className="h-8 w-auto grayscale" />
              <span className="text-[#344054] font-bold text-2xl tracking-tight">GlobalBank</span>
            </div>

            {/* Nietzsche */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/nietzsche-logo.png" alt="" className="h-8 w-auto grayscale" />
              <span className="text-[#344054] font-bold text-2xl tracking-tight">Nietzsche</span>
            </div>

          </div>
        </div>
      </section>
</section>

      {/* 2. FEATURES GRID: AMPLIFY YOUR BRAND */}
<section className="py-20 max-w-7xl mx-auto px-4">
  <h2 className="text-center text-6xl font-black uppercase mb-16 tracking-tighter">
    Amplify your brand's success
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Card 1: Community */}
    <div className="bg-[#F3E8FF] p-10 rounded-[2.5rem] flex flex-col min-h-[500px]">
      <h3 className="text-3xl font-bold leading-tight mb-8 max-w-xs">
        Engage an active community of tech savvy users
      </h3>
      
      {/* Centered Image Area */}
      <div className="flex-grow flex items-center justify-center py-6">
        <div className="relative w-64 h-48 flex items-center justify-center text-8xl">
           {/* Replace with your local asset or 3D illustration */}
           🤝 
        </div>
      </div>
      
      <p className="text-gray-600 text-lg font-medium leading-snug max-w-sm mt-auto">
        Thousands of engaged users explore and use tools on our platform everyday
      </p>
    </div>

    {/* Card 2: Exclusive Value */}
    <div className="bg-[#F8F3FF] p-10 rounded-[2.5rem] flex flex-col min-h-[500px]">
      <h3 className="text-3xl font-bold leading-tight mb-8 max-w-xs">
        Offer Exclusive Value
      </h3>
      
      {/* Centered Image Area */}
      <div className="flex-grow flex items-center justify-center py-6">
        <div className="flex items-center gap-4 text-7xl">
           {/* Replace with your local asset or 3D illustrations */}
           🎟️ 💵 💎
        </div>
      </div>
      
      <p className="text-gray-600 text-lg font-medium leading-snug max-w-sm mt-auto">
        Stand out with special discounts, cashback, or unique perks for our users
      </p>
    </div>
    
  </div>
</section>


{/* 2.5 FEATURES GRID: VISIBILITY & IMPACT */}
<section className="pb-20 max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Card 1: Boost Your Visibility */}
    <div className="bg-[#F8F3FF] p-10 rounded-[2.5rem] flex flex-col min-h-[550px] relative overflow-hidden">
      <h3 className="text-4xl font-bold leading-tight mb-4 text-black">
        Boost Your Visibility
      </h3>
      
      {/* Centered Graphic Area */}
      <div className="flex-grow flex items-center justify-center relative py-6">
        
        {/* The Spotlight Card Mockup */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-full max-w-[340px] relative z-10">
          <div className="text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-widest">Top Tool Spotlight</div>
          
          <div className="flex gap-4">
            {/* Yellow Circled Logo */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl border-[3px] border-white shadow-md flex items-center justify-center overflow-hidden">
                {/* Visual approximation of the logo in the image */}
                <div className="w-10 h-10 border-[5px] border-black rounded-full flex items-center justify-center">
                  <div className="w-1 h-4 bg-black rotate-45 absolute"></div>
                  <div className="w-1 h-4 bg-black -rotate-45 absolute"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {/* Profile Picture & Toolkit Owner */}
              <div className="flex items-center gap-2 mb-1">
                <img 
                  src="https://i.pravatar.cc/150?u=alex" 
                  alt="Alex Rivera" 
                  className="w-5 h-5 rounded-full object-cover border border-gray-200"
                />
                <span className="text-[10px] text-gray-500">From the toolkit of <strong className="text-black font-bold">"Alex Rivera"</strong></span>
              </div>
              
              <div className="text-xl font-black text-gray-900 leading-tight">Keeper Security</div>
              <div className="text-[11px] text-gray-400 font-medium">Password security made simple</div>
            </div>
          </div>

          {/* Bottom Stats & Category Tags */}
          <div className="mt-6 flex items-center justify-between">
             <div className="flex items-center gap-1 text-[10px] font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
               <span className="text-red-400 text-sm">★</span> 4.6 - 2.3k saves
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Security</span>
                <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-800">↗</div>
             </div>
          </div>
        </div>

        {/* Floating Icons from image_0896df.png */}
        <div className="absolute right-4 flex flex-col gap-6 transform translate-x-2">
          <div className="text-5xl drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>🧭</div>
          <div className="text-5xl drop-shadow-xl -rotate-12">📄</div>
          <div className="text-5xl drop-shadow-xl rotate-12">💳</div>
        </div>
      </div>
      
      <p className="text-gray-600 text-lg font-medium leading-snug max-w-[90%] mt-auto">
        Get featured across our Homepage, Discover section, Rewards Hub, Library, Newsletter, and Blog.
      </p>
    </div>

    {/* Card 2: Measure Your Impact */}
    <div className="bg-[#121212] p-10 rounded-[2.5rem] text-white flex flex-col min-h-[550px] relative overflow-hidden">
      <h3 className="text-4xl font-bold leading-tight mb-4">
        Measure Your Impact
      </h3>
      <p className="text-gray-400 text-lg font-medium max-w-[280px] mb-8">
        Track how many users unlock, engage with, and activate your offer.
      </p>
      
      {/* Large Stat and 3D Graphic Area */}
      <div className="flex-grow flex flex-col justify-center relative">
        <div className="text-8xl font-black mb-1 tracking-tighter">30,000+</div>
        <div className="text-xl font-bold text-gray-500 uppercase tracking-wide">
          Tools Added to Libraries
        </div>
        
        {/* Yellow 3D Star Frame Placeholder from image_0896df.png */}
        <div className="absolute right-[-20px] bottom-0 text-[12rem] rotate-[15deg] drop-shadow-[0_20px_50px_rgba(255,215,0,0.3)]">
          <div className="relative flex items-center justify-center">
             <span className="z-10">⭐</span>
             {/* Simple CSS shape to mimic the yellow border frame */}
             <div className="absolute w-32 h-32 bg-yellow-400 rounded-3xl -z-10 blur-sm opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>

      {/* Suscribe to Flowva */}
 <section className="w-full bg-white py-20">
  
      <div className="mx-auto max-w-7xl px-6">
        {/* Top heading */}
        <h2 className="text-center text-5xl font-extrabold uppercase tracking-tight">
          Why Subscribe to Flowva?
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
              Value Proposition
            </p>

            <h3 className="text-6xl font-extrabold leading-tight uppercase">
              Trusted by Leading
              <br />
              Products with
              <br />
              Organic Marketing
              <br />
              Success
            </h3>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Card 1 */}
            <div className="relative flex-1 rounded-3xl bg-purple-400 p-8 text-white">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <BadgeCheck className="h-6 w-6 text-white" />
              </div>

              <h4 className="mb-3 text-2xl font-bold">
                Verified engagement
              </h4>

              <p className="text-sm leading-relaxed text-white/90">
                Reach active tech-savvy professionals who manage their tool
                libraries and actually try new tools, all included with your
                subscription.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative flex-1 rounded-3xl bg-pink-400 p-8 text-white">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Gift className="h-6 w-6 text-white" />
              </div>

              <h4 className="mb-3 text-2xl font-bold">
                Reward-Driven Growth
              </h4>

              <p className="text-sm leading-relaxed text-white/90">
                Incentivize users automatically with Flowva’s built-in rewards
                system — no extra fees, fully handled by the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* CARD 1 */}
          <div className="rounded-3xl bg-orange-500 p-8 text-white">
            <div className="mb-6 text-4xl">🧑‍💻</div>

            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Full Self-Serve Freedom
            </h3>

            <p className="text-sm leading-relaxed text-white/90">
              Launch and manage campaigns anytime with an intuitive dashboard.
              Target your campaigns, schedule actions, and track engagement with
              complete control.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl bg-blue-500 p-8 text-white">
            <div className="mb-6 text-4xl">💎</div>

            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Optional Premium Support
            </h3>

            <p className="text-sm leading-relaxed text-white/90">
              For top-tier brands or high-impact campaigns, our team can manage
              your campaigns, optimize engagement, and provide advanced
              analytics.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl bg-pink-500 p-8 text-white">
            <div className="mb-6 text-4xl">🔒</div>

            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Exclusive Access
            </h3>

            <p className="text-sm leading-relaxed text-white/90">
              Your subscription unlocks Flowva’s curated audience. Our users are
              verified, engaged, and relevant. Limited campaign slots maintain
              visibility and exclusivity.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-3xl bg-green-500 p-8 text-white">
            <div className="mb-6 text-4xl">📊</div>

            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Actionable Analytics
            </h3>

            <p className="text-sm leading-relaxed text-white/90">
              Track real results: tool trials, user interactions, engagement
              trends—not just impressions. Make data-driven decisions for every
              campaign.
            </p>
          </div>

        </div>
      </div>
    </div>
    </section>

      
      {/* 3. GROWTH PLANS (Pricing) */}
<section className="py-20 bg-white">
  <h2 className="text-center text-5xl font-black mb-16 italic uppercase tracking-tight">Growth Plans</h2>
  
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
    
    {/* Card 1 - Basic */}
    <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col">
      <div className="mb-10">
        <button className="w-full py-4 bg-gradient-to-b from-[#444] to-black text-white rounded-full font-bold text-lg shadow-lg border-t border-white/20">
          Start Your 3-Day Free Trial
        </button>
      </div>
      <div className="border-t border-gray-300 mb-8 w-full"></div>
      <p className="font-bold italic mb-8 leading-snug text-[1.05rem]">
        Perfect for brands testing Flowva or running focused campaigns.
      </p>
      <ul className="space-y-5 text-[15px] font-semibold text-gray-900">
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Self-serve campaign dashboard – manage everything yourself</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Run 1-2 featured campaigns per month</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Featured placement in Discovery and Newsletter</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Basic analytics & performance reporting</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Offer perks and discounts directly to users</li>
      </ul>
    </div>

    {/* Card 2 - Pro (Purple) */}
    <div className="bg-[#6B00D7] p-10 rounded-[2.5rem] text-white flex flex-col shadow-2xl scale-105 z-10">
      <div className="mb-10">
        <button className="w-full py-4 bg-white text-black rounded-full font-bold text-lg shadow-md border-b-4 border-gray-200">
          Get Started Now
        </button>
      </div>
      <div className="border-t border-white/30 mb-8 w-full"></div>
      <p className="font-bold italic mb-8 leading-snug text-[1.05rem]">
        For brands ready to scale visibility and drive meaningful engagement
      </p>
      <ul className="space-y-5 text-[15px] font-semibold">
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Self-serve campaign dashboard – manage everything yourself</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Run 3-5 featured campaigns per month</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Featured placement in Discovery, Rewards, and Newsletter</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Priority visibility in listings and recommendations</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Advanced analytics with deeper user insights</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Offer perks, discounts, and rewards on the highly-engaged Rewards page for maximum visibility</li>
      </ul>
    </div>

    {/* Card 3 - Enterprise */}
    <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col">
      <div className="mb-10">
        <button className="w-full py-4 bg-gradient-to-b from-[#444] to-black text-white rounded-full font-bold text-lg shadow-lg border-t border-white/20">
          Get Started Now
        </button>
      </div>
      <div className="border-t border-gray-300 mb-8 w-full"></div>
      <p className="font-bold italic mb-8 leading-snug text-[1.05rem]">
        For brands seeking premium positioning and consistent exposure across Flowva.
      </p>
      <ul className="space-y-5 text-[15px] font-semibold text-gray-900">
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Self-serve campaign dashboard – manage everything yourself</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Unlimited features per month</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Premium placement across Homepage, Discovery, Rewards, Blog, and Newsletter</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Premium analytics with trend tracking and performance reports</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Early access to new users and emerging tools</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Optional managed campaigns by the Flowva team</li>
        <li className="flex gap-3 leading-tight"><span className="text-xl">✓</span> Offer perks, discounts, and rewards on the highly-engaged Rewards page for maximum visibility and participation</li>
      </ul>
    </div>

  </div>
</section>
      {/* --- START OF SUBSCRIPTION SECTION --- */}
      <section className="bg-white py-12 px-6">
        <h1 className="text-center text-6xl mb-6 font-extrabold leading-tigh">HOW IT WORKS</h1>
        <div className="max-w-7xl mx-auto">
          
          {/* Grid for Steps 1 - 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                id: 1,
                stepText: "Step 1",
                title: "Subscribe.",
                description: "Choose the plan that fits your feature goals.",
                bgColor: "bg-[#F17336]", // Orange
                image: "/images/subscribe.svg", 
              },
              {
                id: 2,
                stepText: "Step 2",
                title: "Launch Features",
                description: "Set up actions, schedule them, and reach techies, freelancers, and remote workers where they work.",
                bgColor: "bg-[#A855F7]", // Purple
                image: "/images/launch.svg",
              },
              {
                id: 3,
                stepText: "Step 3",
                title: "Engage Users",
                description: "Offer perks and rewards that drive deeper participation.",
                bgColor: "bg-[#ED5C8A]", // Pink
                image: "/images/speaker.svg", 
              },
              {
                id: 4,
                stepText: "Step 4",
                title: "Track Results",
                description: "Monitor feature performance in real time with actionable analytics.",
                bgColor: "bg-[#0B8A44]", // Green
                image: "/images/track.svg", 
              },
            ].map((step) => (
              <div
                key={step.id}
                className={`${step.bgColor} rounded-[40px] p-10 min-h-[550px] flex flex-col relative overflow-hidden text-white`}
              >
                <div className="bg-white text-black font-medium px-5 py-1.5 rounded-full w-fit mb-6 text-sm">
                  {step.stepText}
                </div>
                <h2 className="text-5xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg opacity-90 max-w-xs leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-auto flex justify-center pb-4">
                  <img src={step.image} alt={step.title} className="w-64 h-auto object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Final Step 5 - Full Width Layout */}
          <div className="bg-[#149174] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden text-white min-h-[400px]">
            <div className="z-10 max-w-xl text-left">
              <div className="bg-white text-black font-medium px-5 py-1.5 rounded-full w-fit mb-6 text-sm">
                Step 5
              </div>
              <h2 className="text-5xl font-bold mb-6">Optional Premium Support</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Optional Premium Support – Let the Flowva team run your features for maximum impact.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 flex shrink-0">
              <img 
                src="/images/crown.svg" 
                alt="Premium Support" 
                className="w-64 md:w-80 h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 4. SUCCESS STORIES (Small Testimonials for Brands) */}
     {/* 4. SUCCESS STORIES */}
<section className="py-20 bg-white">
  <div className="text-center mb-12">
    {/* Floating Heart Icon Placeholder */}
    <div className="flex justify-center mb-2">
      <div className="flex -space-x-1">
        <span className="text-2xl">💜</span>
      </div>
    </div>
    <h2 className="text-5xl font-black mb-4">Success Stories</h2>
    <p className="text-gray-500 font-medium">Tools That Found Their Audience with Flowva</p>
  </div>

  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    
    {/* Card 1: Blue */}
    <div className="bg-[#60D2FF] p-8 rounded-[20px] shadow-sm flex flex-col justify-between min-h-[320px]">
      <p className="text-xl font-semibold leading-snug text-gray-900">
        Flowva gave us a new channel of discovery. Users were genuinely interested and engagement was higher than on ads.
      </p>
      <div className="flex items-center mt-8 space-x-2">
        <div className="w-10 h-10 bg-[#4B5563] rounded-full flex items-center justify-center text-white font-bold italic">⚡</div>
        <span className="font-bold text-lg">@ProductivityApp</span>
      </div>
    </div>

    {/* Card 2: Lime Green */}
    <div className="bg-[#BFFF4F] p-8 rounded-[20px] shadow-sm flex flex-col justify-between min-h-[250px]">
      <p className="text-xl font-semibold leading-snug text-gray-900">
        Seamless and simple our sign-ups grew with no extra work on our end.
      </p>
      <div className="flex items-center mt-8 space-x-2">
        <div className="w-10 h-10 bg-[#4B5563] rounded-lg flex items-center justify-center text-white">📦</div>
        <span className="font-bold text-lg">@Devtoolkit</span>
      </div>
    </div>

    {/* Card 3: Mint/Teal */}
    <div className="bg-[#60FFE7] p-8 rounded-[20px] shadow-sm flex flex-col justify-between min-h-[280px]">
      <p className="text-xl font-semibold leading-snug text-gray-900">
        Users loved our cashback perk, and Flowva made the process seamless.
      </p>
      <div className="flex items-center mt-8 space-x-2">
        <div className="w-10 h-10 border-2 border-[#4B5563] rounded-full flex items-center justify-center font-bold text-[#4B5563]">🌐</div>
        <span className="font-bold text-lg">@Teamtoolkit</span>
      </div>
    </div>

  </div>
</section>
    

  </div>

  );
}