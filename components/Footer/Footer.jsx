import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h4>Powered By Project Keila</h4>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-image: url("./footer-bg.png");
  width: 100vw;
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  h4 {
    position: absolute;
    bottom: 40px;
    z-index: 10;
    text-align: center;
    width: 100vw;
    /* height: 100%; */
  }
`;