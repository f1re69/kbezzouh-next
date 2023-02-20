import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";

const MainSection: React.FC = () => {
  const { MainSectionRef } = useContext(RefsContext);

  return (
    <section id="main" ref={MainSectionRef}>
      <div className="inner">
        <h1>Khelil Bezzouh</h1>
        <h2>Développeur Junior</h2>
        <a href="#anchor-about">
          <i className="fas fa-chevron-down fa-lg"></i>
        </a>
      </div>
    </section>
  );
};

export default MainSection;
