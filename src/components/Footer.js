import styled from 'styled-components';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
// import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
// import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { devices } from '../assets/data';

const Footer = () => {
  return (
    <SFooter>
      <div className="Footer--icons">
        <TwitterIcon />
        {/* <FacebookIcon />
        <InstagramIcon /> */}
        <GitHubIcon />
      </div>
    </SFooter>
  );
};

const SFooter = styled.div`
  background-color: var(--sec-color);

  .Footer--icons {
    padding: 2rem;
    margin-inline: auto;
    max-width: 500px;
    display: flex;
    /* justify-content: space-around; */

    .icon {
      width: 30px;
      height: 30px;

      path {
        fill: white;
      }
    }
  }

  @media ${devices.tablet} {
    grid-column: 1 / -1;
  }
`;

export default Footer;
