import React from 'react'
import './experience.css'
import {BiCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What I Served In Company</h5>
        <h2>Work Experience</h2>

        <div className="container experience__container">
          <article className='experience'>
            <div className="experience__head">
              <h3><b>Trainee Software Engineer</b></h3>
              <h5>eGeneration Ltd.</h5>
            </div>

            <ul className='experience__list'>
              <h4><b>Duration :</b>  July 01, 2022 - Present</h4><br />
              <h4><b><i>Job Responsibilities :</i></b></h4><br />
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Learn Software application development, especially in .NET language, ASP.NET Core Web API, and Entity Framework.</p>
              </li>
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Understand and develop the technical interfaces, specifications, and architecture.</p>
              </li>
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Learn and check codes to detect and remedy errors and omissions.</p>
              </li>
            </ul>
          </article>

          {/* ======================= End of 1st Job ===================== */}

          <article className='experience'>
            <div className="experience__head">
              <h3><b>Software Engineer (Intern)</b></h3>
              <h5>Luminous Labs</h5>
            </div>

            <ul className='experience__list'>
              <h4><b>Duration :</b>  March 06, 2022 - April 30, 2022</h4><br />
              <h4><b><i>Job Responsibilities :</i></b></h4><br />
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Making Microweber modules.</p>
              </li>
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Doing CRUD operations and fixing software bugs.</p>
              </li>
            </ul>
          </article>

          {/* ======================= End of 2nd Job ===================== */}

          <article className='experience'>
            <div className="experience__head">
              <h3><b>Software Quality Assurance Engineer (Intern)</b></h3>
              <h5>Olivine Limited</h5>
            </div>

            <ul className='experience__list'>
              <h4><b>Duration :</b>  February 02, 2021 - April 15, 2021</h4><br />
              <h4><b><i>Job Responsibilities :</i></b></h4><br />
              <li>
                <BiCheck className='experience__list-icon'/>
                <p>Designing Object-Oriented Analysis and Design models and making the test case of software and writing the various types of documentation.</p>
              </li>
            </ul>
          </article>

          {/* ======================= End of 3rd Job ===================== */}
        </div>
    </section>
  )
}

export default Experience
