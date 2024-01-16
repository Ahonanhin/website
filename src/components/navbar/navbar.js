import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import "./navbar.css";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="nav_bar">
      <div className="navbar_container">
        <div className="navbar_logo">
          <a href="#intro">Yann Gbaguidi</a>
        </div>
        <div className={`navbar_links ${isMobileNavOpen ? "open" : ""}`}>
          <a href="/Resume.pdf" target="_blank">
            RESUME
          </a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contacts">CONTACT</a>
        </div>
        <div className="navbar_more" onClick={toggleMobileNav}>
          <div className="menu-icon">
            <MdOutlineMoreVert />
          </div>
          <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
            <a href="/Resume.pdf" target="_blank">
              RESUME
            </a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contacts">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
