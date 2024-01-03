import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  background-color: black;
  border-bottom: 4px solid rgba(255, 255, 255, 0.8); /* Adjust border color and thickness */
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin: 0 auto;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
  position: relative; /* Added position for absolute positioning */

  &:hover {
    color: #a2c523;

    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Adjust this value to align with the bottom border */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #a2c523;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #a2c523;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>How to Play</ListItem>
          </List>
        </Links>
        <Icons>
          <Link className="" to={'/game'}>
            <Button>Play Game</Button>
          </Link>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
