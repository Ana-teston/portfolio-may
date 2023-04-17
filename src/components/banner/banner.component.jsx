import React from "react";
import { HalfPage, Info, Name, Title, Bio, Photo } from "./banner.styles"

const Banner = () => {
  return (
    <>
    <HalfPage>
      <Photo />
      <Info>
        <Name>John Doe</Name>
        <Title>Motion Designer</Title>
        <Bio>Hi there! I'm a motion designer based in San Francisco. I specialize in creating engaging and memorable animations for a variety of clients.</Bio>
      </Info>
    </HalfPage>
    </>
  );
};

export default Banner;