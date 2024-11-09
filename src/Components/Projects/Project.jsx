import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import TodoList from "../../assets/TodoList.png";
import PasswordManager from "../../assets/Password Manager.png";
import Ecommerce from "../../assets/E-Commerce.png";

import "./Project.css";
const Project = () => {
  return (
    <div id="projects" className="Projects">
      <div className="project-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="Project-group">
        <div className="Project-Nav">
          <h1>Password Manager :-</h1>
          <div className="Project-Nava">
            <img src={PasswordManager} alt="" />
            <div className="Project-Desc">
              <p>
                Build a secure and user-friendly password manager website that
                allows users to generate, store, and manage their passwords in a
                safe and organized manner. The site should emphasize security,
                ease of use, and accessibility across different devices.
              </p>
              <p>Technical Requirements:</p>
              <p>HTML TailwindCSS ReactJS NodeJS ExpressJS and MongoDB</p>
            </div>
          </div>
        </div>
        <div className="Project-Nav">
          <h1>E-Commerce :-</h1>
          <div className="Project-Nava">
            <img src={Ecommerce} alt="" />
            <div className="Project-Desc">
              <p>
                This project is an e-commerce web application developed using
                the MERN stack. The platform allows users to browse products,
                add them to their cart, and purchase online. Admin users can
                manage inventory, add new products, and monitor orders.
              </p>
              <p>Technical Requirements:</p>
              <p>HTML TailwindCSS ReactJS NodeJS ExpressJS and MongoDB</p>
            </div>
          </div>
        </div>
        <div className="Project-Nav">
          <h1>Todo List :-</h1>
          <div className="Project-Nava">
            <img src={TodoList} alt="" />
            <div className="Project-Desc">
              <p>
                This project is a simple and intuitive To-Do List application
                developed using React.js. It allows users to manage their daily
                tasks efficiently by adding, updating, and deleting tasks.
              </p>
              <p>Technical Requirements:</p>
              <p>HTML TailwindCSS ReactJS NodeJS ExpressJS and MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
