import { motion } from "motion/react";

const QUOTES = [
  {
    quote: "Working with Heizen has been a genuinely transformative experience. A highly manual, time-consuming process is now a streamlined, scalable solution.",
    name: "Chor Hung Choy",
    role: "Senior Manager, DHL",
  },
  {
    quote: "Every CSM knows the pain of digging through five tools to understand one customer. Heizen pulls signals from Salesforce, Gong, support tickets, and usage data into one clear picture.",
    name: "Palash Soni",
    role: "Co-founder, Goldcast.io",
  },
  {
    quote: "Partnering with Heizen has been instrumental for Tan90. Their platform improved the speed and efficiency of our thermal deliveries and streamlined inventory, billing, and invoicing.",
    name: "Soumalya Mukherjee",
    role: "Founder, Tan90 Thermal Solutions",
  },
  {
    quote: "Teachers spend hours creating and grading assignments. We're working with Heizen to close that gap with a platform that brings intelligence and immediacy into the homework cycle.",
    name: "Joshua Paik",
    role: "Founder, Baki AI",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 px-6 md:px-12 border-t border-white/10">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
        ⏤ Voices from the field
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {QUOTES.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/30 transition-colors"
          >
            <div className="text-5xl text-[oklch(0.87_0.18_165)] leading-none mb-4">"</div>
            <blockquote className="text-lg text-white/85 leading-relaxed">
              {q.quote}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-white/10">
              <div className="text-white font-medium">{q.name}</div>
              <div className="text-sm text-white/50">{q.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}