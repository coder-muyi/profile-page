import { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';

import ProfileImg from 'assets/profile-img.webp';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { devices } from 'assets/data';
import useScrollObserver from 'hooks/useScrollObserver';

const Hero = () => {
  const heroRef = useRef({});

  const observer = useScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('do-magic');
    } else {
      entry.target.classList.remove('do-magic');
    }
  });

  useEffect(() => {
    const heroElement = heroRef.current;
    observer.observe(heroElement);
  }, [observer]);

  return (
    <StyledHero ref={heroRef}>
      <Info>
        <div className="profile-img">
          <img src={ProfileImg} alt="profile" />
        </div>
        <Details>
          <h1 className="name">
            <span className="small">Hi, I am</span>Oluwamuyiwa
          </h1>
          <p className="occupation">Frontend Developer</p>
          <div className="Info--content_btns">
            <a className="button email-btn" href="mailto:codermuyi@duck.com">
              <MailIcon />
              <span>Email</span>
            </a>
            <a
              className="button linkedin-btn"
              href="https://www.linkedin.com/in/codermuyi/"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </Details>
      </Info>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  opacity: 0;
  display: grid;
  place-items: center;

  --ttf: cubic-bezier(0.68, -0.55, 0.27, 1.55);

  .name,
  .occupation,
  .Info--content_btns {
    transform: translateX(-100%);
    opacity: 0;
    transition-timing-function: var(-ttf);
  }

  &.do-magic {
    opacity: 1;

    .name {
      transition-delay: 0.2s;
    }
    .occupation {
      transition-delay: 0.3s;
    }

    .Info--content_btns {
      transition-delay: 0.4s;
    }

    .profile-img,
    .about,
    .interests {
      opacity: 1;
      transform: none;
    }
    .name,
    .occupation,
    .Info--content_btns {
      transform: none;
      opacity: 1;
    }
  }
`;

const Info = styled.div`
  text-align: center;
  isolation: isolate;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--theme-color);
    z-index: -1;
    clip-path: polygon(
      0 0,
      48% 45%,
      100% 35%,
      100% 70%,
      48% 57%,
      0 100%,
      43% 100%,
      0% 70%,
      0% 35%,
      43% 0
    );
  }

  .profile-img {
    max-width: 15rem;
    padding-top: 1em;
    margin-inline: auto;

    img {
      width: 80%;
      margin-inline: auto;
      border-radius: 50%;
      object-fit: cover;
      border-bottom: 1em solid var(--bg-color);
    }

    @media ${devices.tablet} {
      max-width: 20rem;
    }
  }
`;

const Details = styled.div`
  .name {
    margin-bottom: 0;
    font-size: clamp(3rem, 3vw, 5rem);
    line-height: 1;

    .small {
      display: block;
      font-size: 1rem;
    }
  }

  .occupation {
    margin: 0;
    font-weight: 400;
    color: var(--t-color);
    margin-bottom: 1rem;
  }

  .Info--content_btns {
    display: flex;
    justify-content: center;
    gap: 20px;

    .button svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    .email-btn {
      background-color: white;
      color: var(--sec-color);
    }

    .linkedin-btn {
      background-color: var(--sec-color);
      color: white;
    }
  }
`;

export default Hero;
