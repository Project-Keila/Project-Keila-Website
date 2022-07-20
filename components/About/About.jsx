import styled from "styled-components";
import Button from "../Button/Button";

export default function About() {
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

        {/* <Methodology>
          <h2>Methodology</h2>
          <p>
            Our methodology builds upon four steps to generate data on the
            electricity consumption and carbon footprint of PoS-systems and
            additional data to develop metrics for a valid comparison between
            the systems.
          </p>
          <p>
            In the first step, we analyze the selected PoS-systems and their
            minimum hardware requirements. The hardware requirements are an
            indicator of the hardware composition of the network. We use this
            information and additional hardware data from PassMark to select and
            obtain hardware that we use to measure a single node&apos;s
            electricity consumption.
          </p>
          <p>
            In the second step, we estimate the electricity usage of a single
            node and provide upper and lower bounds for the networks. We start
            by running the software on all obtained hardware devices and measure
            their single electricity consumption while running the network and
            while idling. We also measure other data points to be able to
            evaluate additional metrics. These values allow us to produce
            reasonable upper and lower bounds for running a single node, as our
            hardware is selected accordingly.
          </p>

          <p>
            In the third step, we estimate the electricity consumption of the
            complete network. Firstly, we collect information about the size of
            the network, as the node count significantly influences the amount
            of electricity consumed. Secondly, we develop a weighting between
            the single hardware devices for each network. Lastly, we multiply
            the electricity consumption of the weighed nodes by the number of
            nodes in the network. In case the distribution of nodes for all
            networks is available, we use the respective carbon intensity
            factors of the regions to calculate the carbon footprint of the
            respective network. Otherwise, we rely on an average global carbon
            intensity factor.
          </p>
          <p>
            In the fourth step, we analyze the additional data (such as
            transaction data) to develop additional metrics to explore energy
            efficiency in transaction throughput. This allows us to put the
            electricity consumption of single networks into perspective with
            other PoS networks and also other cryptocurrencies such as Bitcoin
            and Ethereum.
          </p>
        </Methodology> */}
        <FlexCenter>
          <Button title="Use Calculator" />
        </FlexCenter>

        <TextCenter>Powered by Project Keila</TextCenter>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-image: url("./about/about-
  
  .png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(100vw - 18px);
`;

const Container = styled.div`
  background: white;
  padding: 10vh;
  margin: 10vh;
  opacity: 0.8;
  width: calc(100vw - 18px);
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
  width: calc(100vw - 18px);;
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
`;

const TextCenter = styled.p`
  margin-top: 15vh;
  text-align: center;
`;
