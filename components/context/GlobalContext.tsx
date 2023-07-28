import React, { createContext } from "react";

interface IRefs {
  mainSectionRef: React.RefObject<HTMLElement>;
  aboutSectionRef: React.RefObject<HTMLElement>;
  certificationsSectionRef: React.RefObject<HTMLElement>;
  projectSectionRef: React.RefObject<HTMLElement>;
  contactSectionRef: React.RefObject<HTMLElement>;
  response: string;
  setResponse: (response: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext = createContext<IRefs>({
  mainSectionRef: React.createRef<HTMLElement>(),
  aboutSectionRef: React.createRef<HTMLElement>(),
  certificationsSectionRef: React.createRef<HTMLElement>(),
  projectSectionRef: React.createRef<HTMLElement>(),
  contactSectionRef: React.createRef<HTMLElement>(),
  loading: false,
  setLoading: () => {},
  response: "",
  setResponse: () => {},
});

export default GlobalContext;
