import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/daily.png'
import IMG2 from '../../assets/movie.png'
import IMG3 from '../../assets/portfolio_2.jpg'
import IMG5 from '../../assets/portfolio_4.jpg'
import IMG6 from '../../assets/portfolioo.png'
const data=[
  {
    id:1,
    image:IMG1,
    title: 'Daily Wallpapers Android App',
    github: 'https://github.com/enock-sk/DailyWallpapers',
    demo: 'https://drive.google.com/file/d/191XUOmwYVVkDzvQa5ucYT0m30sM4CbXv/view?usp=sharing'
  },
  {
    id:2,
    image:IMG2,
    title: 'My Favourite Movie Website in React-Allow Users to Fetch their Favourite Movies',
    github: 'https://github.com/enock-sk',
    demo: 'https://favmovie-psi.vercel.app/'
  },
  {
    id:3,
    image:IMG3,
    title: 'JobSpark Django REST API/ Backend',
    github: 'https://github.com/enock-sk',
    demo: 'https://jobspark-backend.onrender.com/api/jobs/'
  },
  {
    id:4,
    image:IMG6,
    title: 'Portfolio Website',
    github: 'https://github.com/enock-sk',
    demo: 'mrsang.vercel.app'
  },
  {
    id:5,
    image:IMG5,
    title: 'Shoe Ecommerce Mobile APP in Flutter',
    github: 'https://github.com/enock-sk',
    demo: 'http'
  },
  {
    id:6,
    image:IMG5,
    title: 'Student Springboot REST API',
    github: 'https://github.com',
    demo: 'http'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio