'use client';

export default function OutlineMarquee({ items, speed = 30, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="group/marquee overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex items-center group-hover/marquee:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="inline-flex flex-shrink-0 items-center">
            <span
              className="mx-4 cursor-default font-display text-[8vw] font-bold uppercase tracking-tight transition-all duration-300 md:text-[6vw]"
              style={{
                WebkitTextStroke: '1.5px #000',
                WebkitTextFillColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.webkitTextFillColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.webkitTextFillColor = 'transparent';
              }}
            >
              {item}
            </span>
            <span className="mx-4 h-2 w-12 flex-shrink-0 rounded-full bg-[#e8927c] md:w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
