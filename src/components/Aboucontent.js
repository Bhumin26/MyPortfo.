import { Link } from "react-router-dom";
import "./AboucontentStyles.css";
import webd from "../assets/web.jpeg"

import React from 'react'

const Aboucontent = () => {
  return (
    <div className="about">
      <div className="left">
          <h1>Who am I?</h1>
          <p>Hey there I'm Bhumin Pathak ✌️</p>
          <p>I'm an Undergraduate Student at Symbiosis Institute of Technology, Pune.
                        I am passionate about building robust and scalable web applications, and I've dedicated myself to constantly enhancing my skills and expertise in both frontend and backend development. Each project in my portfolio demonstrates my proficiency in coding, problem-solving, and creating user-friendly interfaces. Thank you for visiting, and I'm excited about the opportunity to collaborate and create innovative solutions together! </p>
          <Link to = "/contact">
            <button className="btn">Contact</button>
          </Link>
      </div>
      <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src = {webd} className="img" alt="true"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboucontent

