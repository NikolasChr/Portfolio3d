import React from "react";
import Shoes from "./Shoes.jsx";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoes />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>gfdgdsgfgfgfdsdsdsdsdsds</Desc>
    </>
  );
};

export default ProductDesign;
