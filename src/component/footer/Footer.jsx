import React from "react";
import "../footer/footer.scss";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left-side">
        <h1>social</h1>
        <div className="footer-social-section">
          <ul>
            <li>
              <ImFacebook2 style={{ fontSize: "20px", color: "white" }} />{" "}
              Facebook
            </li>
            <li>
              <GrInstagram style={{ fontSize: "20px", color: "white" }} />{" "}
              Instagram
            </li>
            <li>
              <FaTwitterSquare style={{ fontSize: "20px", color: "white" }} />{" "}
              Twitter
            </li>
            <li>
              <FaLinkedin style={{ fontSize: "20px", color: "white" }} />{" "}
              Linkedin
            </li>
            <li>
              <SiTiktok style={{ fontSize: "20px", color: "white" }} /> Tik-Tok
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-main-side">
        <div className="footer-main-side-title">
          <h1>About us</h1>
        </div>
        <div className="footer-main-side-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          explicabo iste doloribus, animi aspernatur dolor velit aut consectetur
          similique et, at, impedit delectus non sunt sed vitae nam earum saepe!
        </div>
      </div>
      <div className="footer-privacy-policy-section">
        <h1>privacy policy</h1>
        <div className="footer-privacy-pilicy-contnent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          cupiditate id facere, soluta ea numquam temporibus alias veniam
          repellendus sint dicta modi laborum unde iste rerum reiciendis quaerat
          exercitationem quae.
          <button>know more</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
