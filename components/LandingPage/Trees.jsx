import React from "react";
import styled from "styled-components";
import TreeImages from "./TreeImages";

const Trees = () => {
  return (
    <Container>
      <ShadowImg src="./shadow.png" />
      <Headings>
        <h3>Mint a Tree</h3>
        <h3>Plant a Tree</h3>
      </Headings>
      <TreeImages />
      <TreeBg>
        <h1>Mint.Plant.Grow</h1>
      </TreeBg>
    </Container>
  );
};

export default Trees;

const Container = styled.div`
  /* padding-top: 20vh; */
`;
const Headings = styled.div`
  padding-top: 20vh;
  h3 {
    text-align: center;
    color: #1d5611;
    font-family: Assistant;
    font-weight: 500;
    cursor: pointer;
  }
`;

const ShadowImg = styled.img`
  width: 100vw;
  position: absolute;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
`;

const TreeBg = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url("./trees/trees-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
  margin-bottom: 50px;

  h1 {
    color: #ffb000;
    font-family: "Galdeano";
    font-style: normal;
    font-weight: 400;
    font-size: 8vw;
  }
`;
