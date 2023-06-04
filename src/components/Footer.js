import styled from 'styled-components';

import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
} from 'react-icons/io5';

const iconSize = '3em';
const contacts = [
  {
    icon: <IoMail size={iconSize} />,
    text: 'Email',
    link: 'mailto:codermuyi@duck.com',
  },
  {
    icon: <IoLogoLinkedin size={iconSize} />,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/codermuyi/',
  },
  {
    icon: <IoLogoGithub size={iconSize} />,
    text: 'GitHub',
    link: 'https://github.com/codermuyi',
  },
  {
    icon: <IoLogoTwitter size={iconSize} />,
    text: 'Twitter',
    link: 'https://twitter.com/codermuyi',
  },
];

const Footer = ({ displaySocial }) => {
  return (
    <SFooter>
      {displaySocial && (
        <div>
          {contacts.map((contact, i) => (
            <div key={i}>
              <a href={contact.link} target="_blank" rel="noreferrer">
                {contact.icon}
              </a>
            </div>
          ))}
        </div>
      )}
      <p>@ 2023</p>
    </SFooter>
  );
};

const SFooter = styled.div`
  background-color: var(--sec-color);
  text-align: center;
  padding-block: 3rem;
  color: white;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
  }

  p {
    color: white;
  }
`;

export default Footer;
