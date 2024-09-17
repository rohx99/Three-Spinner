/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./App.css";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
  let tex = useTexture("./img.jpg");
  let cyl = useRef();
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
