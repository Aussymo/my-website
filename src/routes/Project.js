import React from "react"
import "../Styles/Hero.css"
import projects from "../assets/projects.avif"
import Work from "../components/Work"

const Project = () => {
    return (
        <div>
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={projects} alt="projects" />
                </div>
                <div className="content">
                    <h1>My Projects</h1>
                    <p>Some of my work</p>
                </div>
            </div>
            <Work />
        </div>
    )
}

export default Project
