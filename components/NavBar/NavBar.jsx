import styled from "styled-components";
import Link from "next/link";
import Button from "../Button/Button";

export default function NavBar({ isLanding }) {
  return (
    <NavContainer isLanding={isLanding}>
      <LogoImg src="logo.png" />
      <Links>
        <NavItem>
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/offset-calculator">
            <a>Calculator</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">
            <a>About</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/partners">
            <a>Partners</a>
          </NavLink>
        </NavItem>
      </Links>
      <Button title="Connect" />
    </NavContainer>
  );
}

export const NavContainer = styled.div`
  /* padding: 10px; */
  width: 100vw;
  position: ${(props) => (props.isLanding ? "absolute" : "relative")};
  height: 70px;
  z-index: 100;
  top: 0px;
  background-image: ${(props) =>
    props.isLanding ? "url('')" : "url('./banner.png')"} !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 90px;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  display: inline;
  color: white;
  font-family: Montserrat;
  font-weight: 800;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
