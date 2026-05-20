const PARTNERS = ["ITC", "HUL", "DHL", "COMPASS GROUP"];

export function TrustedBy() {
  return (
    <section className="relative py-32 px-6 md:px-12 border-t border-white/10">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-12">
        ⏤ Trusted by Leading Enterprises
      </p>
      <div className="flex flex-wrap items-center gap-x-16 gap-y-8">
        {PARTNERS.map((p) => (
          <span
            key={p}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white/40 hover:text-white transition-colors"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="mt-20 flex items-center gap-6">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">Backed by</span>
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white/60">
          Titan Capital
        </span>
      </div>
    </section>
  );
}