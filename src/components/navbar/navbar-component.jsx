import React from "react";
import { NavContainer,
  LeftCenter,
  LeftContainer,
  LeftText,
  LeftWrapper,
  NavLink,
  RightContainer,
  RightWrapper
    } from "./navbar.styles";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <nav>
          <LeftCenter>
            <a href="https://github.com/Ana-teston">Home</a>
          </LeftCenter>
        </nav>
      </NavContainer>  
      <LeftContainer>
        <LeftWrapper>
          <LeftText>
            <NavLink href="#">Index</NavLink>
          </LeftText>
        </LeftWrapper>
      </LeftContainer> 
      <RightContainer>
        <RightWrapper>
          <LeftText>
            <NavLink href="#">Contact</NavLink>
          </LeftText>
        </RightWrapper>
      </RightContainer>  
    </>
  );
};

export default NavBar;