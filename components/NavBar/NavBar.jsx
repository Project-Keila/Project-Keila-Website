import styled from "styled-components";
import Link from "next/link";
import Button from "../Button/Button";

export default function NavBar() {
  return (
    <NavContainer>
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
          <NavLink href="/roadmap">
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
  /* height: 186px; */
  background-image: url("./banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100px;
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
