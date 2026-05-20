import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

export function HeroBlob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    ref.current.position.y = Math.sin(t * 0.5) * 0.1;
  });
  return (
    <Icosahedron ref={ref} args={[1.6, 6]} position={[1.3, 0, 0]}>
      <MeshDistortMaterial
        color="#4f46e5"
        emissive="#1a1a5a"
        roughness={0.15}
        metalness={0.9}
        distort={0.45}
        speed={1.4}
      />
    </Icosahedron>
  );
}