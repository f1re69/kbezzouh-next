import React from "react";

interface HeaderPresentationProps {
  variant: string;
}

const SharedHeaderContent: React.FC<HeaderPresentationProps> = ({
  variant,
}) => {
  const headerClass = `header header-${variant}`;
  return (
    <>
      <div id={variant} className={headerClass}>
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
      <div id="beta" className="header header-beta">
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
    </>
  );
};

export default SharedHeaderContent;
