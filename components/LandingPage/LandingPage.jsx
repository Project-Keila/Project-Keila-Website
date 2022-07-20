import styled from "styled-components";
import Button from "../Button/Button";
import Features from "./Features";
import Trees from "./Trees";

export function LandingPage() {
  return (
    <>
      <LandingContainer>
        <Intro>
          <H1>World&apos;s First Living</H1>
          <H2>NFT</H2>
          <Button title="Plant Tree" />
        </Intro>
        <Blocks src="./blocks.png" />
        <Approach>
          <h2>Our Approach</h2>
          <p>
            Project Keila’s team is building the world’s first living NFT by
            creating digital twins for trees and allowing the NFTs to serve as
            Proof of Ownership. We aim to plant trees to offset carbon negative
            emission footprints globally using Blockchain technology.
          </p>
        </Approach>
      </LandingContainer>
      <Trees />
      <Features />
    </>
  );
}

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 100%;
  padding: 48px;
  background-image: url("./banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const H1 = styled.h1`
  color: #ffb000;
  font-size: 6vw;
`;
const H2 = styled.h1`
  color: white;
  font-size: 6vw;
`;

const Intro = styled.div``;

export const PlantButton = styled.button`
  height: 72px;
  width: 246px;
  background-color: #eeff89;
  color: #548235;
  border: 1px solid #548235;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin-top: 40px;
  height: 147px;
  width: 408px;
`;

const Blocks = styled.img`
  width: 40vw;
`;

const Approach = styled.div`
  background: white;
  position: absolute;
  bottom: -50px;
  right: 32vw;
  width: 36vw;
  @media (max-width: 768px) {
    width: 70vw;
    right: 15vw;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h2,
  p {
    text-align: center;
    padding: 0px 30px 10px 30px;
  }
`;
