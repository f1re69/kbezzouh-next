import React, { useContext, useEffect, useRef } from "react";
import Throttle from "../../javascript/Throttle";
import RefsContext from "../../context/RefsContext";

const useOnScroll = () => {
  const sections = Object.values(useContext(RefsContext));
    const links = useRef<NodeListOf<HTMLLinkElement> | null>(null);
    
     const onScroll = function (): void {
       scrollHeader();
       changeLinkState();
    };
    
    
};
