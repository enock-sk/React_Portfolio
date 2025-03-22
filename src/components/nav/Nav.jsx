import React, { useState, useEffect } from "react";
import "./nav.css";
import { FaHome, FaTools } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiKnowledgebase } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#about", "#experience", "#services", "#portfolio", "#contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const sectionElement = document.querySelector(section);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          setActiveNav(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav role="navigation">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Home"
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
      >
        <CgProfile />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Experience"
      >
        <SiKnowledgebase />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="Services"
      >
        <GrServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Portfolio"
      >
        <FaTools />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
