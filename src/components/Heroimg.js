import "./HeroimgStyles.css";

import React from 'react'
import Introimg2 from "../assets/introimg2.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg2} alt="Introimg" />
      </div>

      <div className="content">
        <p> Hi , I'm Full Stack Web Developer</p>
        <h1> Bhumin Pathak</h1>

        <div>
          <Link to="/project" className="btn">Projects</Link>

          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

      </div>

    </div>
  )
}

export default Heroimg