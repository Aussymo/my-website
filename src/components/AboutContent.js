import '../Styles/About.css'
import React from 'react'

import Resume from '../assets/resume.pdf'
import Node from '../assets/Node.png'
import Reac from '../assets/React.png'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who I am.</h1>
            <p>I am a Full-Stack developer that specializes in React and Node stacks. For more details on my skill sets download my resume below.</p>
            <br />
            <a href={Resume} className="btn">Resume</a>
            <br />
            <h1>What I Like To Do?</h1>
            <p>*Playing with my 3 beautiful daughters</p>
            <p>*Playing Competitve Softball</p>
            <p>*Weight-Lifting</p>
            <p>*Playing Video Games</p>
            <p>*Going Camping</p>
            <p>*Smoking Food</p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Reac} alt='React Icon' className='img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={Node} alt='Node Icon' className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent