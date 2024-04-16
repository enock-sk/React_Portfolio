import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiKnowledgebase } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { useState } from 'react';
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav === '#'? 'active' : ''}><FaHome /></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile /></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><SiKnowledgebase /></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GrServices/></a>
    <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaTools /></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
   </nav>
  )
}

export default Nav