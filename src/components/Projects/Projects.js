import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects_header">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects_desc">
        <p>
          Here, you'll find some of my projects, and a link to my GitHub
          where you can find more of my work.
        </p>
      </div>

        <div className="projects_content">
            <div className="project">
                <div className="project_header">
                    Countrynator
                </div>
                <div className="project_content">
                    <p>
                        Become a geography expert with this fun and interactive game.
                    </p>
                    <div className="project_link">
                        <a href="https://github.com/Ahonanhin/Countrynator"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project_header">
                    A-Course
                </div>
                <div className="project_content">
                    <p>
                        Plan your courses with this course planning tool.
                    </p>
                    <div className="project_link">
                        <a href="https://github.com/adam-badar/Acourse"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project_header">
                    ClassSync
                </div>
                <div className="project_content">
                    <p>
                        The online classroom of the future.
                    </p>
                    <div className="project_link">
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project_header">
                        TableProcessors
                </div>
                <div className="project_content">
                    <p>
                       Keep track of your system's processes with this simple tool.
                    </p>
                    <div className="project_link">
                        <a href="https://www.github.com/Ahonanhin/TableProcessors"><FaGithub /></a>
                    </div>
                </div>
            </div> 
            <div className="project">
                <div className="project_header">
                    Desktop Cleaner
                </div>
                <div className="project_content">
                    <p>
                        Rearrange your files with a single click.
                    </p>
                    <div className="project_link">
                        <a href="https://www.github.com/Ahonanhin/DesktopCleaner"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project_header">
                    Article Classifier
                </div>
                <div className="project_content">
                    <p>
                        Is it a sport article or a politics article? Or both?
                    </p>
                    <div className="project_link">
                        <a href="https://www.github.com/Ahonanhin/NaiveBayes"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
