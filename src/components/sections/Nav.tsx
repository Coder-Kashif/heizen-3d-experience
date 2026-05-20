export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-6 md:px-12 py-5 flex items-center justify-between mix-blend-difference">
      <a href="/" className="text-white font-bold tracking-tight text-xl">
        HEIZEN<span className="text-[oklch(0.87_0.18_165)]">.</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
        <a href="#problem" className="hover:text-white">Platform</a>
        <a href="#pillars" className="hover:text-white">How it works</a>
        <a href="#testimonials" className="hover:text-white">Customers</a>
        <a href="#cta" className="hover:text-white">Contact</a>
      </nav>
      <a
        href="#cta"
        className="text-xs uppercase tracking-widest px-4 py-2 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
      >
        Book a Call
      </a>
    </header>
  );
}