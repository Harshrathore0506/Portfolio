import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Html_img from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/java-script.png";
import ReactJS from "../../assets/React.png";
import NodeJs from "../../assets/Node.png";
import ExpressJs from "../../assets/express-js.png";
import Cpp from "../../assets/C++.png";
import MongoDB from "../../assets/mongo-db.png";
import DataS from "../../assets/Data_Structure.png";
import OOPS from "../../assets/OOPS.jpg";
import TailWind from "../../assets/tailwindcss.png";
import Python from "../../assets/python.png";
import PowerBI from "../../assets/power-bi.png";
import Machine from "../../assets/machine-learning.png";
import DS from "../../assets/data-science.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img src={profile_img} alt="" />
        </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Experienced in MERN stack development and proficient in building
              dynamic and responsive web applications using MongoDB, Express.js,
              React, and Node.js.
            </p>
            <hr style={{ width: "50%" }} />
            <p>
              Additionally, adept in Data Science using Python with hands-on
              experience in data analysis, machine learning, and data
              visualization. Proficient in libraries like Pandas, NumPy,
              Matplotlib, and Scikit-Learn to extract insights, build predictive
              models, and present data-driven solutions.
            </p>
            <hr style={{ width: "70%" }} />
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>Work And Experience</h1>
            <p> May 2024 - jul 2024</p>
            <p>
              Frontend Development Intern Internship at Cognifyz Technologies
              I've successfully finished my frontend Development internship with
              Cognifyz Technologies! I learnt a lot about frontend Development
              there, and it was a worthwhile experience. I am appreciative of
              the guidance and assistance provided by the Cognifyz
              Technologies team.
            </p>
          </div>
          <hr />

          <div className="about-achievement">
            <h1>Education</h1>
            <div className="box-container">
              <div className="box-contain">
                <div>
                  <p>Apr 2018 - Mar 2019</p>
                </div>
                <div>
                  <p>10th, Scholars Den School</p>
                  <p>Percentage - 74%</p>
                </div>
              </div>
              <div className="box-contain">
                <div>
                  <p>Apr 2020 - Mar 2021</p>
                </div>
                <div>
                  <p>12th, Scholars Den School</p>
                  <p>Percentage - 76%</p>
                </div>
              </div>
              <div className="box-contain">
                <div>
                  <p>Nov 2021 - Present</p>
                </div>
                <div>
                  <p>B.Tech CSE, Sage University Indore</p>
                  <p>CGPA - 7.89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-Skills">
          <div className="heading">
            <h1>Professional Skills</h1>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-Skill container">
            <div className="skill">
              <img src={Html_img} alt="" />
              <h1>HTML</h1>
            </div>
            <div className="skill">
              <img src={CSS} alt="" />
              <h1>CSS</h1>
            </div>
            <div className="skill">
              <img src={JavaScript} alt="" />
              <h1>JavaScript</h1>
            </div>
            <div className="skill">
              <img src={TailWind} alt="" />
              <h1>Tailwind CSS</h1>
            </div>
            <div className="skill">
              <img src={ReactJS} alt="" />
              <h1>React JS</h1>
            </div>
            <div className="skill">
              <img src={NodeJs} alt="" />
              <h1>Node JS</h1>
            </div>
            <div className="skill">
              <img src={ExpressJs} alt="" />
              <h1>Express JS</h1>
            </div>
            <div className="skill">
              <img src={MongoDB} alt="" />
              <h1>MongoDB</h1>
            </div>
            <div className="skill">
              <img src={Cpp} alt="" />
              <h1>C++</h1>
            </div>
            <div className="skill">
              <img src={OOPS} alt="" />
              <h1>OOPs</h1>
            </div>
            <div className="skill">
              <img src={DataS} alt="" />
              <h1>Data Structure</h1>
            </div>
            <div className="skill">
              <img src={Python} alt="" />
              <h1>Python</h1>
            </div>
            <div className="skill">
              <img src={DS} alt="" />
              <h1>Data Science</h1>
            </div>
            <div className="skill">
              <img src={Machine} alt="" />
              <h1>Machine Learing</h1>
            </div>
            <div className="skill">
              <img src={PowerBI} alt="" />
              <h1>Power BI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
