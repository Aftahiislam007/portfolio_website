import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>

        <div className="container skills__container">
          <div className="skills__database">
            <h3>Database Management</h3>
            <div className="skills__content">
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>Oracle SQL</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>My SQL</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>MS SQL</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>SQLite</h4>
              </article>
            </div>
          </div>

          {/* =========================== End of Database Management ======================= */}
          
          <div className="skills__languages">
            <h3>Programming Languages</h3>
            <div className="skills__content">
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>C</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>C++</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>Java</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>C#</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>HTML</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>CSS</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>PHP</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>JavaScript</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>Python</h4>
              </article>
            </div>
          </div>

          {/* =========================== End of Programming Languages ======================= */}

          <div className="skills__language__frameworks">
            <h3>Programming Language Frameworks</h3>
            <div className="skills__content">
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>(Frontend)</small>
                </div>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>(Frontend)</small>
                </div>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>Laravel</h4>
                  <small className='text-light'>(Backend)</small>
                </div>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>ASP.NET MVC Core</h4>
                  <small className='text-light'>(Backend)</small>
                </div>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>ASP.NET Web API</h4>
                  <small className='text-light'>(Backend)</small>
                </div>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>(Backend)</small>
                </div>
              </article>
            </div>
          </div>

          {/* =========================== End of Programming Language Frameworks ======================= */}

          <div className="skills__language__libraries">
            <h3>Programming Language Libraries</h3>
            <div className="skills__content">
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>NumPy</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>Pandas</h4>
              </article>
              <article className='skills_details'>
                <BsPatchCheckFill className='skills_details-icon'/>
                <h4>Matplotlib</h4>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
