import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Social from "./Social.jsx";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 400px;
  right: 80px;
`;

const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Social />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default SocialMedia;
