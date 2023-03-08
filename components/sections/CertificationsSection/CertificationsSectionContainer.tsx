import React, { useContext } from "react";
import RefsContext from "../../context/RefsContext";
import CertificationSectionPresentation from "./CertificationSectionPresentation";
import { certifications } from "./certification";

const CertificationSection: React.FC = () => {
  const { certificationsSectionRef } = useContext(RefsContext);

  return (
    <CertificationSectionPresentation
      certifications={certifications}
      certificationsSectionRef={certificationsSectionRef}
    />
  );
};

export default CertificationSection;
