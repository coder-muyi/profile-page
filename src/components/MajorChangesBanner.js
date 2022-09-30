import styled from 'styled-components/macro'

const MajorChangesBanner = () => {
  return (
    <Container>
      <p>Major Changes Coming Up...</p>
    </Container>
  )
}

const Container = styled.div`
  /* background-color: rgb(248,180,1); */
  background-color: var(--sec-color);
  padding: 3rem 2rem 2rem;
  margin: 0;
  overflow: hidden;
  animation: hide-banner 3s ease-out 4s 1;
  animation-fill-mode: forwards;
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);

  p {
    font-weight: bold;
    font-family: monospace;
    font-size: 1.2rem;
  }
`

export default MajorChangesBanner