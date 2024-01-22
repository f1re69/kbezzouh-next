import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MainSectionProps {
  mainSectionRef: React.RefObject<HTMLElement>;
}

const MainSectionPresentation: React.FC<MainSectionProps> = ({
  mainSectionRef,
}) => {
  return (
    <section id="main" ref={mainSectionRef}>
      <div className="inner">
        <h1>Khelil Bezzouh</h1>
        <h2>Développeur Fullstack Junior</h2>
        <a href="#anchor-about">
          <FontAwesomeIcon icon={faChevronDown} className="fa-sm" />
        </a>
      </div>
    </section>
  );
};

export default MainSectionPresentation;
