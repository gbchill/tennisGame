import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Example from "./Example";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif; /* Change 'Roboto' to the desired font-family name */

  @media only screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif; /* Change 'Roboto' to the desired font-family name */

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;



const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: black; /* Change the background color to black */
  color: white; /* Set text color to white */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
      <Left>
          <Title>AceMind Tennis</Title>
          <Desc>
          Welcome to 'AceMind Tennis': See AI learning tennis live! Filter through 10 to 1,000 tests and watch the AI improve against human or ball machine opponents. Witness the evolution of AI tennis skills in real-time! Join us in shaping AI tennis mastery at AceMind Tennis!
          </Desc>
          <Link className="" to={'/game'}>
            <Button>Try Now</Button>
          </Link>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#005000"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/ball.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

