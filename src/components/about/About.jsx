import React from 'react'
import './about.css'
import ME from '../../assets/personal pic.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsPatchCheckFill} from 'react-icons/bs'

import { useState } from 'react'

const About = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="container personal_info__container">
                <div className="skills__database">
                    <h3>Personal Information</h3>
                    <div className="personal_info_content">
                        <article className='skills_details'>
                            <BsPatchCheckFill className='skills_details-icon'/>
                            <h4>Father's Name - Md. Anwar Hossen</h4>
                        </article>
                        <article className='skills_details'>
                            <BsPatchCheckFill className='skills_details-icon'/> 
                            <h4>Mother's Name - Rashida Parvin</h4>
                        </article>
                        <article className='skills_details'>
                            <BsPatchCheckFill className='skills_details-icon'/>
                            <h4>Date of Birth - 05/12/1998</h4>
                        </article>
                        <article className='skills_details'>
                            <BsPatchCheckFill className='skills_details-icon'/>
                            <h4>Religion - Islam</h4>
                        </article>
                        <article className='skills_details'>
                            <BsPatchCheckFill className='skills_details-icon'/>
                            <h4>Nationality - Bangladeshi</h4>
                        </article>
                    </div>
                </div>

                {/* =========================== End of Database Management ======================= */}
                
            </div>

            
            <div className="about__content">      
                <div className="about__cards">
                    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Work Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                    </a>
                    

                    {/* <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Experience</h5>
                        <small>1+ Year Working</small>
                    </article> */}
                    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </a>
                    
                </div>

                <p className='content_justification'>I aspire to thrive in the field of software engineering by fusing my professional experience and educational qualifications. I am a passionate professional software engineer. With ongoing learning and dedication, I constantly attempt to put my excellent interpersonal abilities, as well as my communication, teamwork, and leadership skills, into practice to help the company accomplish its objectives.</p>
            
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
