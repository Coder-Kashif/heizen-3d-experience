import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D, Color, type InstancedMesh } from "three";

const COUNT = 220;

export function ShardField({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6 - 2,
        r: Math.random() * Math.PI,
        s: 0.3 + Math.random() * 0.9,
      })),
    []
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      const orderly = scrollProgress;
      const targetX = (i % 20) * 0.7 - 6.5;
      const targetY = Math.floor(i / 20) * 0.7 - 3.5;
      dummy.position.set(
        s.x * (1 - orderly) + targetX * orderly,
        s.y * (1 - orderly) + targetY * orderly + Math.sin(t + i) * 0.05,
        s.z * (1 - orderly)
      );
      dummy.rotation.set(s.r + t * 0.1, s.r * 2 + t * 0.15, 0);
      dummy.scale.setScalar(s.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]}>
      <boxGeometry args={[0.6, 0.02, 0.4]} />
      <meshStandardMaterial
        color={new Color("#ffffff")}
        emissive={new Color("#4f46e5")}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.3}
      />
    </instancedMesh>
  );
}