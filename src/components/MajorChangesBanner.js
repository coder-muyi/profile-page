import styled from 'styled-components/macro'

const MajorChangesBanner = () => {
  return (
    <Container>
      <p>Major Changes Coming Up...</p>
    </Container>
  )
}

const Container = styled.div`
  /* display: none; */
  background-color: rgb(248,180,1);
  padding: 3rem 2rem 2rem;
  margin: 0;
  width: 100%;
  grid-column: 1 / -1;
  transition-duration: 1s;
  overflow: hidden;
  animation: hide-banner var(--banner-anim);
  animation-fill-mode: forwards;
  
  p {
    font-weight: bold;
    font-family: monospace;
    font-size: 1.2rem;
  }
`

export default MajorChangesBanner