import logo from "@assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./header.scss";

const Header = () => {
  const openGit = () => {
    window.open("https://github.com/Jun99uu/beautiful-aurora", "_blank");
  };

  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />
      <FontAwesomeIcon
        icon={faGithub}
        className="git-moticon"
        onClick={openGit}
      />
    </div>
  );
};

export default Header;
