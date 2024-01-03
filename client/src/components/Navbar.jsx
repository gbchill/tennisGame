import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Example2 from "./Example2";

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
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 20px; /* Adjust this margin to add space between the logo and list items */
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 110px;
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
  position: relative;
  font-size: 18px; /* Increase the font size as desired */

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px; /* Adjust this value to set the distance of the underline from text */
    left: 0;
    width: 100%;
    height: 2px; /* Set the height of the underline */
    background-color: white; /* White underline color */
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
          <Example2/>
        </Link>
      </Icons>
    </Container>
  );
};

export default Navbar;
