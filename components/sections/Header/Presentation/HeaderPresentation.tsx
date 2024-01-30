import React from "react";
import SharedHeaderContent from "./SharedHeaderContent";

interface HeaderPresentationProps {
  headerRef: React.RefObject<HTMLHeadElement>;
}

const HeaderPresentation: React.FC<HeaderPresentationProps> = ({
  headerRef,
}) => {
  return (
    <header id="main-header" className="" ref={headerRef}>
      <SharedHeaderContent variant="alpha" />
      <SharedHeaderContent variant="beta" />
    </header>
  );
};

export default HeaderPresentation;
