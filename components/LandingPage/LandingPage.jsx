import {
  HomeTree,
  LandingContainer,
  Logo,
  LogoContainer,
  PlantButton,
} from './LandingPageElements';

export function LandingPage() {
  return (
    <LandingContainer>
      <HomeTree src='hometree.png' flip={false} />
      <LogoContainer>
        <Logo src='logo.svg' />
        <PlantButton>Plant Tree</PlantButton>
      </LogoContainer>
      <HomeTree src='hometree.png' flip={true} />
    </LandingContainer>
  );
}
