import { Nav, NavContainer, NavItem, NavLink } from './NavBarElements';

export default function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <NavItem>
          <NavLink href='/'>
            <a>Home</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/offset-calculator'>
            <a>Offset Calculator</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/about'>
            <a>About</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/roadmap'>
            <a>Roadmap</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/team'>
            <a>Team</a>
          </NavLink>
        </NavItem>
      </Nav>
    </NavContainer>
  );
}
