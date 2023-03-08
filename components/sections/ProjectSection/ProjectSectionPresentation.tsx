import React from "react";
import Image, { StaticImageData } from "next/image";

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
    <section id="projects" ref={projectSectionRef}>
      <div className="anchor">
        <a id="anchor-projects">&nbsp;</a>
        <h2 className="top-title">Mes projets</h2>
      </div>

      <div className="content">
        {projects.map((project, index) => (
          <div key={index} className="square streamy">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSectionPresentation;
