import React, { useContext } from "react";
import RefsContext from "../../context/RefsContext";
import ProjectsSectionPresentation from "./ProjectSectionPresentation";
import { projects } from "./projects";

const ProjectsSection: React.FC = () => {
  const { projectSectionRef } = useContext(RefsContext);

  return (
    <ProjectsSectionPresentation
      projects={projects}
      projectSectionRef={projectSectionRef}
    />
  );
};

export default ProjectsSection;
