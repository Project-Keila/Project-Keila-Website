import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  HomeTree,
  LandingContainer,
  LandingWrapper,
  Logo,
  LogoContainer,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  PlantButton,
} from '../components/LandingPage/LandingPageElements';

export default function Home() {
  return (
    <LandingWrapper>
      <NavContainer>
        <Nav>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/offset-calculator'>Offset Calculator</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/roadmap'>Roadmap</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/team'>Team</NavLink>
          </NavItem>
        </Nav>
      </NavContainer>
      <LandingContainer>
        <HomeTree src='hometree.png' flip={false} />
        <LogoContainer>
          <Logo src='logo.svg' />
          <PlantButton>Plant Tree</PlantButton>
        </LogoContainer>
        <HomeTree src='hometree.png' flip={true} />
      </LandingContainer>
    </LandingWrapper>
  );
}
