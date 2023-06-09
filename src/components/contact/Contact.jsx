import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m8zj1b9', 'template_pr6zq3j', form.current, 'zRapvWzj3Ep3Xzw7j')

    e.target.reset()
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h3>Email</h3>
              <h4>aftahiislam2016@gmail.com</h4>
              <a href="mailto:aftahiislam2016@gmail.com" target='_blank'>Send a mail</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h3>WhatsApp</h3>
              <h4>+8801521439210</h4>
              <a href="https://wa.me/qr/VLDC5HGQP5EDG1" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <BsTelephone className='contact__option-icon' />
              <h3>Contact Number</h3>
              <h4>+8801797341164</h4>
              <a href="tel:+8801797341164" target='_blank'>Call Now</a>
            </article>
          </div>

          {/* =============== End of Contact Options =============== */}
        
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact
