import React from "react";

const Download = () => {
  return (
    // Changed min-h-screen to 80vh for better proportions with narrower panels
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-white px-6 py-12">
      {/* Reduced max-w-7xl to max-w-5xl to shrink both panels equally */}
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT PANEL */}
        <div className="bg-[#fdeceb] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          <div>
            {/* Download pill */}
            <span className="inline-block bg-white text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wider">
              Download
            </span>

            {/* Heading - Reduced text size slightly to fit smaller panel */}
            <h2 className="text-3xl font-extrabold leading-tight mb-8">
              ORGANIZE, DISCOVER, <br />
              AND EARN ON THE GO.
            </h2>

            {/* Store buttons + QR */}
            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 w-fit shadow-sm">
              <div className="flex flex-col gap-3">
                {/* Apple */}
                <button className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full px-5 py-2">
                  <span className="text-lg"></span>
                  <span className="text-xs font-semibold">App Store</span>
                </button>

                {/* Google */}
                <button className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full px-5 py-2">
                  <span className="text-lg">▶</span>
                  <span className="text-xs font-semibold">Play Store</span>
                </button>
              </div>

              {/* QR Placeholder */}
              <div className="w-24 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-black/5 grid grid-cols-4 grid-rows-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-black/20" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coming soon */}
          <div className="mt-8">
            <div className="bg-white rounded-full px-5 py-3 flex items-center gap-3 w-fit shadow-sm">
              <span className="text-sm">⏳</span>
              <span className="text-xs font-bold uppercase tracking-tight">Coming soon</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-[#0b0b0b] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          {/* Benefits pill */}
          <span className="inline-block bg-white/10 text-xs px-4 py-1 rounded-full mb-8 uppercase tracking-wider">
            Benefits
          </span>

          {/* Benefits list */}
          <ul className="space-y-4 mb-10 relative z-10">
            <li className="flex items-center gap-3 text-sm font-bold tracking-wide">
              <span className="w-2 h-2 bg-white rounded-full" />
              QUICK DAILY CHECK-INS
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-white/40 tracking-wide">
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              DISCOVER TOOLS ANYWHERE
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-white/40 tracking-wide">
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              NEVER MISS A REWARD
            </li>
          </ul>

          {/* Phone mockups - Adjusted sizes to fit smaller container */}
          <div className="flex items-end gap-4 mt-auto">
            {/* Main phone */}
            <div className="w-48 h-64 bg-white rounded-t-2xl p-4 text-black shadow-2xl transition-transform hover:-translate-y-2">
              <div className="text-[10px] font-bold mb-2 text-gray-400 uppercase">
                How’s your moment?
              </div>
              <div className="flex gap-1 mb-3">
                {[1,2,3,4].map(i => (
                   <div key={i} className="w-5 h-5 rounded-full bg-gray-100" />
                ))}
              </div>

              <div className="flex justify-between mb-3 text-[10px] font-bold">
                <span>Quiet</span>
                <span>🔥</span>
              </div>

              <div className="bg-black text-white rounded-full py-2 text-center text-[10px] font-bold mb-3">
                Ready to explore
              </div>

              <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase">
                <span>Skip</span>
                <span>Check-in</span>
              </div>
            </div>

            {/* Secondary phone */}
            <div className="w-28 h-48 bg-[#1a1a1a] rounded-t-2xl flex items-center justify-center border-t border-x border-white/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-xl">
                🧭
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;