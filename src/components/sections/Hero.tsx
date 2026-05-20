import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6"
        >
          ⏤ AI + Humans · Supply Chain Software
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bold tracking-tighter text-white leading-[0.92] text-[18vw] md:text-[10vw]"
        >
          Software<br />
          Delivery at<br />
          <span className="italic font-light text-[oklch(0.87_0.18_165)]">Light Speed.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-white/70"
        >
          AI + Humans ship supply chain software 10x faster. Deterministic agents on top of your existing data lake and SaaS stack.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex gap-4 items-center"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[oklch(0.87_0.18_165)] transition-colors"
          >
            Book a Strategy Call
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll ↓</span>
        </motion.div>
      </div>
    </section>
  );
}