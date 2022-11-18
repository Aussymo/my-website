import React from 'react'
import Form from '../components/Form'

import Contact1 from '../assets/Contact.avif'

const Contact = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={Contact1} alt="img" />
    </div>
    <div className="content">
        <h1>Contact!</h1>
        <p>Want to Get a hold of me?</p>
    </div>
      <Form />
    </div>
  )
}

export default Contact