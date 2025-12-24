export default function ToolMarquee() {
  return (
    <div className="overflow-hidden py-16">
      <div className="inline-flex w-max gap-10 animate-marquee">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-16 h-16 shrink-0 rounded-full bg-purple-100 flex items-center justify-center font-bold"
          >
            50
          </div>
        ))}
      </div>
    </div>
  );
}

