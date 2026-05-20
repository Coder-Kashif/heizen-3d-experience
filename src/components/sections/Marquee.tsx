export function Marquee() {
  const text = "As Seen on Shark Tank 🦈  ·  Flat 10% Off on Sprint Cost  ·  Valid for 1st Week of Premiere  ·  Book a Call Now  · ";
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-[oklch(0.87_0.18_165)] text-black overflow-hidden h-7 flex items-center">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="px-4 text-xs font-medium tracking-wide">{text}</span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}