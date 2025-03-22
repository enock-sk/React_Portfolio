import React from 'react'
import './about.css'
import ME from '../../assets/linkedin_profile.png'
import { LiaBuromobelexperte } from "react-icons/lia";
import { MdFolderZip } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
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
  <article className="about__card">
  <LiaBuromobelexperte className='about__icon' />
    <h5>Experience</h5>
    <small>3+ Years Working</small>
  </article>

  <article className="about__card">
  <FaUsers className='about__icon' />
    <h5>Clients</h5>
    <small>150+ Worldwide</small>
  </article>

  <article className="about__card">
  <MdFolderZip className='about__icon' />
    <h5>Projects</h5>
    <small>80+ completed</small>
  </article>
</div>
<p>Software developer with over 3 years of experience in the field. My passion for coding started early. I'm always on the lookout for new technologies and approaches that can help me build better software. My expertise lies in developing scalable, efficient, and reliable software applications. I have experience working with a range of programming languages, including Java, Python, and C. I enjoy collaborating with teams to solve complex problems and deliver high-quality software that meets user needs. I'm a strong believer in clean code, testing, and continuous integration and I'm always looking for ways to improve my skills and knowledge. When I'm not coding, you'll likely find me playing console games or solving complex Mathematics related tasks. If you're interested in working with me don't hesitate to get in touch!</p>
 <a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>
</div>
    </section>
  )
}

export default About