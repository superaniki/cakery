"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent() {
  const model = useGLTF("/lagg2.gltf");

  return (
    <mesh>
      <OrbitControls enableZoom={true} />
      <color attach="background" args={['#f5efe6']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 10, 2]} intensity={1} />
      <primitive object={model.scene} />
    </mesh>
  );
}

export default function Shiba() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl'>
        <MeshComponent />
      </Canvas>
    </div>
  );
}