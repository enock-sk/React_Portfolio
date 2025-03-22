import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<a href="https://www.linkedin.com/in/enock-sk"target='blank'><FaLinkedin /></a>
<a href="https://twitter.com/ItsEnokoo"target='blank'><FaTwitter /></a>
<a href="https://github.com/enock-sk"target='blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials