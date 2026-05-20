import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";
import { HeroBlob } from "./HeroBlob";
import { ShardField } from "./ShardField";
import { ParticleNetwork } from "./ParticleNetwork";
import { WireGlobe } from "./WireGlobe";

type SceneKey = "hero" | "shards" | "particles" | "globe";

export function Scene({ scrollY = 0 }: { scrollY?: number }) {
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const section = vh ? scrollY / vh : 0;
  let active: SceneKey = "hero";
  let local = 0;
  if (section < 1.2) {
    active = "hero";
    local = section / 1.2;
  } else if (section < 2.6) {
    active = "shards";
    local = (section - 1.2) / 1.4;
  } else if (section < 4.2) {
    active = "particles";
    local = (section - 2.6) / 1.6;
  } else {
    active = "globe";
    local = Math.min(1, (section - 4.2) / 1.5);
  }

  const opacity = Math.max(0, 1 - Math.abs(local - 0.5) * 0.4);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#070708"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -2]} intensity={1.5} color="#4f46e5" />
        <pointLight position={[3, -2, 4]} intensity={1} color="#73ffb8" />
        <Suspense fallback={null}>
          {active === "hero" && <HeroBlob />}
          {active === "shards" && <ShardField scrollProgress={local} />}
          {active === "particles" && <ParticleNetwork />}
          {active === "globe" && <WireGlobe />}
        </Suspense>
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.7} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
          <ChromaticAberration
            offset={new Vector2(0.0008, 0.0012)}
            blendFunction={BlendFunction.NORMAL}
            radialModulation={false}
            modulationOffset={0}
          />
          <Noise opacity={0.06} premultiply />
          <Vignette eskil={false} offset={0.2} darkness={0.85} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}