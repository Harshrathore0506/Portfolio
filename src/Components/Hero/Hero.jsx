import React from "react";
import profile_Img from "../../assets/Profile_H.png";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PDF from "../../assets/Harsh_Resume.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_Img} alt="" />
      <h1 className="hero-h1">I'm Harsh Rathore</h1>
      <p className="hero-p">
        Motivated and quick-learning web developer with a strong foundational
        knowledge of the MERN stack, including HTML, CSS, JavaScript, ReactJS,
        NodeJS, ExpressJS, and MongoDB.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact With Me</p>
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={PDF} download={true}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
