import React from "react";
import "./Footer.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

export default function Footer() {
    return (
    <div className="footer">
        <a href="https://www.github.com/Ahonanhin">< FaGithub /></a>
        <a href="https://www.linkedin.com/in/yann-gbaguidi-0531b9189/">< FaLinkedin /></a> 
        <a href="mailto:yannjgbaguidi@gmail.com">< FaEnvelope /></a>
       <a href="https://dev.to/ahonanhin">< FaDev /></a>
       <div className="footer_text">
       © Copyright 2024. Made by <a href="https://www.ahonanhin.com">Yann Gbaguidi</a>.
       </div>
    </div>
    );
}
    