import "./workcardStyles.css";
import React from 'react'
import projectcard1 from "../assets/projectcard1.jpg";
import projectcard2 from "../assets/projectcard2.jpg";
import { NavLink } from "react-router-dom";

const workcard = () => {
  return (
    <div className="work-container">

      <div className="project-container">
        <div className="project-card">
          <img src={projectcard1} alt="image123" />
          <h2 className="project-title">Portfolio using React</h2>
          <div className="pro-details">
            <p>
              Personal Portfolio Website Project using the React.js
            </p>
            <div className="pro-btns">
              <NavLink to="https://github.com/Bhumin26" className="btn" target="_blank">Source Code</NavLink>
            </div>
          </div>
        </div>

      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={projectcard2} alt="image123" />
          <h2 className="project-title">LinkedIn Clone Web Application</h2>
          <div className="pro-details">
            <p>
              LinkedIn Clone Web Application using HTML, CSS, JavaScript
            </p>
            <div className="pro-btns">
              <NavLink to="https://github.com/Bhumin26" className="btn" target="_blank">Source Code</NavLink>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default workcard