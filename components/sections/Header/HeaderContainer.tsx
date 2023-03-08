import React, { useContext, useEffect, useRef } from "react";
import Throttle from "../../javascript/Throttle";
import RefsContext from "../../context/RefsContext";
import HeaderPresentation from "./HeaderPresentation";

const Header: React.FC = () => {
  const sections = Object.values(useContext(RefsContext));
  const mainHeader = useRef<HTMLHeadElement | null>(null);
  const links = useRef<NodeListOf<HTMLLinkElement> | null>(null);

  const onScroll = function () {
    scrollHeader();
    changeLinkState();
  };

  const scrollHeader = () => {
    const mainSection = sections[0];
    const sticky = mainSection.current.clientHeight / 2;
    if (mainHeader.current) {
      if (
        window.pageYOffset > sticky + mainHeader.current.clientHeight &&
        !mainHeader.current.classList.contains("sticky")
      ) {
        mainHeader.current.classList.add("sticky");
      } else if (
        window.pageYOffset <= 0 &&
        mainHeader.current.classList.contains("sticky")
      ) {
        mainHeader.current.classList.remove("sticky");
      }
    }
  };

  const changeLinkState = () => {
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
    wait: 0.1,
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

  return <HeaderPresentation headerRef={mainHeader} />;
};

export default Header;
