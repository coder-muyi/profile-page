import styled from 'styled-components/macro'
import ProfileImg from "../assets/profile-img-3.webp"
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg"
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg"

const Info = () => {
  
  return (
    <section>
      <div className="Info">
        <div className="Info--img">
          <img src={ProfileImg} alt="profile" />
        </div>

        <div className="Info--contents">
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
        </div>
      </div>

      <About>
        <div className="About">
          <h2>About</h2>
          <p className="para">I am a frontend developer with a particular interest in frontend frameworks. I try to keep up with new web development strategies and best practices, applying them in code as I learn.</p>
        </div>
        <div className="Interests">
          <h2>Interests</h2>
          <p className="para">Movies. Internet. JavaScript. Music. Team work. Coding</p>
        </div>
      </About>
    </section>
  )
}

const About = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-row: 1 / 3;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`

export default Info