import React from 'react'
import './about.css'
import ME from '../../assets/aftahi.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Work Experience</h5>
                        <small>1+ Year Working</small>
                    </article>

                    {/* <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Experience</h5>
                        <small>1+ Year Working</small>
                    </article> */}

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>5+ Completed</small>
                    </article>
                </div>

                <p>I aspire to thrive in the field of software engineering by fusing my professional experience and educational qualifications. I am a passionate professional software engineer. With ongoing learning and dedication, I constantly attempt to put my excellent interpersonal abilities, as well as my communication, teamwork, and leadership skills, into practice to help the company accomplish its objectives.</p>
            
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
