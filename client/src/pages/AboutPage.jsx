import styled from "styled-components";

import Navbar from "../components/Navbar";


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
      <Navbar/>
    </Container>
  );
}

export default IndexPage;
