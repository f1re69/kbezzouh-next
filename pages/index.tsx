import Head from "next/head";
import GlobalStyle from "../styles/global";
import Header from "../components/sections/Header";
import MainSection from "../components/sections/MainSection";
import AboutSection from "../components/sections/AboutSection";
import CertificationsSection from "../components/sections/CertificationsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";
import RefsContext from "../components/context/RefsContext";
import { useRef } from "react";

export default function Home() {
  const refsContext = {
    MainSectionRef: useRef<HTMLElement>(null),
    aboutSectionRef: useRef<HTMLElement>(null),
    certificationsSectionRef: useRef<HTMLElement>(null),
    ProjectSectionRef: useRef<HTMLElement>(null),
    ContactSectionRef: useRef<HTMLElement>(null),
  };

  return (
    <RefsContext.Provider value={{ ...refsContext }}>
      <GlobalStyle />
      <Head>
        <title>Khelil Bezzouh Développeur Junior - Portfolio</title>
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
          <AboutSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </RefsContext.Provider>
  );
}
