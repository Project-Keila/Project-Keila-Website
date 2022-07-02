import styled from 'styled-components';

export const LandingContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  height: 90vh;
  width: 100%;
  padding-top: 48px;
  background-color: #abdcb4;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const HomeTree = styled.img`
  height: 414px;
  width: 414px;

  ${({ flip }) =>
    flip &&
    `
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  `}
`;
