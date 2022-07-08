import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import Option from "./Option";

const Features = () => {
  return (
    <Container>
      <Impact>
        <H1>Social Impact is a click away</H1>
        <H2>Mint. Plant. Grow. 🌱</H2>
        <p>
          Project Keila’s infratstructure is pioneering a new path for
          innovation. Become a leader by offsetting your carbon footprint and
          help shape the future one step at a time.
        </p>
      </Impact>
      <FeatureCards>
        <FeatureCard
          src={"./features/serialization.png"}
          title="Serialization"
          description="Tracking vitals by IoT sensors allows annual measurements of which trees
          are still contributing to carbon sequestration."
        />
        <FeatureCard
          src={"./features/green-nfts.png"}
          title="Green NFTs"
          description="As need for carbon offset goes up and down, businesses and people can buy and sell their offsets on secondary markets, in a verifiable manner."
        />
        <FeatureCard
          src={"./features/co2.png"}
          title="Carbon on the Blockchain"
          description="Incorporate carbon into the Blockchain and incentivize IRL positive impact."
        />
        <FeatureCard
          src={"./features/ownership.png"}
          title="Ownership"
          description="By creating digital twins for trees and allowing these NFTs to serve as Proof of Ownership."
        />
      </FeatureCards>
      <h3>Read. Interact. Collaborate</h3>
      <Options>
        <Option src="./features/methodology.png" linkTitle="Methodology" />
        <Option src="./features/calculator.png" linkTitle="Calculator" />
        <Option src="./features/partner.png" linkTitle="Partner With Us" />
      </Options>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  h3 {
    color: #15681d;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    padding-top: 15px;
  }
`;

const Impact = styled.div`
  /* background: red; */
  width: 100vw;
  padding: 50px 7vw;
  p {
    width: 30vw;
  }
`;

const H1 = styled.h1``;
const H2 = styled.h1`
  color: #15681d;
  margin-top: -20px;
`;

const FeatureCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* padding: 20px; */
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
