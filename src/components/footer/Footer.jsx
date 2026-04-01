import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Provide a valid href for the logo */}
      <a href="#top" className='footer__logo'>Eno_Africa</a>

      <ul className='permalinks'>
        {/* Make all internal links point to real section IDs */}
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/enock-sk" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/ItsEnokoo" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/enock-sk" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Eno_Africa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;