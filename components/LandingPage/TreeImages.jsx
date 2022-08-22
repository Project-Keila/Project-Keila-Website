import React from "react";
import styled from "styled-components";

export const Tree = ({ src, title, onClick }) => {
  const [isGif, setIsGif] = React.useState(false);
  return (
    <ImageContainer onClick={onClick}>
      <TreeImage
        onMouseEnter={() => setIsGif(true)}
        onMouseLeave={() => setIsGif(false)}
        src={`/trees/${src}.${isGif ? "gif" : "png"}`}
      />
      <p>{title}</p>
    </ImageContainer>
  );
};

const TreeImages = () => {
  return (
    <Container>
      <Tree src="apple-tree" title="Apple Tree" />
      <Tree src="conifer-tree" title="Conifer Tree" />
      <Tree src="poplar-tree" title="Poplar Tree" />
    </Container>
  );
};

export default TreeImages;

const Container = styled.div`
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

  height: auto;

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
