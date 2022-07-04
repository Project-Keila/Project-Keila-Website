import styled from 'styled-components';

export default function About() {
  return (
    <AboutContainer>
      <TextContainer>
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>
          WHAT IS PROJECT KEILA
        </p>
        <p style={{ textAlign: 'center' }}>
          Project Keila is a reimagining of carbon offsetting. No more will
          companies and people buy buckets of carbon offsets, but rather they
          will own the carbon offset of specific trees. This makes this the
          first time in history that being green for the entity offsetting, can
          be more than a loss annually.
        </p>
        <p>Project Keila is the future of green.</p>
        <p>
          We are building a verifiable future for our children. Historically, to
          be green, you needed government intervention, because green was
          expensive, and had no upside.
        </p>
        <p>
          What if it didn&#39;t have to be that way? What if you OWNED your
          green? What if we could show how much our carbon footprint was, in a
          verifiable way?
        </p>
        <p>
          The assumption that trees are fungible, is inaccurate at best. A
          single tree that is owned, is better than 100 trees rented for their
          carbon offset. More specifically, it is owned and verifiable.
        </p>
      </TextContainer>
      <TreeContainer>
        <AboutTree src='abouttree.png' alt='About Tree' />
      </TreeContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 90vh;
`;

const AboutTree = styled.img`
  height: 485px;
  width: 377px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin-left: 96px;
`;
const TreeContainer = styled.div`
  width: 30%;
  margin-top: 150px;
`;
