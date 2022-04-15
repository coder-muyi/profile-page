import ProfileImg from "../assets/profile-img.png"
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg"
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg"

const Info = () => {
  return (
    <div className="Info">
      <div className="Info--img">
        <img src={ProfileImg} alt="profile" />
      </div>

      <div className="Info--contents">
        <h1 className="name">Samuel Adepoju</h1>
        <p className="occupation">Frontend Developer</p>
        <p className="website">codermuyi.vercel.app</p>
        <div className="Info--content_btns">
          <button className="email-btn">
            <a href="mailto:oluwamuyiwaadepoju@gmail.com">
              <MailIcon />
              <span>Email</span>
            </a>
          </button>
          <button className="linkedin-btn">
            <a href="https://www.linkedin.com/in/oluwamuyiwa-adepoju-2b0948237/">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Info