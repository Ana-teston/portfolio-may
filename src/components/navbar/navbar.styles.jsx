import styled from 'styled-components';

export const NavContainer = styled.div`
  pointer-events: all;
  position: absolute;
  background-color: red;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  transition: all 1s ease-out;
`;

export const LeftCenter = styled.h4`
  text-align: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
`;

export const LeftWrapper = styled.nav`
  pointer-events: all;
  position: absolute;
  width: 24vh;
  padding: 6rem 4rem;
  display: flex;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
  height: 1.125rem;
  transform: rotate(-90deg);
`;

export const LeftText = styled.h4`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0;
  margin-top: auto;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 3rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: red;
`;

export const RightWrapper = styled.nav`
  pointer-events: all;
  position: absolute;
  width: 80vh;
  padding: 0;
  display: flex;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
  height: 1.125rem;
  transform: rotate(90deg);
`;

export const NavLink = styled.a`
  display: block;
  width: 10em;
  color: var(--black30);
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`;
