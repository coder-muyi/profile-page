import styled from 'styled-components/macro';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

import { ReactComponent as FrontendMentorIcon } from 'assets/icons/frontend-mentor.svg';

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
  {
    icon: <IoLogoFacebook size={iconSize} />,
    text: 'Facebook',
    link: 'https://web.facebook.com/codermuyi',
  },
  {
    icon: <IoLogoInstagram size={iconSize} />,
    text: 'Instagram',
    link: 'https://www.instagram.com/codermuyi',
  },
  {
    icon: <FrontendMentorIcon />,
    text: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/codermuyi',
  },
];

const Contact = () => {
  return (
    <ContactDiv>
      <h2 className="section-header">Contact me</h2>
      <h2 className="username">@codermuyi</h2>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>
            {contact.icon}
            <a href={contact.link} target="_blank" rel="noreferrer">
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  .username {
    padding-inline: 3rem;
  }

  ul {
    color: var(--theme-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
    overflow: hidden;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.5em;

      a:hover {
        color: var(--btw);
      }
    }
  }
`;

export default Contact;
