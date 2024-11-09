import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
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
              <p>LinkedIn</p>
              <p>Instagram</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Harsh Rathore all right reserved</p>
        <p>Desgined by Harsh Rathore</p>
      </div>
    </div>
  );
};

export default Footer;
