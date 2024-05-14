import { FaDiscord, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left-footer">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div> <p> Pune , Maharashtra</p>

                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "green", marginRight: "2rem" }} />
                            + 91 63xxxxx92
                        </h4>

                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            bhumin2612@gmail.com
                        </h4>

                    </div>
                </div>

                <div className="right-footer">
                    <h4> Social Links : </h4>
                    <div className="social">
                        <NavLink to="https://github.com/Bhumin26" target="_blank" ><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
                        <NavLink to="https://www.linkedin.com/in/bhuminpathak/" target="_blank"><FaLinkedin size={30} style={{ color: "#0A66C2", marginRight: "1rem" }} /></NavLink>
                        <NavLink to="https://www.instagram.com/sinfull.soull/" target="_blank" ><FaInstagram size={30} style={{ color: "#E4405F", marginRight: "1rem" }} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer