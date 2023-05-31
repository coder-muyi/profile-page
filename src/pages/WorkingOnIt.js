// import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link, useParams } from 'react-router-dom';

import Canvas from 'components/Canvas';
import emojiSrc from 'assets/emoji-smile.gif';
import { useWindowSize } from 'hooks/useWindowSize';

import Hero from 'components/Home/Hero';
import Projects from 'components/Home/Projects';
import HomeNav from 'components/common/GridNav';
import Contact from 'components/Home/Contact';
import About from 'components/Home/About';
import ScrollSection from 'components/ScrollSection';

const WorkingOnIt = () => {
  const dim = useWindowSize();

  const params = useParams();

  console.log(params);

  return (
    <WOI>
      <div>
        <h1>
          Working On It <img className="emoji" src={emojiSrc} alt="emoji" />{' '}
        </h1>
        <Link className="button" to="/">
          GO BACK
        </Link>
      </div>
      <HomeNav />
      <Fixed>
        <Canvas dimension={dim} />
      </Fixed>
      <ScrollSection name="hero" content={<Hero />} />
      <ScrollSection name="about" content={<About />} includePadding />
      <ScrollSection name="projects" content={<Projects />} includePadding />
      <ScrollSection name="contacts" content={<Contact />} includePadding />
    </WOI>
  );
};

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

const WOI = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > * {
    position: absolute;
  }

  .emoji {
    width: 40px;
    height: 40px;
  }
`;

export default WorkingOnIt;
