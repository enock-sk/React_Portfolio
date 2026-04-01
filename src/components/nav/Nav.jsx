import React, { useState, useEffect } from "react";
import "./nav.css";
import { FaHome, FaTools } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiKnowledgebase } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#about", "#experience", "#services", "#portfolio", "#contact"];
      const scrollPosition = window.scrollY + 100;

      let currentActive = "#home";
      for (const section of sections) {
        const sectionElement = document.querySelector(section);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          currentActive = section;
        }
      }
      setActiveNav(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    target?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <nav role="navigation">
      {/* Home button */}
      <button
        onClick={() => scrollToSection("#top")}
        className={activeNav === "#home" ? "active" : ""}
        aria-label="Home"
      >
        <FaHome />
      </button>

      {/* Internal section buttons */}
      <button
        onClick={() => scrollToSection("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
      >
        <CgProfile />
      </button>

      <button
        onClick={() => scrollToSection("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Experience"
      >
        <SiKnowledgebase />
      </button>

      <button
        onClick={() => scrollToSection("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="Services"
      >
        <GrServices />
      </button>

      <button
        onClick={() => scrollToSection("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Portfolio"
      >
        <FaTools />
      </button>

      <button
        onClick={() => scrollToSection("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <MdContactPhone />
      </button>
    </nav>
  );
};

export default Nav;