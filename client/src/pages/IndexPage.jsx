import styled from "styled-components";
import Hero from "../components/Hero";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function IndexPage() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

export default IndexPage;
