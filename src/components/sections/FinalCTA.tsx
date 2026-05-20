import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section id="cta" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-[20vw] md:text-[14vw] font-bold tracking-tighter text-white leading-[0.9]"
      >
        Ship 10x<br />
        <span className="italic font-light text-[oklch(0.87_0.18_165)]">faster.</span>
      </motion.h2>
      <div className="mt-12 flex flex-wrap items-center gap-6">
        <a
          href="https://www.heizen.work/contact-us"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-[oklch(0.87_0.18_165)] transition-colors"
        >
          Book a Strategy Call →
        </a>
        <span className="text-white/40 text-sm">As Seen on Shark Tank 🦈</span>
      </div>
      <footer className="mt-32 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-white/40">
        <div>© Heizen · Software Delivery at Light Speed</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Case Studies</a>
          <a href="#" className="hover:text-white">Blogs</a>
          <a href="#" className="hover:text-white">Careers</a>
        </div>
      </footer>
    </section>
  );
}