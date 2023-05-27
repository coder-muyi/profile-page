import styled from 'styled-components/macro';

import Hero from 'components/Hero';
import Projects from 'components/Projects';
import HomeNav from 'components/HomeNav';
import Canvas from 'components/Canvas';
// import { devices } from "assets/data";
import { useWindowSize } from 'hooks/useWindowSize';

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <>
      <HomeContainer>
        <HomeNav />
        {/* <Fixed>
          <Canvas dimension={windowSize} />
        </Fixed> */}
        <Hero />
        <Projects />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  /* isolation: isolate; */
`;

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  /* z-index: -1; */
`;
