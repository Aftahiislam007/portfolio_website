import React from 'react'
import './certificates.css'

import IMG1 from '../../assets/python.png'
import IMG2 from '../../assets/intro to ML.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Python (Kaggle's 30 Days ML Program)",
    drive: 'https://drive.google.com/file/d/19SA8iUD1EVLlYFWz_NxzaKbmyt0RdNfJ/view'
  },
  {
    id: 2,
    image: IMG2,
    title: "Intro to Machine Learning (Kaggle's 30 Days ML Program)",
    drive: 'https://drive.google.com/file/d/1H5ETl8KAKKv6CKAEcd4LXWhc7X3_gGt5/view'
  }
]


const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>What I Achieved</h5>
      <h2>Professional Certificates</h2>

      <div className="container certificates__container">
        {
          data.map(({id,image, title, drive}) => {
            return (
              <article key={id} className="certificates__item">
                <div className="certificates__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="certificates__item-cta">
                  <a href={drive} className='btn' target='_blank'>Certificate Pic</a>
                </div>
              </article>
            )
          })
        }

        
      </div>
    </section>
  )
}

export default Certificates
