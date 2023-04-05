/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chair.gltf --transform
Author: vasycrukov (https://sketchfab.com/vasycrukov)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-rattan-venus-chair-11999c28b43444ed855f1c884883c4a7
Title: The Rattan Venus Chair
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/chair-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.19}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.38, 0.01]}>
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.M_pillow_fabric_01}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.M_pillow_fabric_02}
            />
          </group>
          <group position={[0, 0.3, 0]}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Venus_chair_rattan}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.Venus_chair_rattan}
            />
          </group>
          <group position={[0, 0.44, -0.06]}>
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Venus_chair_rattan}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials.Venus_chair_rattan}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Venus_chair_rattan}
            />
          </group>
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Venus_chair_feet_metal}
            position={[0, 0.3, 0]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Venus_chair_rattan}
            position={[0, 0.3, 0]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Venus_chair_rattan}
            position={[0, 0.44, -0.06]}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.Venus_chair_rattan}
            position={[0, 0.81, -0.45]}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials.Venus_chair_seat_mat}
            position={[0, 0.46, 0.09]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chair-transformed.glb");
