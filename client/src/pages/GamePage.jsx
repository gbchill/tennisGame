import React, { useEffect, useState } from 'react';
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

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const GameArea = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  border: 2px solid white;
`;

const PongGame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ResetButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #a2c523;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GamePage = () => {
  const [userPaddleY, setUserPaddleY] = useState(0);
  const [ballX, setBallX] = useState(50);
  const [ballY, setBallY] = useState(50);
  const [ballSpeedX, setBallSpeedX] = useState(1);
  const [ballSpeedY, setBallSpeedY] = useState(1);
  const [cpuPaddleY, setCpuPaddleY] = useState(0);

  const handleKeyPress = (event) => {
    // Controls for the user paddle (W and S keys)
    if (event.key === 'w' && userPaddleY > 0) {
      setUserPaddleY((prevY) => prevY - 1);
    } else if (event.key === 's' && userPaddleY < 60) {
      setUserPaddleY((prevY) => prevY + 1);
    }
  };

  const resetBall = () => {
    setBallX(50);
    setBallY(50);
    setBallSpeedX(1);
    setBallSpeedY(1);
    setUserPaddleY(40); // Reset user paddle position
    setCpuPaddleY(40); // Set CPU paddle to the middle (adjust as needed)
  };

  useEffect(() => {
    const updateGame = setInterval(() => {
      // Ball movement logic
      setBallX((prevX) => prevX + ballSpeedX);
      setBallY((prevY) => prevY + ballSpeedY);

      // Collision with top/bottom walls
      if (ballY >= 98 || ballY <= 2) {
        setBallSpeedY((prevSpeedY) => -prevSpeedY);
      }

      // Collision with left and right walls
      if (ballX >= 98 || ballX <= 2) {
        resetBall();
      }

      // Collision with user paddle
      if (ballX <= 3 && ballY >= userPaddleY && ballY <= userPaddleY + 20) {
        setBallSpeedX((prevSpeedX) => -prevSpeedX);
      }

      // Collision with CPU paddle
      if (ballX >= 97 && ballY >= cpuPaddleY && ballY <= cpuPaddleY + 20) {
        setBallSpeedX((prevSpeedX) => -prevSpeedX);
      }

      // CPU paddle AI
      const newCpuPaddleY = ballY - 10;
      setCpuPaddleY((prevY) => {
        const nextY = newCpuPaddleY > prevY ? prevY + 1 : prevY - 1;
        return nextY >= 0 && nextY <= 80 ? nextY : prevY;
      });
    }, 50);

    return () => clearInterval(updateGame);
  }, [userPaddleY, ballSpeedX, ballSpeedY, ballX, ballY, cpuPaddleY]);

  return (
    <Container tabIndex="0" onKeyDown={handleKeyPress}>
      <Navbar />
      <GameContainer>
        <GameArea>
          <ResetButton onClick={resetBall}>Reset Ball</ResetButton>
          <PongGame>
            <div
              style={{
                position: 'absolute',
                top: `${userPaddleY}%`,
                left: '3%',
                width: '1%',
                height: '20%',
                backgroundColor: 'white',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                top: `${cpuPaddleY}%`,
                right: '3%',
                width: '1%',
                height: '20%',
                backgroundColor: '#ff0000', // Red color for CPU paddle
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                top: `${ballY}%`,
                left: `${ballX}%`,
                width: '2%',
                height: '2%',
                backgroundColor: 'white',
                borderRadius: '50%',
              }}
            ></div>
          </PongGame>
        </GameArea>
      </GameContainer>
    </Container>
  );
};

export default GamePage;
