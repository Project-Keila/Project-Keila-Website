import styled from 'styled-components';
import Link from 'next/link';

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #abdcb4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavContainer = styled.div`
  height: 134px;
  padding-top: 12px;
`;

export const Nav = styled.ul`
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.li`
  display: inline;
  margin: 0 72px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const LandingContainer = styled.div`
  display: flex;
  align-items: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
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
