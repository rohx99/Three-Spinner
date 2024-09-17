/* eslint-disable no-unused-vars */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur={true} // Enables or disables mipmap blur.
          intensity={5.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
