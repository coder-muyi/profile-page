import styled from 'styled-components/macro';

import Hero from 'components/Home/Hero';
import Projects from 'components/Home/Projects';
import GridNav from 'components/common/GridNav';
import Canvas from 'components/common/Canvas';
import Contact from 'components/Home/Contact';
import About from 'components/Home/About';
import ScrollSection from 'components/common/ScrollSection';
import { useWindowSize } from 'hooks/useWindowSize';

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <>
      <GridNav />
      <Fixed>
        <Canvas dimension={windowSize} />
      </Fixed>
      <ScrollSection name="hero" content={<Hero />} />
      <ScrollSection name="about" content={<About />} includePadding />
      <ScrollSection name="projects" content={<Projects />} includePadding />
      <ScrollSection name="contacts" content={<Contact />} includePadding />
    </>
  );
}

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;
