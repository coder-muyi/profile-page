import styled from 'styled-components/macro';

const About = () => {
  return (
    <>
      <h2 className="section-header">About me</h2>
      <Info>
        <div className="about">
          <h2>About</h2>
          <p className="para">
            I am a frontend developer with a particular interest in frontend
            frameworks. I try to keep up with new web development strategies and
            best practices, applying them in code as I learn.
          </p>
        </div>
        <div className="skills">
          <h2>Specialty</h2>
          <p className="para" style={{ fontWeight: 'bold' }}>
            JavaScript | TypeScript | Next.js | React.js
          </p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p className="para">
            Movies. Internet. JavaScript. Music. Team work. Coding
          </p>
        </div>
      </Info>
    </>
  );
};

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin-inline: 3rem;
  }

  .about {
    max-width: 65ch;
  }

  .skills .para {
    color: var(--t-color);
  }
`;

export default About;
