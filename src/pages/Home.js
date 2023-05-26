import styled from "styled-components/macro";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
// import Footer from "../components/Footer"

import { devices } from "../assets/data";

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Projects />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
