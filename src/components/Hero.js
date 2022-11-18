import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Hero.css'
import Dev from '../assets/Dev.avif'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={Dev} alt='dev' />
        </div>
        <div className='content'>
            <p>Hello World, I'M Austin A</p>
            <h1>Full-Stack Developer</h1>
            <div>
                <Link to='/Project' className='btn'>Projects</Link>
                <Link to='/Contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero