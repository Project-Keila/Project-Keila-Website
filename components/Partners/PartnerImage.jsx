import React from "react";
import styled from "styled-components";

const PartnerImage = ({ src, title }) => {
  return (
    <ImageContainer>
      <Image alt="" src={src} />
      <p>{title}</p>
    </ImageContainer>
  );
};

export default PartnerImage;

const ImageContainer = styled.div`
  min-width: 250px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  p {
    flex: 1;
  }
`;
const Image = styled.img`
  width: 250px;
`;
