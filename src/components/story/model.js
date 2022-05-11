import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./crystal-etheria.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.91, 1.88, 2.88]} rotation={[1.89, 0.88, -2.05]}>
        <pointLight
          intensity={4000}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[2.02, -1.8, -3.31]} rotation={[1.89, 0.88, -2.05]}>
        <pointLight
          intensity={2000.8}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Crystal}
        scale={[1.19, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[1.01, 2.25, 3.6]}
        rotation={[0.02, 0, -0.82]}
      />
    </group>
  );
}

useGLTF.preload("./crystal-etheria.gltf");