import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer--icons">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default Footer;
