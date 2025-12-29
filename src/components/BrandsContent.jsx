import React from 'react';
import { motion } from "framer-motion";
import verifiedIcon from '../assets/verified.svg';
import growthIcon from '../assets/growth.svg';
import selfServeIcon from '../assets/self-serve.svg'; 
import premiumIcon from '../assets/premium.svg';
import exclusiveIcon from '../assets/exclusive.svg';
import analyticsIcon from '../assets/analytics.svg';




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
        <div className="flex gap-6 items-center shrink-0">
            {/* Reclaim */}
  <div className="h-52 w-56 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
    <img src="/banner/reclaim.svg" alt="Reclaim" className="h-10 md:h-12" />
  </div>

          {/* Brevo */}
  <div className="h-52 w-56 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
    <img src="/banner/brevo.png" alt="Brevo" className="h-28 md:h-30" />
  </div>

           {/* Jotform */}
  <div className="h-52 w-56 rounded-2xl border border-orange-200 bg-[#FF6A00] flex items-center justify-center">
    <img src="/banner/jotform.svg" alt="Jotform" className="h-10 md:h-12" />
  </div>
          {/* Monday */}
  <div className="h-52 w-56 rounded-2xl border border-indigo-200 bg-[#5B5BD6] flex items-center justify-center">
    <img src="/banner/monday.svg" alt="monday.com" className="h-28 md:h-30" />
  </div>
        </div>

        {/* Duplicated set for seamless looping */}
        <div className="flex gap-6 items-center shrink-0">
         <div className="h-52 w-56 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
    <img src="/banner/reclaim.svg" alt="Reclaim" className="h-10 md:h-12" />
  </div>
          <div className="h-52 w-56 rounded-2xl border border-gray-200 bg-white flex items-center justify-center">
    <img src="/banner/brevo.png" alt="Brevo" className="h-28 md:h-30" />
  </div>
           <div className="h-52 w-56 rounded-2xl border border-orange-200 bg-[#FF6A00] flex items-center justify-center">
    <img src="/banner/jotform.svg" alt="Jotform" className="h-10 md:h-12" />
  </div>
           <div className="h-52 w-56 rounded-2xl border border-indigo-200 bg-[#5B5BD6] flex items-center justify-center">
    <img src="/banner/monday.svg" alt="monday.com" className="h-28 md:h-30" />
  </div>
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
            <p className="text-[#475467] text-lg leading-relaxed">
              Join companies already reaching 10,000+ remote workers and freelancers 
              actively discovering and organizing their digital tools
            </p>
          </div>

          {/* Logo Row: Perfectly centered horizontal line */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-12 gap-y-8">
            
            {/* Boltshift */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/boltshift-logo.svg" alt="" className="h-8 w-auto grayscale" />
             
            </div>

            {/* FeatherDev */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/featherdev-logo.svg" alt="" className="h-8 w-auto grayscale" />
              
            </div>

            {/* Spherule */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/spherule-logo.svg" alt="" className="h-8 w-auto grayscale" />
              
            </div>

            {/* GlobalBank */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/globalbank-logo.svg" alt="" className="h-8 w-auto grayscale" />
              
            </div>

            {/* Nietzsche */}
            <div className="flex items-center gap-3 shrink-0">
              <img src="/nietzsche-logo.svg" alt="" className="h-8 w-auto grayscale" />
              
            </div>

          </div>
        </div>
      </section>
</section>

      {/* 2. FEATURES GRID: AMPLIFY YOUR BRAND (RESIZED) */}
<section className="py-16 max-w-5xl mx-auto px-4 -mt-32">
  <h2 className="text-center text-5xl font-black uppercase mb-12 tracking-tighter">
    Amplify your brand's success
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
    
    {/* Card 1: Community */}
    <div className="bg-[#F3E8FF] p-8 rounded-[2rem] flex flex-col min-h-[400px]">
      <h3 className="text-2xl font-bold leading-tight mb-6 max-w-[250px]">
        Engage an active community of tech savvy users
      </h3>
      
      {/* Centered Image Area */}
      <div className="flex-grow flex items-center justify-center py-4">
        <div className="flex items-center gap-4">
          {/* Reduced image height to fit new card scale */}
          <img src='/engage.svg' alt='' className="h-32 w-auto" />
        </div>
      </div>
      
      <p className="text-gray-600 text-base font-medium leading-snug max-w-[300px] mt-auto">
        Thousands of engaged users explore and use tools on our platform everyday
      </p>
    </div>

    {/* Card 2: Exclusive Value */}
    <div className="bg-[#F8F3FF] p-8 rounded-[2rem] flex flex-col min-h-[400px]">
      <h3 className="text-2xl font-bold leading-tight mb-6 max-w-[250px]">
        Offer Exclusive Value
      </h3>
      
      {/* Centered Image Area */}
      <div className="flex-grow flex items-center justify-center py-4">
        <div className="flex items-center gap-4">
           <img src='/offer.svg' alt='' className="h-32 w-auto" />
        </div>
      </div>
      
      <p className="text-gray-600 text-base font-medium leading-snug max-w-[300px] mt-auto">
        Stand out with special discounts, cashback, or unique perks for our users
      </p>
    </div>
    
  </div>

  {/* 2.5 FEATURES GRID: VISIBILITY & IMPACT */}
 
<div className="pb-20 max-w-7xl mx-auto px-4 mt-6">
  <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">

    {/* Card 1: Boost Your Visibility (IMAGE ONLY) */}
    <div className="bg-[#F8F3FF] p-6 rounded-[2rem] flex flex-col min-h-[400px]">
      <h3 className="text-3xl font-bold leading-tight mb-3 text-black">
        Boost Your Visibility
      </h3>

      {/* Image fills the visual space */}
      <div className="flex-grow flex items-center justify-center">
        <img
          src="/tool/toptool.svg"
          alt="Top Tool Spotlight"
          className="w-full max-w-[340px] h-auto object-contain"
        />
      </div>

      <p className="text-gray-600 text-lg font-medium leading-snug max-w-[90%] mt-auto">
        Get featured across our Homepage, Discover, Rewards Hub, and more.
      </p>
    </div>

       {/* Card 2: Measure Your Impact */}
<div className="bg-[#121212] p-8 rounded-[2rem] text-white flex flex-col min-h-[400px] relative overflow-hidden">
  
  {/* Header Section */}
  <h3 className="text-4xl font-bold leading-tight mb-4">
    Measure Your Impact
  </h3>
  <p className="text-gray-400 text-base font-medium max-w-[280px]">
    Track how many users unlock, engage with, and activate your offer.
  </p>

  {/* Stats Section: Anchored Left */}
  <div className="absolute bottom-8 left-8 z-10">
    <div className="text-6xl font-bold tracking-tighter">
      30,000+
    </div>
    <p className="text-lg font-bold text-white mt-1 leading-tight max-w-[130px]">
      Tools Added to Libraries
    </p>
  </div>

  {/* Icons Section: Anchored Bottom-Right */}
  <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
    
    {/* Yellow 3D Star (Layered BEHIND the graph) */}
    {/* Lowered z-index and positioned slightly left to make room for overlap */}
    <div className="absolute bottom-8 right-3 rotate-[12deg] z-10">
      <img 
        src="/tool/star.svg" 
        alt="" 
        className="w-32 h-auto drop-shadow-[0_30px_60px_rgba(234,179,8,0.4)]" 
      />
    </div>

    {/* Blue Progress Graph (Layered ON TOP of the star) */}
    {/* Higher z-index and pushed off-edge to the right */}
    <div className="absolute bottom-14 -right-15 rotate-[-8deg] z-20">
      <img 
        src="/tool/progress.svg" 
        alt="" 
        className="w-36 h-auto drop-shadow-lg" 
      />
     </div>
    
    </div>
    </div>
    </div>

   </div>

   {/* Suscribe to Flowva */}
<section className="w-full bg-white py-20 -mt-32">
  <div className="mx-auto max-w-7xl px-6">
    {/* Top heading */}
    <h2 className="text-center text-5xl font-extrabold uppercase tracking-tight">
      Why Subscribe to Flowva?
    </h2>

    <div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* LEFT CONTENT */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
          Value Proposition
        </p>

        <h3 className="text-4xl font-extrabold leading-tight uppercase">
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
          <div className="mb-6">
           <img src={verifiedIcon} alt="Verified" className="h-12 w-12" />
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
          <div className="mb-6">
          <img src={growthIcon} alt="Growth" className="h-12 w-12" />
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
          <div className="mb-6">
          <img src={selfServeIcon} alt="Self Serve" className="h-12 w-12" />
        </div>
          <h3 className="mb-4 text-2xl font-bold leading-snug">Full Self-Serve Freedom</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Launch and manage campaigns anytime with an intuitive dashboard.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="rounded-3xl bg-blue-500 p-8 text-white">
          <div className="mb-6">
          <img src={premiumIcon} alt="Premium Support" className="h-12 w-12" />
        </div>
          <h3 className="mb-4 text-2xl font-bold leading-snug">Optional Premium Support</h3>
          <p className="text-sm leading-relaxed text-white/90">
            For top-tier brands or high-impact campaigns, our team can manage your campaigns.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="rounded-3xl bg-pink-500 p-8 text-white">
          <div className="mb-6">
          <img src={exclusiveIcon} alt="Exclusive Access" className="h-12 w-12" />
        </div>
          <h3 className="mb-4 text-2xl font-bold leading-snug">Exclusive Access</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Your subscription unlocks Flowva’s curated audience. Our users are verified.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="rounded-3xl bg-green-500 p-8 text-white">
          <div className="mb-6">
          <img src={analyticsIcon} alt="Analytics" className="h-12 w-12" />
        </div>
          <h3 className="mb-4 text-2xl font-bold leading-snug">Actionable Analytics</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Track real results: tool trials, user interactions, engagement trends.
          </p>
        </div>
      </div>

      {/* STATS SECTION FROM IMAGE */}
      <div className="-mt-8 grid grid-cols-1 gap-12 border-t border-gray-100 pt-16 md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-6xl font-black md:text-7xl">1200+</span>
          <div className="mt-4 h-[1px] w-full bg-gray-200" />
          <span className="mt-4 text-sm font-bold uppercase tracking-wider text-gray-900">
            Active User/Month
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="text-6xl font-black md:text-7xl">35M+</span>
          <div className="mt-4 h-[1px] w-full bg-gray-200" />
          <span className="mt-4 text-sm font-bold uppercase tracking-wider text-gray-900">
            Impressions
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="text-6xl font-black md:text-7xl">4200+</span>
          <div className="mt-4 h-[1px] w-full bg-gray-200" />
          <span className="mt-4 text-sm font-bold uppercase tracking-wider text-gray-900">
            Personalized Ads
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* 3. GROWTH PLANS (Pricing) */}
<section className="py-20 bg-white -mt-16">
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
      

</section>


       {/* 4. SUCCESS STORIES */}
<section className="py-20 bg-white -mt-32">
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

</section>
</div>



      
      
      

    
    

  

  );
}