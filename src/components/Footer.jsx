import { FaGithub } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-title-container">
        <h4 className="footer-title">Task Manager App</h4>
        <p className="footer-subtitle">
          This page was made by{" "}
          <a href="https://github.com/AlvaroBT7" target="_BLANK">
            <FaGithub /> AlvaroBT7
          </a>
        </p>
      </div>
      <div className="footer-list">
        <h3 className="footer-list-titlte">Links: </h3>
        <ul className="footer-li-container">
          <li className="footer-li">
            <a href="https://github.com/AlvaroBT7" target="_BLANK">
              <FaGithub />
              GitHub
            </a>
          </li>
          <li className="footer-li">
            <a href="https://youtube.com/@dnemix" target="_BLANK">
              <AiFillYoutube />
              YouTube
            </a>
          </li>
          <li className="footer-li">
            <a href="https://github.com/AlvaroBT7" target="_BLANK">
              <FaGithub />
              GitHub
            </a>
          </li>
          <li className="footer-li">
            <a href="https://github.com/AlvaroBT7" target="_BLANK">
              <FaGithub />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
