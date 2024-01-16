import React from "react";
import "./About.css";

export default function About() {
    return (
        <>
            <div className="about">
                <div className="about_header">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="about_desc">
                    <p>
                    Here, you'll know more about me, my skills, and my interests 
                    in terms of technology and other things.
                    </p>
                </div>
                <div className="about_content">
                    <div className="me">
                        <div className="me_header">
                            WHO AM I?
                        </div>
                        <div className="me_content">
                            <p>
                            My name is Yann Gbaguidi, and I am a Computer Science
                            student at the University of Toronto, specializing in
                            software engineering. Check some of my work in the projects section
                            and on GitHub.
                            </p>

                            <p>
                            I also recently started writing content related to my hobbies, and
                            other things I find interesting. Hopefully, I'll have posted my
                            first article by the time you check out my website. In the meantime,
                            feel free to connect with me on LinkedIn, or send me an email.
                            </p>

                            <p>
                                I'm open to new opportunities where I can contribute , learn, and
                                grow. If you think I'd be a good fit for your team, please reach out!
                            </p>

                            <div className="me_button">
                                <a href="#contacts">CONTACT</a>
                            </div>                           
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skills_header">
                            MY SKILLS
                        </div>
                        <div className="skills_content">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>Cloud Essentials</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>SEO</li>  
                            <li>Machine Learning</li>
                            <li>Linux</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};