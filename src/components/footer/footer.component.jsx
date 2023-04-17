import React from "react";
import {FooterWrapper, FooterRight, FooterLeft} from "./footer.styles"

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <FooterRight>
        <h2>hello footer</h2>
      </FooterRight>
      <FooterLeft>
        <h2>hello footer</h2>
        <p>Footer navigation</p>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </FooterLeft>
    </FooterWrapper>
    </>
  );
  }
  
  export default Footer;