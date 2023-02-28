import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";
import Image from "next/image";

const ProjectsSection: React.FC = () => {
  const { ProjectSectionRef } = useContext(RefsContext);

  return (
    <section id="projects" ref={ProjectSectionRef}>
      <div className="anchor">
        <a className="anchor-projects">&nbsp;</a>
        <h2 className="top-title">Mes projets</h2>
      </div>

      <div className="content">
        <div className="square streamy">
          <div className="container">
            <Image
              src="/logos/projects/streamy.jpg"
              width={300}
              height={300}
              alt="Streamy"
            />
            <div className="overlay">
              <h3>Projet Streamy</h3>
              <a
                href="https://github.com/f1re69/Streamy"
                className="button overlay"
                target="_blank"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
        <div className="square streamy">
          <div className="container">
            <Image
              src="/logos/projects/natura.jpg"
              width={300}
              height={300}
              alt="Natura"
            />
            <div className="overlay">
              <h3>Projet Natura</h3>
              <a
                href="https://github.com/f1re69/Natura"
                className="button overlay"
                target="_blank"
              >
                View on Github
              </a>
              <a
                href="https://natura.now.sh/"
                className="button overlay"
                target="_blank"
              >
                View live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
