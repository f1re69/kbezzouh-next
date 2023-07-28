import React, { useContext } from "react";
import RefsContext from "../../context/GlobalContext";
import MainSectionPresentation from "./MainSectionPresentation";

const MainSection: React.FC = () => {
  const { mainSectionRef } = useContext(RefsContext);

  return <MainSectionPresentation mainSectionRef={mainSectionRef} />;
};

export default MainSection;
