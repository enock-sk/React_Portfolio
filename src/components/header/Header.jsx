import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/linkedin_profile.png'
import HeaderSocials from './HeaderSocials'
// import CV from '../../assets/cv.pdf'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Enock Kiplangat</h1>
        <h5 className='text-light'>Software Developer and a Cyber Security Analyst</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header