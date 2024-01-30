import Head from "next/head";
import GlobalStyle from "../styles/global";
import Header from "../components/sections/Header/Container/HeaderContainer";
import MainSection from "../components/sections/MainSection/MainSectionContainer";
import CertificationsSection from "../components/sections/CertificationsSection/Container/CertificationsSectionContainer";
import ProjectsSection from "../components/sections/ProjectSection/Container/ProjectsSectionContainer";
import ContactSection from "../components/sections/ContactSection/Container/ContactSectionContainer";
import Footer from "../components/sections/Footer";
import GlobalContext from "../components/context/GlobalContext";
import { useRef } from "react";
import AboutSectionContainer from "../components/sections/AboutSection/Container/AboutSectionContainer";

export default function Home() {
  const globalContext = {
    mainSectionRef: useRef<HTMLElement>(null),
    aboutSectionRef: useRef<HTMLElement>(null),
    certificationsSectionRef: useRef<HTMLElement>(null),
    projectSectionRef: useRef<HTMLElement>(null),
    contactSectionRef: useRef<HTMLElement>(null),
  };

  return (
    <GlobalContext.Provider value={{ ...globalContext }}>
      <GlobalStyle />
      <Head>
        <title>Développeur Fullstack Junior</title>
        <meta
          name="description"
          content="My name is Khelil Bezzouh, i'm french Fullstack web-developper React.js, JavaScript, TypeScript, ASP, ASP.NET, .NET, C#, PHP, Node.js."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page">
        <div id="content-page">
          <Header />
          <MainSection />
          <AboutSectionContainer />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
