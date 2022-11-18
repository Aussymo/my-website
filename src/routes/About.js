import React from "react"

import "../Styles/Hero.css"
import camping from "../assets/camping.avif"
import AboutContent from "../components/AboutContent"

const About = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={camping} alt="fire" />
            </div>
            <div className="content">
                <h1>About Me!</h1>
                <p>Coding and Thing I love outside of coding.</p>
            </div>
            <AboutContent />
        </div>
    )
}

export default About
