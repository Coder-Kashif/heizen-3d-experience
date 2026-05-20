import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import Lenis from "lenis";
import { Nav } from "@/components/sections/Nav";
import { Marquee } from "@/components/sections/Marquee";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Problem } from "@/components/sections/Problem";
import { Pillars } from "@/components/sections/Pillars";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Scene = lazy(() => import("@/components/three/Scene").then((m) => ({ default: m.Scene })));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Heizen — Software Delivery at Light Speed" },
      { name: "description", content: "AI + Humans ship supply chain software 10x faster. Deterministic agents on top of your data lake and SaaS stack." },
      { property: "og:title", content: "Heizen — Software Delivery at Light Speed" },
      { property: "og:description", content: "AI + Humans ship supply chain software 10x faster." },
    ],
  }),
});

function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ({ scroll }: { scroll: number }) => setScrollY(scroll));
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative bg-[#070708] text-white overflow-x-hidden">
      <Suspense fallback={null}>
        <Scene scrollY={scrollY} />
      </Suspense>
      <Marquee />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Problem />
        <Pillars />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
}
