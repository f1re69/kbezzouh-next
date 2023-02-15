import React, { useContext, useEffect, useRef } from "react";
import Throttle from "../javascript/Throttle";
import RefsContext from "../../components/context/RefsContext";

const Header: React.FC = () => {
  const refs = Object.values(useContext(RefsContext));

  let mainHeader = useRef<HTMLDivElement>(null);
  const links = useRef<NodeListOf<HTMLLinkElement>>(null);
  const mainSections = useRef<HTMLElement[]>([]);

  const onScroll = function (): void {
    console.log("refs : ", refs);
    scrollHeader();
    changeLinkState();
  };

  const scrollHeader = (): void => {
    const header = mainHeader.current;
    if (header) {
      if (
        window.pageYOffset > header.clientHeight / 2 + header.clientHeight &&
        !header.classList.contains("sticky")
      ) {
        header.classList.add("sticky");
        console.log("add sticky");
      } else if (
        window.pageYOffset <= 0 &&
        header.classList.contains("sticky")
      ) {
        header.classList.remove("sticky");
        console.log("remove sticky");
      }
    }
  };

  const changeLinkState = (): void => {
    const sections = mainSections.current;
    console.log(sections);

    const activeSection = sections.find((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      return top <= 100 && bottom >= 100;
    });

    if (activeSection) {
      const index = sections.indexOf(activeSection);
    }
  };

  const throttledHandleScroll = Throttle({
    func: onScroll,
    wait: 200,
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      throttledHandleScroll?.props.throttledFunction();
    });
    return () => {
      window.removeEventListener(
        "scroll",
        throttledHandleScroll?.props.throttledFunction,
      );
    };
  }, []);

  return (
    <header id="main-header" className="sticky" ref={mainHeader}>
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

export default Header;
