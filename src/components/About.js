import styled from 'styled-components/macro'

const About = () => {
  return (
    <Container>
      <div className="About">
        <h2>About</h2>
        <p className="para">I am a frontend developer with a particular interest in frontend frameworks. I try to keep up with new web development strategies and best practices, applying them in code as I learn.</p>
      </div>
      
      <div className="Interests">
        <h2>Interests</h2>
        <p className="para">Movies. Internet. JavaScript. Music. Team work. Coding</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-row: 2 / 4;
  animation: change-grid var(--banner-anim);
  animation-fill-mode: forwards;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`

export default About