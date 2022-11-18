import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    const handleClick = () => setHamburger(!hamburger)

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'>
            <h1>Austin Reed</h1>
        </Link>
        <ul className={hamburger ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
            <li>
                <Link to='/Project'>Projects</Link>
            </li>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {hamburger ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
        </div>
    </div>
  )
}

export default Navbar