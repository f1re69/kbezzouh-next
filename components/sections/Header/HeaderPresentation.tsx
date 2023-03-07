import React from "react";

interface HeaderPresentationProps {
  headerRef: React.RefObject<HTMLHeadElement>;
}

const HeaderPresentation: React.FC<HeaderPresentationProps> = ({
  headerRef,
}) => {
  return (
    <header id="main-header" className="" ref={headerRef}>
      <div id="alpha" className="header header-alpha">
        <h1>Khelil Bezzouh</h1>
        <nav role="navigation">
          <ul>
            <li className="links">
              <a href="#anchor-about">A propos</a>
            </li>
            <li className="links">
              <a href="#anchor-degree">Diplômes</a>
            </li>
            <li className="links">
              <a href="#anchor-projects">Portfolio</a>
            </li>
            <li className="links">
              <a href="#anchor-contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header header-beta">
        <h1>Khelil Bezzouh</h1>
        <nav role="navigation">
          <ul>
            <li className="links">
              <a href="#anchor-about">A propos</a>
            </li>
            <li className="links">
              <a href="#anchor-degree">Diplômes</a>
            </li>
            <li className="links">
              <a href="#anchor-projects">Portfolio</a>
            </li>
            <li className="links">
              <a href="#anchor-contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPresentation;
