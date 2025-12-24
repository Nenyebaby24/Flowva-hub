import React from 'react';

const tools = [
  { name: "Canva", src: "/icons/canva.svg" },
  { name: "VS Code", src: "/icons/vscode.svg" },
  { name: "Google", src: "/icons/google.svg" },
  { name: "ChatGPT", src: "/icons/chatgpt.svg" },
  { name: "Flow", src: "/icons/flow.svg" },
  { name: "Asana", src: "/icons/asana.svg" },
  { name: "Framer", src: "/icons/framer.svg" },
  { name: "Zoom", src: "/icons/zoom.svg" },
];

export default function ToolIcons() {
  const rowContent = [...tools, ...tools]; // Double the content for seamless loop

  return (
    <div className="mt-14 space-y-10 w-full overflow-hidden py-10 bg-white">
      {/* 1. Global Styles for Animation (Ensures it works even if Tailwind config fails) */}
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-manual-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .animate-manual-right {
          animation: marqueeRight 25s linear infinite;
        }
      `}</style>

      {/* ROW 1: Moves LEFT */}
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap gap-6 animate-manual-left">
          {rowContent.map((tool, i) => (
            <IconBubble key={`row1-${i}`} tool={tool} />
          ))}
          {/* Duplicate set for infinite loop */}
          {rowContent.map((tool, i) => (
            <IconBubble key={`row1-clone-${i}`} tool={tool} />
          ))}
        </div>
      </div>

      {/* ROW 2: Moves RIGHT */}
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap gap-6 animate-manual-right">
          {rowContent.map((tool, i) => (
            <IconBubble key={`row2-${i}`} tool={tool} />
          ))}
          {/* Duplicate set for infinite loop */}
          {rowContent.map((tool, i) => (
            <IconBubble key={`row2-clone-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

function IconBubble({ tool }) {
  return (
    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center transition-transform hover:scale-110">
      <img
        src={tool.src}
        alt={tool.name}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    </div>
  );
}