import React, { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';

const everythingSlides = [
  {
    id: 0,
    title: "Everything in one place",
    leftCard: {
      image: "everything.png",
      text: "All your tools",
      subtext: "Connect your entire tech stack to one unified dashboard."
    },
    rightCard: {
      image: "everything2.png",
      text: "Smart Search",
      subtext: "Find any file or task across all your apps instantly."
    }
  },
  {
    id: 1,
    title: "EVERYTHING IN ONE PLACE",
    leftCard: {
      image: "everything2.png",
      text: "Discover what works",
      subtext: "New tools tailored to your workflow, curated for freelancers and remote workers."
    },
    rightCard: {
      image: "rewards_grid",
      text: "Get Rewarded",
      subtext: "Earn perks, gift cards and cashback just for staying productive."
    }
  },
  {
    id: 2,
    title: "Maximize Productivity",
    leftCard: {
      image: "everything.png",
      text: "Stay Focused",
      subtext: "Minimize distractions with a calm, organized workspace."
    },
    rightCard: {
      image: "everything2.png",
      text: "Workflow Insights",
      subtext: "Analyze your habits and optimize your daily routine."
    }
  }
];

export default function Everything() {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Auto-play Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === everythingSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex]); // Re-run when index changes to reset the timer

  return (
    <section className="py-20 px-6 bg-[#F3F0FF] rounded-[3rem] mx-4 my-10 min-h-[700px] flex flex-col items-center">
      {/* Title Section */}
      <div className="mb-12 text-center h-[120px] flex items-center justify-center">
        <h2 className="text-6xl md:text-7xl font-[1000] tracking-tighter text-black uppercase">
          {everythingSlides[activeIndex].title}
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-6xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Left Card */}
            <div className="flex flex-col">
              <div className="bg-white/50 rounded-[2.5rem] p-8 h-[400px] flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src={everythingSlides[activeIndex].leftCard.image} 
                  alt="Feature"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-black mb-2 px-2 uppercase tracking-tight">
                {everythingSlides[activeIndex].leftCard.text}
              </h3>
              <p className="text-lg text-gray-500 font-medium px-2 leading-tight">
                {everythingSlides[activeIndex].leftCard.subtext}
              </p>
            </div>

            {/* Right Card */}
            <div className="flex flex-col">
              <div className="bg-white rounded-[2.5rem] p-8 h-[400px] flex items-center justify-center overflow-hidden mb-6 shadow-sm">
                {everythingSlides[activeIndex].rightCard.image === "rewards_grid" ? (
                  <RewardsGrid />
                ) : (
                  <img 
                    src={everythingSlides[activeIndex].rightCard.image} 
                    alt="Feature"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <h3 className="text-2xl font-black text-black mb-2 px-2 uppercase tracking-tight">
                {everythingSlides[activeIndex].rightCard.text}
              </h3>
              <p className="text-lg text-gray-500 font-medium px-2 leading-tight">
                {everythingSlides[activeIndex].rightCard.subtext}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3-Dot Navigation */}
      <div className="mt-16 flex gap-3">
        {everythingSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-10 bg-black' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function RewardsGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="w-12 h-12 flex items-center justify-center text-2xl">
          {i % 3 === 0 ? "🎁" : i % 3 === 1 ? "🛠️" : "💵"}
        </div>
      ))}
    </div>
  );
}