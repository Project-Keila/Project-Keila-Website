import styled from 'styled-components';
import NavBar from './NavBar/NavBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
}
