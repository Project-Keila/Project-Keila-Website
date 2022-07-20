import React from "react";
import styled from "styled-components";

const Tree = ({ src, title }) => {
  const [isGif, setIsGif] = React.useState(false);
  return (
    <ImageContainer>
      <TreeImage
        onMouseEnter={() => setIsGif(true)}
        onMouseLeave={() => setIsGif(false)}
        src={`./trees/${src}.${isGif ? "gif" : "png"}`}
      />
      <p>{title}</p>
    </ImageContainer>
  );
};

const Trees = () => {
  return (
    <Container>
      <ShadowImg src="./shadow.png" />
      <Headings>
        <h3>Mint a Tree</h3>
        <h3>Plant a Tree</h3>
      </Headings>
      <TreeImages>
        <Tree src="apple-tree" title="Apple Tree" />
        <Tree src="conifer-tree" title="Conifer Tree" />
        <Tree src="poplar-tree" title="Poplar Tree" />
      </TreeImages>
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

const TreeImages = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
  }
  margin-bottom: 20px;
  cursor: pointer;
  p {
    text-align: center;
  }
  :hover {
    border: 1px solid blue;
  }
`;

const TreeImage = styled.img`
  width: 30vw;
  min-width: 300px;
  flex: 1;
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
