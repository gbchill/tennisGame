import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

function AboutPage() {
  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>AceMind Tennis</Title>
        <Subtitle>Where AI meets the Tennis Court</Subtitle>
        <AboutText>
          Embark on a thrilling journey into the convergence of artificial
          intelligence and the sport of tennis with AceMind Tennis. Our Unity
          game is more than just an interactive experience; it's a showcase of
          cutting-edge technology and dynamic gameplay.

          At the heart of AceMind Tennis lies a sophisticated AI system driven
          by reinforcement learning. The AI evolves and adapts based on its
          interactions on the digital tennis court, offering players an
          ever-challenging opponent that learns and improves with every match.

          Customize your gaming experience by adjusting the difficulty level to
          match your skills. Additionally, choose how many days the AI has been
          trained, providing you with a personalized and dynamic gaming
          challenge.


          Immerse yourself in the world of AceMind Tennis, where the thrill of
          tennis meets the excitement of artificial intelligence. Are you ready
          to take on the challenge and test your skills against our evolving AI
          opponent?
        </AboutText>
      </ContentWrapper>
    </Container>
  );
}

export default AboutPage;
