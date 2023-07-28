import React from "react";
import Image, { StaticImageData } from "next/image";
import { ProjectSectionStyled } from "./ProjectSectionStyled";
import ProjectCardContainer from "../ProjectCard/Container/ProjectCardContainer";

interface ProjectsSectionPresentationProps {
  projectSectionRef: React.RefObject<HTMLElement>;
  projects: {
    image: {
      file: StaticImageData;
      width: number;
      height: number;
      alt: string;
    };
    title: string;
    github: string | undefined;
    livedemo: string | undefined;
  }[];
}

const ProjectsSectionPresentation: React.FC<
  ProjectsSectionPresentationProps
> = ({ projectSectionRef, projects }) => {
  return (
    <ProjectSectionStyled ref={projectSectionRef}>
      <div className="anchor">
        <a id="anchor-projects">&nbsp;</a>
        <h2 className="top-title">Mes projets</h2>
      </div>
      <div className="content">
        <ProjectCardContainer />
      </div>
    </ProjectSectionStyled>
  );
};

export default ProjectsSectionPresentation;
