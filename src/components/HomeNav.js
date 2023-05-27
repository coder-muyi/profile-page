import styled from "styled-components/macro";
import { useOutletContext } from "react-router-dom";

import { devices } from "assets/data";

const RightBar = () => {
  const [isDarkMode] = useOutletContext();

  return (
    <Nav isDarkMode={isDarkMode}>
      <NavItem className='nav-item'>Top</NavItem>
      <NavItem className='nav-item'>About</NavItem>
      <NavItem className='nav-item'>Projects</NavItem>
      <NavItem className='nav-item'>Lorem</NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: none;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  right: 0;
  width: 18rem;
  z-index: 1000;
  justify-content: center;
  background: linear-gradient(55deg, var(--sec-color), 70% transparent);

  .nav-item {
    background-color: ${p => p.isDarkMode ? 'var(--bg-color)' : 'white'};
  }

  @media ${devices.tablet} {
    display: grid;
  }
`;

const NavItem = styled.div`
  --size: 7rem;
  border: 0.2rem solid var(--sec-color);
  color: var(--paragraph-txt-color);
  /* width: calc(var(--size) * 1.5); */
  width: var(--size);
  height: var(--size);
  border-radius: 0.8rem;
  display: grid;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.1);
  }
`;

export default RightBar;
