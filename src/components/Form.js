import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import '../Styles/Form.css'

const SERVICE_ID = "service_9wzccfq"
const TEMPLATE_ID = "template_oa8vwfk"
const USER_ID = "vxCL0Au2qXpvkA_8l"

const Form = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
    <div className='form'>
        <form onSubmit={handleOnSubmit}>
            <label>Your Name:</label>
            <input type='text' name='name' required />
            <label>Your Email:</label>
            <input type='email' name='email' required />
            <label>Your Subject:</label>
            <input type='text' name='subject' required />
            <label>Your Message:</label>
            <textarea name='message' rows='6' placeholder='Type Your Message Here' required />
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form