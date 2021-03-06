import React from "react";
import "./project-card.css";

function projectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <img
                  src="https://img.icons8.com/material-outlined/20/000000/globe--v2.png"
                  alt=""
                />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <img
                  src="https://img.icons8.com/material-outlined/20/000000/github.png"
                  alt=""
                />
                Github
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="" />
    </div>
  );
}

export default projectCard;
