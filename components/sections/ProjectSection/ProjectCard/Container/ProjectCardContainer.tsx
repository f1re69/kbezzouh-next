import React from "react";
import ProjectCardPresentation from "../Presentation/ProjectCardPresentation";
import { projects } from "./../../projects";

const ProjectCardContainer: React.FC = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCardPresentation key={index} project={project} />
      ))}
    </>
  );
};

export default ProjectCardContainer;
