import React, { useContext, useEffect, useRef } from "react";
import Throttle from "../javascript/Throttle";
import RefsContext from "../../components/context/RefsContext";

const Header: React.FC = () => {
  const sections = Object.values(useContext(RefsContext));
  const mainHeader = useRef<HTMLHeadElement | null>(null);
  const links = useRef<NodeListOf<HTMLLinkElement> | null>(null);

  const onScroll = function (): void {
    scrollHeader();
    changeLinkState();
  };

  const scrollHeader = (): void => {
    const mainSection = sections[0];
    const sticky = mainSection.current.clientHeight / 2;

    if (mainHeader.current) {
      console.log(
        "window.pageYOffset, sticky, mainHeader.current.clientHeight",
        window.pageYOffset,
        sticky,
        mainHeader.current.clientHeight,
      );
      if (
        window.pageYOffset > sticky + mainHeader.current.clientHeight &&
        !mainHeader.current.classList.contains("sticky")
      ) {
        mainHeader.current.classList.add("sticky");
        console.log("add sticky");
      } else if (
        window.pageYOffset <= 0 &&
        mainHeader.current.classList.contains("sticky")
      ) {
        mainHeader.current.classList.remove("sticky");
        console.log("remove sticky");
      }
    }
  };

  const changeLinkState = (): void => {
    const activeSection = sections.find((section) => {
      const { top, bottom } = section.current.getBoundingClientRect();
      return top <= 100 && bottom >= 100;
    });

    if (activeSection) {
      const index = sections.indexOf(activeSection);
      if (links.current) {
        links.current.forEach((link) => link.classList.remove("active"));
        if (index > 0) {
          //first header
          links.current[index - 1].classList.add("active");
          //second header
          links.current[index - 1 + 4].classList.add("active");
        }
      }
    }
  };

  const throttledHandleScroll = Throttle({
    func: onScroll,
    wait: 200,
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    links.current = document.querySelectorAll("nav li.links");
    mainHeader.current = document.getElementById("main-header");
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
