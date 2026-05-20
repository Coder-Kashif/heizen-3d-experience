import { motion } from "motion/react";

const PILLARS = [
  {
    n: "01",
    title: "No More Bottlenecks",
    desc: "Teams ask live system questions in natural language, with safe access controls and reliable answers.",
    tags: ["Sales", "Finance", "Operations", "Leadership"],
  },
  {
    n: "02",
    title: "One Trusted View",
    desc: "We connect ERP, 3PL, and BI data into a single governed source of truth for inventory, demand, and POs.",
    tags: ["ERP", "3PL", "BI", "Data Lake"],
  },
  {
    n: "03",
    title: "ROI From Tools",
    desc: "We layer agents on top of your data lake and SaaS stack to drive real decisions and workflows.",
    tags: ["Agents", "Workflows", "Measurable Outcomes"],
  },
  {
    n: "04",
    title: "Safe AI Outputs",
    desc: "LLMs are constrained with code, evals, and human checks so results stay predictable, auditable, and inventory-safe.",
    tags: ["Deterministic", "Trusted", "Governed", "Verifiable"],
  },
  {
    n: "05",
    title: "Fast Scenarios",
    desc: "'What if' changes run quickly and correctly with deterministic models, not fragile spreadsheets.",
    tags: ["Inventory · $10,000K", "Service · 98.4%", "Cost · $28,000K"],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative py-20 px-6 md:px-12 border-t border-white/10">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
        ⏤ The Heizen Operating System
      </p>
      <div className="divide-y divide-white/10">
        {PILLARS.map((p) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-12 gap-6 items-start py-10 first:pt-0"
          >
            <div className="md:col-span-2 text-sm text-white/40 font-mono">{p.n}</div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.02]">
                {p.title}
              </h3>
            </div>
            <div className="md:col-span-4 space-y-4">
              <p className="text-white/70 text-base leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 border border-white/20 rounded-full text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}