import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const router = useRouter();
  return (
    <Container
      isOpen={router.pathname !== "/about" && router.pathname !== "/partners"}
    >
      <h4>Powered By Project Keila</h4>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-image: url("./footer-bg.png");
  width: calc(100vw - 18px);;
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  h4 {
    position: absolute;
    bottom: 40px;
    z-index: 10;
    text-align: center;
    width: calc(100vw - 18px);;
    /* height: 100%; */
  }
`;
