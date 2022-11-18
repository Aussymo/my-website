import React from "react"
import "./index.css"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Project from "./routes/Project"


function App() {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
