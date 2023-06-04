import styled from 'styled-components/macro';
import { Link as ScrollLink } from 'react-scroll';
import { useOutletContext } from 'react-router-dom';
import {
  IoArrowUpCircleOutline,
  IoListCircleOutline,
  IoPersonCircleOutline,
  IoCallOutline,
} from 'react-icons/io5';

import { useWindowSize } from 'hooks/useWindowSize';
import { devices, sizes } from 'assets/data';

const iconSize = '3rem';
const navContent = [
  {
    icon: <IoArrowUpCircleOutline size={iconSize} />,
    text: '',
    link: 'hero',
  },
  {
    icon: <IoPersonCircleOutline size={iconSize} />,
    text: 'About',
    link: 'about',
  },
  {
    icon: <IoListCircleOutline size={iconSize} />,
    text: 'Projects',
    link: 'projects',
  },
  {
    icon: <IoCallOutline size={iconSize} />,
    text: 'Contacts',
    link: 'contacts',
  },
];

const RightBar = () => {
  const [isDarkMode] = useOutletContext();
  const { width } = useWindowSize();

  const activeStyle =
    width >= sizes.tablet
      ? {
          transform: 'scale(1.1) translateX(-2rem)',
          backgroundColor: 'var(--sec-color)',
          color: isDarkMode ? 'var(--theme-color)' : 'white',
          boxShadow: '0 2px 3px rgb(255 255 255 / .2)',
        }
      : {
          color: 'var(--theme-color)',
        };

  return (
    <Nav isDarkMode={isDarkMode}>
      {navContent.map((item, key) => (
        <ScrollLink
          key={key}
          to={item.link}
          spy={true}
          smooth={true}
          duration={300}
          offset={width >= sizes.mobileL ? -150 : -300}
          className="nav-item-link"
          activeStyle={activeStyle}
        >
          {item.icon}
          {item.text && <span className="text">{item.text}</span>}
        </ScrollLink>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1000;
  background-color: var(--wtb);
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;

  .nav-item-link {
    --size: 5rem;
    color: var(--btw);
    width: var(--size);
    height: var(--size);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    .text {
      display: none;
    }
  }

  @media ${devices.tablet} {
    gap: 1rem;
    flex-direction: column;
    right: 0;
    padding: 1rem;
    min-height: 100vh;
    width: var(--grid-right-col);
    background: none;

    .nav-item-link {
      --size: 7rem;
      color: var(--theme-color);
      border: 0.2rem solid var(--theme-color);
      gap: 1rem;
      border-radius: 0.8rem;

      .text {
        display: initial;
      }

      :hover {
        transform: scale(1.06);
      }

      @media ${devices.laptop} {
        --size: 8rem;
        width: calc(var(--size) * 1.7);
        flex-direction: row;
      }
    }
  }
`;

export default RightBar;
