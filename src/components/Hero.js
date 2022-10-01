import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import ProfileImg from "../assets/profile-img-3.webp"
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg"
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg"
import { devices } from '../assets/data'
import useScrollObserver from '../assets/hooks/useScrollObserver'
import Canvas from "./Canvas"

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {width: innerWidth, height: innerHeight};
}

const Hero = ({isDarkMode}) => {
  const heroRef = useRef({})
  const [heroDimension, setheroDimension] = useState(getWindowSize())
  
  const observer = useScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('do-magic')
    }
  })

  useEffect(() => {
    const heroElement = heroRef.current

    let listener = () => {
      setheroDimension({
        width: heroElement.clientWidth,
        height: heroElement.clientHeight
      })
    }
    window.addEventListener('resize', listener)

    // let addHeroClass = () => heroElement.classList.add('do-magic')
    // window.addEventListener('load', addHeroClass)

    observer.observe(heroElement)
    return () => window.removeEventListener('resize', listener)
  }, [observer])

  return (
    <StyledHero ref={heroRef}>
      <Canvas 
        dimension={heroDimension} 
        color={isDarkMode ? 'rgba(255, 255, 255, .8)' : 'rgba(245,98,93, .3)'}
      />

      <InfoOne>
        <div className="profile-img">
          <img src={ProfileImg} alt="profile" />
        </div>
        <Details>
          <h1 className="name">Samuel Adepoju</h1>
          <p className="occupation">Frontend Developer</p>
          <div className="Info--content_btns">
            <button className="email-btn" tabIndex={-1}>
              <a href="mailto:oluwamuyiwaadepoju@gmail.com">
                <MailIcon />
                <span>Email</span>
              </a>
            </button>
            <button className="linkedin-btn" tabIndex={-1}>
              <a href="https://www.linkedin.com/in/oluwamuyiwa-adepoju-2b0948237/">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </button>
          </div>
        </Details>
      </InfoOne>

      <InfoTwo>
        <div className="about">
          <h2>About</h2>
          <p className="para">I am a frontend developer with a particular interest in frontend frameworks. I try to keep up with new web development strategies and best practices, applying them in code as I learn.</p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p className="para">Movies. Internet. JavaScript. Music. Team work. Coding</p>
        </div>
      </InfoTwo>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  min-height: 100vh;
  position: relative;
  grid-column: 1 / -1;
  overflow: hidden;
  transition: all 1s ease-in;
  opacity: 0;

  & > * {
    z-index: 15;
    position: relative;
  }

  canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

  @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (${devices.laptop}) {
    gap: 3rem;
  }

  --tmf: cubic-bezier(0.68, -0.55, 0.27, 1.55);

  .profile-img,
  .about, .interests {
    transition: 1s var(--tmf);
    opacity: 0;
    transform: translateX(-100%);
  }
  .about, .interests {
    transition: 1.5s var(--tmf);
    transform: translateX(100%)
  }

  .interests {
    transition: 1.5s var(--tmf) 200ms;
  }

  .name {
    transition: .5s var(--tmf) 500ms;
  } .occupation {
    transition: .5s var(--tmf) 600ms;
  } .website{
    transition: .5s var(--tmf) 700ms;
  } .Info--content_btns {
    transition: .5s var(--tmf) 800ms;
  }

  .name, .occupation, .website, .Info--content_btns {
    transform: translateX(-100%);
  }

  &.do-magic {
    opacity: 1;

    .profile-img,
    .about, .interests {
      opacity: 1;
      transform: none;
    }
    .name, .occupation, .website, .Info--content_btns {
      transform: none;
    }
  }
`

const InfoOne = styled.div`
  text-align: center;
  position: relative;
  padding-block: 5rem;

  ::before { 
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--sec-color);
    z-index: 10;
    clip-path: polygon(0 0, 48% 45%, 100% 35%, 100% 70%, 48% 57%, 0 100%, 43% 100%, 0% 70%, 0% 35%, 43% 0);
  }

  * {
    z-index: 15;
    position: relative;
  }

  .profile-img {
    width: 100%;
    padding-top: 1em;
    
    img {
      width: 80%;
      max-width: 475px;
      margin-inline: auto;
      border-radius: 50%;
      object-fit: cover;
      border-bottom: 1em solid var(--bg-color);
    }
  }

  @media (${devices.tablet}) {
    grid-column: 1 / 2;
  }
`

const Details = styled.div`
  .name {
    margin-bottom: 0;
    font-size: 3rem;
  }

  .occupation {
    margin: 0;
    font-weight: 400;
    color: var(--occupation-txt-color);
    margin-bottom: 1rem;
  }

  .website {
    font-size: 12px;
    color: var(--web-txt-color);
  }

  .Info--content_btns {
    display: flex;
    justify-content: center;
    gap: 20px;

    button svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    .email-btn {
      background-color: white;
    }

    .linkedin-btn {
      background-color: var(--sec-color);
      color: white;
    }
  }
`

const InfoTwo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-block: 4rem;

  & > * {
    margin-inline: 45px;
  }

  .about {}
  .interests {}

  .para {
    color: var(--paragraph-txt-color);
  }

  @media (${devices.tablet}) {
    max-width: 400px;
  }
`

export default Hero