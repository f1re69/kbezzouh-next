import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainSection: React.FC = () => {
  const { mainSectionRef } = useContext(RefsContext);

  return (
    <section id="main" ref={mainSectionRef}>
      <div className="inner">
        <h1>Khelil Bezzouh</h1>
        <h2>Développeur Junior</h2>
        <a href="#anchor-about">
          <FontAwesomeIcon icon={faChevronDown} className="fa-sm" />
        </a>
      </div>
    </section>
  );
};

export default MainSection;
