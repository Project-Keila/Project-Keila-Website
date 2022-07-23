import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../Button/Button";

export default function About() {
  const router = useRouter();
  return (
    <Background>
      <Container>
        <h1>About Project Keila</h1>
        <h2>
          An information-driven social impact platform that provides new
          eco-dynamic omni-chain products to combat climate change
        </h2>
        <Flex>
          <p>
            Project Keila is reimagining of carbon offsetting. No more will
            companies and people buy buckets of carbon offsets, but rather they
            will own the carbon offset of specific trees. This makes this the
            first time in history that being green for the entity offsetting,
            can be more than a loss annually.
          </p>
          <Image alt="" src="./about/env-impact.png" />
        </Flex>

        <h4>Project Keila is the future of green.</h4>
        <p>
          We are building a verifiable future for our children. Historically, to
          be green, you needed government intervention, because green was
          expensive, and had no upside.
        </p>
        <p>
          What if it didn&apos;t have to be that way? What if you OWNED your
          green? What if we could show how much our carbon footprint was, in a
          verifiable way?
        </p>
        <p>
          The assumption that trees are fungible, is inaccurate at best. A
          single tree that is owned, is better than 100 trees rented for their
          carbon offset. More specifically, it is owned and verifiable.
        </p>

        <FlexCenter>
          <Button
            onClick={() => router.push("/calculator")}
            title="Use Calculator"
          />
        </FlexCenter>

        <TextCenter>Powered by Project Keila</TextCenter>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-image: url("./about/about-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
`;

const Container = styled.div`
  background: white;
  padding: 10vh;
  margin: 10vh;
  opacity: 0.8;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  h1,
  h2 {
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  p {
    width: 20vw;
    padding-top: 10vh;
    font-size: 16px;
    @media (max-width: 768px) {
      width: 70vw;
      text-align: center;
    }
  }
`;

const Banner = styled.img`
  width: 100vw;
`;

const Image = styled.img`
  width: 50vw;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const Methodology = styled.div`
  h2 {
    text-align: center;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const TextCenter = styled.p`
  margin-top: 15vh;
  text-align: center;
`;
