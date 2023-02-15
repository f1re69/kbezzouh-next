import React, { createContext } from "react";

interface IRefs {
	aboutSectionRef: React.RefObject<HTMLElement>;
	certificationsSectionRef: React.RefObject<HTMLElement>;
	ContactSectionRef: React.RefObject<HTMLElement>;
	MainSectionRef: React.RefObject<HTMLElement>;
	ProjectSectionRef: React.RefObject<HTMLElement>;
}

export const RefsContext = createContext<IRefs>({
	aboutSectionRef: React.createRef<HTMLElement>(),
	certificationsSectionRef: React.createRef<HTMLElement>(),
	ContactSectionRef: React.createRef<HTMLElement>(),
	MainSectionRef: React.createRef<HTMLElement>(),
	ProjectSectionRef: React.createRef<HTMLElement>(),
});

export default RefsContext;
