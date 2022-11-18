import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4><FaHome size={20} style={{color: '#fff', marginRight: '2rem'}} /> Clinton, Utah</h4>
                </div> 
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} /> 801-425-8464</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} /> Aussymo@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                    <a href='https://www.facebook.com/austin.reed.3158652'><FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} /></a> 
                    <a href='https://www.linkedin.com/in/austin-reed0824/'><FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} /></a> 
                    <a href='https://www.instagram.com/aussy_mo/'><FaInstagram size={30} style={{color: '#fff', marginRight: '1rem'}} /></a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer