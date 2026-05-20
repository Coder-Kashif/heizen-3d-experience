import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function WireGlobe() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[2, 48, 48]} />
        <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.02, 16, 16]} />
        <meshBasicMaterial color="#73ffb8" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}