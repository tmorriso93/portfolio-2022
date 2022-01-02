import React from "react";
import "./projects.css";
import { ProjectData } from "../../common/data/projects";
import ProjectCard from "./project-card";
import Separator from "../../common/separator";

export default function Projects() {
  const data = ProjectData;

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}
