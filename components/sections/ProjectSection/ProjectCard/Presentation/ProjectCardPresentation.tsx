import React from "react";
import { ProjectCardStyled } from "./ProjectCardStyled";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  project: {
    image: {
      file: StaticImageData;
      width: number;
      height: number;
      alt: string;
    };
    title: string;
    github: string | undefined;
    livedemo: string | undefined;
  };
}

const ProjectCardPresentation: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ProjectCardStyled className="square streamy">
      <div className="container">
        <Image
          src={project.image.file}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
        ></Image>
        <div className="overlay">
          <h3>{project.title}</h3>
          {project.github ? (
            <a
              href={project.github}
              className="button overlay"
              target="_blank"
              rel="noreferrer"
            >
              View on Github
            </a>
          ) : (
            <></>
          )}
          {project.livedemo ? (
            <a
              href={project.livedemo}
              className="button overlay"
              target="_blank"
              rel="noreferrer"
            >
              View live demo
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </ProjectCardStyled>
  );
};

export default ProjectCardPresentation;
