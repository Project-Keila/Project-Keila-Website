import styled from "styled-components";
import Link from "next/link";
import Button from "../Button/Button";
import HambrgerMenu from "./HambrgerMenu";
import { useRouter } from "next/router";

export default function NavBar({ isLanding }) {
  const router = useRouter();
  return (
    <NavContainer isLanding={isLanding}>
      <LogoImg onClick={() => router.push("/")} src="logo.png" />
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
      <BtnDiv>
        <Button title="Connect" />
      </BtnDiv>
      <HambrgerMenu />
    </NavContainer>
  );
}

export const NavContainer = styled.div`
  padding: 0px 20px;
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
  cursor: pointer;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
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

const BtnDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
