import React from 'react'
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
<div className="experience__frontend">
  <h3>Frontend Development</h3>
  <div className="experience__content">
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
<h4>HTML</h4>
<small className='text-light'>Experience</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
<h4>REACT</h4>
<small className='text-light'>Experienced</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
<h4>Javascript</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>CSS</h4>
<small className='text-light'>Experienced</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>Tailwind</h4>
<small className='text-light'>Experience</small>
</div>
    </article>
</div>
  </div>
  {/* =====END OF FRONTEND==== */}
  <div className="experience__backend">
  <h3>Backend Development</h3>
  <div className="experience__content">
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>Node js</h4>
<small className='text-light'>Experience</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>PHP</h4>
<small className='text-light'>Experienced</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>Java</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>Django</h4>
<small className='text-light'>Experienced</small>
</div>
    </article>
    <article className='experience__details'>
<FaCircleCheck className="experience__details-icons"/>
<div>
  <h4>PostGreSql</h4>
<small className='text-light'>Experience</small>
</div>
    </article>
</div>
  </div>        
      </div>
    </section>
  )
}

export default Experience