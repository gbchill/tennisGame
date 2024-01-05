import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Example2 from "./Example2";

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px; /* Increase the height of the logo */
  margin-right: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 45px;
  list-style: none;
  padding-left: 110px;
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
  position: relative;
  font-size: 18px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
        <StyledLink className="" to={'/'}>
          <Logo src="./img/logo.png" />
        </StyledLink>
        <List>
          <StyledLink className="" to={'/'}>
            <ListItem>Home</ListItem>
          </StyledLink>
          <StyledLink className="" to={'/about'}>
            <ListItem>About</ListItem>
          </StyledLink>
          <StyledLink className="" to={'/rules'}>
            <ListItem>How to Play</ListItem>
          </StyledLink>
        </List>
      </Links>
      <Icons>
        <Link className="" to={'/game'}>
          <Example2 />
        </Link>
      </Icons>
    </Container>
  );
};

export default Navbar;
