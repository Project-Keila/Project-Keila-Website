import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Layout({ children }) {
  const router = useRouter();
  return (
    <Container>
      <NavBar isLanding={router.pathname === "/"} />
      {children}
      <Footer />
    </Container>
  );
}
