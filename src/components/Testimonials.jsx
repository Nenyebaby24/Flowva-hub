import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonialPages = [
    // PAGE 1: Card 2 and 3 are shifted UP
    [
      { bg: "bg-[#5DDBFF]", text: "Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools — everything’s clear, organized, and right there. Feels less like searching, more like unlocking possibilities. ☕💜", name: "Ummaratu M.", title: "Freelancer & Virtual Assistant", offset: false },
      { bg: "bg-[#F3FF60]", text: "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I’d marry it", name: "Adewale O.", title: "Freelancer & Digital Creator", offset: true },
      { bg: "bg-[#F28CFF]", text: "Didn’t even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That’s the kind of motivation I need.", name: "Lois E.", title: "Social media manager", offset: true }
    ],
    // PAGE 2: Card 2 is shifted UP
    [
      { bg: "bg-[#F3FF60]", text: "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I’d marry it", name: "Adewale O.", title: "Freelancer & Digital Creator", offset: false },
      { bg: "bg-[#F28CFF]", text: "Didn’t even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That’s the kind of motivation I need.", name: "Lois E.", title: "Social media manager", offset: true },
      { bg: "bg-[#5FFF60]", text: "The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!", name: "Stella R.", title: "Trainee at Digital Witch Community", offset: false }
    ],
    // PAGE 3: Card 1 is shifted UP
    [
      { bg: "bg-[#F28CFF]", text: "Didn’t even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That’s the kind of motivation I need.", name: "Lois E.", title: "Social media manager", offset: true },
      { bg: "bg-[#5FFF60]", text: "The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!", name: "Stella R.", title: "Trainee at Digital Witch Community", offset: false },
      { bg: "bg-[#60FFE9]", text: "My favorite feature is subscription management — it helps me avoid wasting money and makes sure every penny counts.", name: "Uchechukwu P.", title: "Freelancer", offset: false }
    ]
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentPage, isPaused, testimonialPages.length]);

  return (
    <section className="py-32 max-w-7xl mx-auto px-4 overflow-hidden bg-white">
      <h2 className="text-center text-4xl font-black mb-24 uppercase tracking-tight text-black">
        Join a growing community
      </h2>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {testimonialPages.map((page, pageIndex) => (
            <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2 items-end">
              {page.map((t, i) => (
                <div
                  key={i}
                  className={`${t.bg} p-10 rounded-[1.8rem] min-h-[480px] flex flex-col justify-between shadow-sm border border-black/5 transition-transform duration-500
                    ${t.offset ? '-translate-y-16 md:-translate-y-24' : 'translate-y-0'}`}
                >
                  <p className="text-[20px] font-semibold leading-[1.3] text-black">
                    {t.text}
                  </p>

                  <div className="mt-8">
                    <div className="flex gap-1 mb-2 text-[#1a1a1a] text-lg">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                    <strong className="block text-[28px] font-black text-black leading-tight">
                      {t.name}
                    </strong>
                    <span className="block text-[15px] text-black/80 font-bold mt-1">
                      {t.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-20">
          {testimonialPages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`transition-all duration-500 rounded-full h-2.5 ${
                i === currentPage 
                  ? 'w-10 bg-black' 
                  : 'w-2.5 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



