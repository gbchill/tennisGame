import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function GamePage() {
  return (
    <Container>
      <Navbar />
      <iframe
        title="Unity Build"
        src="/src/pages/index.html" // Update the path to your Unity build HTML file
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </Container>
  );
}

export default GamePage;
