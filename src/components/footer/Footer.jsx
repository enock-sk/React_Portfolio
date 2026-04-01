import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll handler for internal links
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Logo as a button for accessibility */}
      <button 
        className='footer__logo' 
        onClick={(e) => handleScroll(e, '#top')}
        aria-label="Scroll to top"
      >
        Eno_Africa
      </button>

      <ul className='permalinks'>
        <li>
          <button onClick={(e) => handleScroll(e, '#top')}>Home</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#about')}>About</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#experience')}>Experience</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#services')}>Services</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#testimonials')}>Testimonials</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, '#contact')}>Contact</button>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/enock-sk" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/ItsEnokoo" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/enock-sk" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;  Eno_Africa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;