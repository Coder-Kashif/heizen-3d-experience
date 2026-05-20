import { motion } from "motion/react";

export function Problem() {
  return (
    <section id="problem" className="relative flex items-center px-6 md:px-12 py-28 border-t border-white/10">
      <div className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-8">⏤ The Problem</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
        >
          Too many supply chain tools.{" "}
          <span className="text-white/30">Not enough ROI.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg text-white/60"
        >
          Data is fragmented, answers aren't trusted, and decisions are still the bottleneck in supply chain operations.
        </motion.p>
      </div>
    </section>
  );
}