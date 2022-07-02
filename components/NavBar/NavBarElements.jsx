import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.div`
  padding-top: 16px;
  height: 10vh;
  width: 100%;
  background-color: #abdcb4;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.ul`
  height: 100%;
`;

export const NavItem = styled.li`
  display: inline;
  margin: 0 72px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
