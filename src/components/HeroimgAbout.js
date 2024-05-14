import "./HeroimgAboutStyles.css";
import aboutimg from "../assets/aboutimg.jpg"
import React, { Component } from 'react'

class HeroimgAbout extends Component {
    render() {
        return (
            <div className="img-about">
                <img className="about-img" src={aboutimg} alt="aboutimg" />
                <div className="Heading">
                    <h1>{this.props.heading1}</h1>
                    <p>{this.props.text1}</p>

                </div>
            </div>
        )
    }

}

export default HeroimgAbout