import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Mohammed Aftahi Islam</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Work Experiences</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Professional Certificates</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; This is my portfolio website. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
