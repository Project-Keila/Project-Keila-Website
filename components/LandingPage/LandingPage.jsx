import styled from "styled-components";
import Button from "../Button/Button";
import Features from "./Features";
import Trees from "./Trees";

export function LandingPage() {
  return (
    <>
      <LandingContainer>
        <Intro>
          <H1>World&apos;s First Living NFT</H1>
          <LandingTree src="./landing-tree.png" />
          <br />
          <Button title="Plant Tree" />

          <Approach>
            <h2>Our Approach</h2>
            <p>
              Project Keila’s team is building the world’s first living NFT by
              creating digital twins for trees and allowing the NFTs to serve as
              Proof of Ownership. We aim to plant trees to offset carbon
              negative emission footprints globally using Blockchain technology.
            </p>
          </Approach>
        </Intro>
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
  @media (max-width: 968px) {
    height: 70vh;
  }
  width: 100%;
  padding: 48px;
  background-image: url("./banner.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: relative;
`;
const H1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 5vw;
`;

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

const LandingTree = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const Approach = styled.div`
  background: white;
  position: absolute;
  bottom: -32vh;
  width: 36vw;
  font-size: 14px;
  @media (max-width: 968px) {
    width: 60vw;
    font-size: 12px;
  }
  @media (max-width: 468px) {
    width: 80vw;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h2,
  p {
    text-align: center;
    padding: 0px 30px 10px 30px;
  }
`;
