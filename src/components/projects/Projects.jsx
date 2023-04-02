import React from 'react'
import './projects.css'
import IMG1 from '../../assets/oracle_sql.jpg'
import IMG2 from '../../assets/shop_management_system.png'
import IMG3 from '../../assets/money_donation_distribution_system.jpg'
import IMG4 from '../../assets/parking_management_system.png'
import IMG5 from '../../assets/droptienda.jpg'
import IMG6 from '../../assets/hrms.webp'
import IMG7 from '../../assets/portfolio_website_me.png'
import IMG8 from '../../assets/daily-task_app.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Apartment Management System',
    tools: 'Oracle SQL Database',
    github: 'https://github.com/Aftahiislam007/Database'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Shop Management System',
    tools: 'Java, MySQL Database',
    github: 'https://github.com/Aftahiislam007/java_console_project'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Money Donation Distribution System',
    tools: 'C#, MS SQL Database',
    github: 'https://github.com/Aftahiislam007/C-sharp_project'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Parkori - A Smart Vehicle Parking Management System',
    tools: 'HTML, CSS, Bootstrap, JavaScript, PHP, MySQL Database',
    github: 'https://github.com/Aftahiislam007/web_tech'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Droptienda - An e-commerce website',
    tools: 'HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, MySQL Database',
    github: 'https://bitbucket.org/aftahiislam007/dropteinda_project/src/master/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'HR Management System',
    tools: 'HTML, CSS, Bootstrap, JavaScript, ASP.NET Web API, MS SQL Database',
    github: 'https://github.com/Aftahiislam007/eGen-HRMS'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Personal Portfolio Website',
    tools: 'HTML, CSS, Bootstrap, JavaScript, React JS',
    github: 'https://github.com/Aftahiislam007/portfolio_website'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Daily Task App',
    tools: 'HTML, CSS, Bootstrap, JavaScript, React JS, Django REST API, SQLite Database',
    github: 'https://github.com/Aftahiislam007/daily_task_app'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id,image, title, tools, github}) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4><b>Tools :</b>  {tools}</h4>
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }

        
      </div>
    </section>
  )
}

export default Projects
