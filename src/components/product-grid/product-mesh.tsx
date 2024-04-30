"use client"
import { OrbitControls, OrthographicCamera, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { } from 'three/examples/jsm/Addons.js';
//export const dynamic = 'force-dynamic';
//export const revalidate = 0;

function CanvasComponent({ meshUrl }: { meshUrl: string }) {
  const mesh = useRef<Mesh>(null!);
  const { scene } = useGLTF(meshUrl);//meshUrl

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return <group scale={new Vector3(1, 1, 1)} dispose={null}>

    <mesh ref={mesh} position={[0, -2, 0]} scale={1}>
      <primitive object={scene} />
    </mesh>
  </group>
}

export function ProductMesh({ meshUrl }: { meshUrl: string }) {

  return <Canvas>

    <OrbitControls enableZoom={false} />
    <color attach="background" args={['#f5efe6']} />
    <ambientLight intensity={4} />
    <directionalLight position={[-2, 10, 2]} intensity={1} />
    <CanvasComponent meshUrl={meshUrl} />
    <PerspectiveCamera position={new Vector3(6, 2, 0)} makeDefault></PerspectiveCamera>
  </Canvas>;
}
