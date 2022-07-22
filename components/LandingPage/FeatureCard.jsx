import React from "react";
import styled from "styled-components";

const FeatureCard = ({ src, title, description }) => {
  return (
    <Container>
      <ImageContainer>
        <Image alt="" src={src} />
        <p>{title}</p>
      </ImageContainer>
      <p>{description}</p>
    </Container>
  );
};

export default FeatureCard;

const Container = styled.div`
  width: 35vw;
  p {
    font-weight: 300;
    color: #444444;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    height: 140px;
    object-fit: contain;
  }
  p {
    /* font-family: "Inter"; */
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    margin-top: -20px;
  }
`;
const Image = styled.img`
  width: 100px;
`;
