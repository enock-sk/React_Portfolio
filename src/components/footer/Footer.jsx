import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Eno_Africa</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/enock-sk"><FaGithub /></a>
        <a href="https://twitter.com/ItsEnokoo"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/enock-sk"><FaLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Eno_Africa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer