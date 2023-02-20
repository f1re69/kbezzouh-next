import React, { createContext } from "react";

interface IRefs {
  MainSectionRef: React.RefObject<HTMLElement>;
  aboutSectionRef: React.RefObject<HTMLElement>;
  certificationsSectionRef: React.RefObject<HTMLElement>;
  ProjectSectionRef: React.RefObject<HTMLElement>;
  ContactSectionRef: React.RefObject<HTMLElement>;
}

export const RefsContext = createContext<IRefs>({
  MainSectionRef: React.createRef<HTMLElement>(),
  aboutSectionRef: React.createRef<HTMLElement>(),
  certificationsSectionRef: React.createRef<HTMLElement>(),
  ProjectSectionRef: React.createRef<HTMLElement>(),
  ContactSectionRef: React.createRef<HTMLElement>(),
});

export default RefsContext;
