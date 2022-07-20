import React from "react";
import styled from "styled-components";

const Banner = ({ src }) => {
  return <Img src={src} />;
};

export default Banner;

const Img = styled.img`
  width: 100vw;
`;
