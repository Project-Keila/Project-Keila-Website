import React from "react";
import styled from "styled-components";

const LeafImage = ({ text }) => {
  return (
    <LeafContainer>
      <Leaf src="./leaf.png"></Leaf>
      <LeafText>{text}</LeafText>
      <Dots>
        <svg
          width="26"
          height="7"
          viewBox="0 0 26 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.46449 6.29545C2.71449 6.29545 2.07055 6.0303 1.53267 5.5C1.00237 4.96212 0.737216 4.31818 0.737216 3.56818C0.737216 2.82576 1.00237 2.18939 1.53267 1.65909C2.07055 1.12879 2.71449 0.863636 3.46449 0.863636C4.19176 0.863636 4.82813 1.12879 5.37358 1.65909C5.91903 2.18939 6.19176 2.82576 6.19176 3.56818C6.19176 4.06818 6.06297 4.52652 5.8054 4.94318C5.5554 5.35227 5.22585 5.68182 4.81676 5.93182C4.40767 6.17424 3.95691 6.29545 3.46449 6.29545ZM12.9957 6.29545C12.2457 6.29545 11.6018 6.0303 11.0639 5.5C10.5336 4.96212 10.2685 4.31818 10.2685 3.56818C10.2685 2.82576 10.5336 2.18939 11.0639 1.65909C11.6018 1.12879 12.2457 0.863636 12.9957 0.863636C13.723 0.863636 14.3594 1.12879 14.9048 1.65909C15.4503 2.18939 15.723 2.82576 15.723 3.56818C15.723 4.06818 15.5942 4.52652 15.3366 4.94318C15.0866 5.35227 14.7571 5.68182 14.348 5.93182C13.9389 6.17424 13.4882 6.29545 12.9957 6.29545ZM22.527 6.29545C21.777 6.29545 21.133 6.0303 20.5952 5.5C20.0649 4.96212 19.7997 4.31818 19.7997 3.56818C19.7997 2.82576 20.0649 2.18939 20.5952 1.65909C21.133 1.12879 21.777 0.863636 22.527 0.863636C23.2543 0.863636 23.8906 1.12879 24.4361 1.65909C24.9815 2.18939 25.2543 2.82576 25.2543 3.56818C25.2543 4.06818 25.1255 4.52652 24.8679 4.94318C24.6179 5.35227 24.2884 5.68182 23.8793 5.93182C23.4702 6.17424 23.0194 6.29545 22.527 6.29545Z"
            fill="white"
          />
        </svg>
      </Dots>
    </LeafContainer>
  );
};

const Roadmap = () => {
  return (
    <BackgroundContainer>
      <Heading>ROADMAP</Heading>
      <Map>
        <Leaves>
          <LeafImage text="Q1" />
          <LeafImage text="Q2" />
          <LeafImage text="Q3" />
          <LeafImage text="Q4" />
        </Leaves>
      </Map>
    </BackgroundContainer>
  );
};

export default Roadmap;

const BackgroundContainer = styled.div`
  background-image: url("./roadmap-bg.png");
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
`;

const Map = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Leaves = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
`;

const LeafContainer = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
`;

const Leaf = styled.img`
  width: 240px;
`;

const LeafText = styled.h2`
  position: absolute;
  top: 25%;
  left: 40%;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -15px;
`;
