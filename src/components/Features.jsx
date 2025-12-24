import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

// Helper component for the FlowCoins design
function Coin({ top, right, scale, zIndex = 10, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ position: "absolute", top, right, zIndex, scale }}
      className="w-24 h-24 bg-gradient-to-br from-[#FF9BF0] via-[#D19BFF] to-[#BD7AFF] rounded-full flex flex-col items-center justify-center text-white border-[3px] border-white shadow-2xl"
    >
      <span className="text-xl font-black leading-none drop-shadow-md">50</span>
      <span className="text-[7px] font-black uppercase tracking-tighter">FlowCoins</span>
      <div className="absolute top-2 left-4 w-10 h-5 bg-white/20 rounded-full blur-[1px] -rotate-45" />
    </motion.div>
  );
}

const slides = [
  {
    id: 0,
    number: "1",
    title: "Sign up & Connect",
    desc: "Set up your workspace in minutes",
    color: "bg-[#F3F0FF]",
    content: (
      <div className="bg-white rounded-3xl p-6 shadow-xl w-64 border border-gray-100 scale-90">
        <h4 className="text-sm font-bold mb-4">Continue</h4>
        <div className="space-y-2">
          <div className="h-8 bg-gray-50 rounded-lg border border-gray-100 px-3 text-[10px] flex items-center text-gray-400">Email address</div>
          <div className="h-8 bg-black text-white rounded-lg text-[10px] font-bold flex items-center justify-center">Continue</div>
          <div className="text-center text-[8px] text-gray-300">OR</div>
          <div className="h-8 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-[10px]">Continue with Google</div>
          <div className="h-8 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-[10px]">Continue with Apple</div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    number: "2",
    title: "Organize & Track",
    desc: "Add your tools, subscriptions, and tasks.",
    color: "bg-[#F3F0FF]",
    content: (
      <div className="relative flex flex-col items-center justify-center scale-90">
        <div className="bg-white p-4 rounded-xl shadow-lg rotate-[-4deg] w-72 mb-2 border border-gray-50">
          <p className="text-[10px] font-bold mb-2">Indie Hacker's Essentials</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-black rounded-lg" />
            <div className="w-8 h-8 bg-gray-100 rounded-lg" />
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
          </div>
          <p className="text-[8px] mt-2 text-gray-400">Curated by Sam Ortega</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg rotate-[4deg] w-72 border border-gray-50">
          <p className="text-[10px] font-bold mb-2">Remote Team Starter Pack</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-teal-400 rounded-lg" />
            <div className="w-8 h-8 bg-yellow-400 rounded-lg" />
          </div>
          <p className="text-[8px] mt-2 text-gray-400">Curated by Kendra Holt</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    number: "3",
    title: "Earn & Enjoy",
    desc: "Check in daily, try new tools, and watch your points grow.",
    color: "bg-[#F3F0FF]",
    content: (
      <div className="relative w-full h-full min-h-[350px]">
        {/* Clustered 9 coins */}
        <Coin top="5%" right="25%" scale={0.85} delay={0} />
        <Coin top="2%" right="5%" scale={0.9} delay={0.2} />
        <Coin top="8%" right="-12%" scale={0.8} delay={0.4} />
        <Coin top="32%" right="35%" scale={1.1} zIndex={30} delay={0.1} />
        <Coin top="30%" right="12%" scale={1.1} zIndex={30} delay={0.3} />
        <Coin top="35%" right="-8%" scale={1.1} zIndex={30} delay={0.5} />
        <Coin top="65%" right="22%" scale={0.9} delay={0.2} />
        <Coin top="62%" right="0%" scale={0.9} delay={0.4} />
        <Coin top="68%" right="-15%" scale={0.85} delay={0.6} />
      </div>
    ),
  },
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 flex flex-col items-center overflow-hidden bg-white">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black uppercase">
          Simple, Rewarding, Calm
        </h2>
      </div>

      {/* SLIDER VIEWPORT */}
      <div className="w-full flex justify-center items-center gap-4 h-[600px] px-4">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                width: isActive ? "850px" : "120px",
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.9,
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className={`${slide.color} h-[550px] rounded-[3.5rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-sm border border-purple-50 cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* GIANT BACKGROUND NUMBER */}
              <span
                className={`font-[1000] tracking-tighter absolute transition-all duration-700 leading-none pointer-events-none select-none ${
                  isActive
                    ? "text-[420px] -top-16 -left-12 opacity-[0.08]"
                    : "text-[180px] top-10 left-6 opacity-20 text-black"
                }`}
              >
                {slide.number}
              </span>

              {/* CENTER ASSETS */}
              <div
                className={`flex-1 flex items-center justify-center relative z-20 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.content}
              </div>

              {/* SLIDE TEXT */}
              <div className="relative z-20">
                <h3
                  className={`font-black transition-all duration-500 text-gray-900 leading-tight ${
                    isActive
                      ? "text-5xl mb-2"
                      : "text-2xl rotate-[-90deg] origin-left translate-y-[-20px] whitespace-nowrap uppercase"
                  }`}
                >
                  {slide.title}
                </h3>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-bold text-gray-800 opacity-90"
                  >
                    {slide.desc}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CONTROL PILL */}
      <div className="mt-16 flex items-center gap-6 bg-gray-100/70 p-3 px-6 rounded-full border border-gray-200 backdrop-blur-md">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
        >
          {isPlaying ? (
            <Pause size={18} fill="black" />
          ) : (
            <Play size={18} fill="black" className="ml-0.5" />
          )}
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-700 ${
                currentIndex === i ? "w-12 bg-black" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}