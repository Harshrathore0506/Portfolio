import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github_icon from "../../assets/github.png";
import instagram_icon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-group">
          <div className="footer-detail">
            <p>Phone</p>
            <p>6265476456</p>
          </div>
          <div className="footer-detail">
            <p>Email</p>
            <p>hr8775587@gmail.com</p>
          </div>
          <div className="footer-detail">
            <p>Socials</p>
            <div className="footer-flex">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/harsh-rathore-166831234 "
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/harshrathore0506/"
              >
                <img src={instagram_icon} alt="" />
              </a>
              <a target="_blank" href="https://github.com/Harshrathore0506/ ">
                <img src={github_icon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Harsh Rathore all right reserved</p>
        <p>Designed by Harsh Rathore</p>
      </div>
    </div>
  );
};

export default Footer;
