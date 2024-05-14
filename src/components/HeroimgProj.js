import "./HeroimgProjStyles.css"
import Projimg from "../assets/projectBG.jpg"

import React, { Component } from 'react'

class HeroimgProj extends Component {
    render() {
        return (
            <div className="Hero-img">
                <img className="proj-img" src={Projimg} alt="Introimg" />
                <div className="Heading">
                    <h1>Projects</h1>
                    <p>Here is some of my Recent Works</p>
                </div>
            </div>
        )
    }

}

export default HeroimgProj