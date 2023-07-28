import React from "react";
import { StaticImageData } from "next/image";
import { CertificationSectionStyled } from "./CertificationSectionStyled";
import Card from "../Card/Card";

interface CertificationSectionPresentationProps {
  certifications: {
    url: string;
    title: string;
    image: {
      file: StaticImageData;
      alt: string;
      width: number;
      height: number;
    };
    desc: string;
  }[];
  certificationsSectionRef: React.RefObject<HTMLElement>;
}

const CertificationSectionPresentation: React.FC<
  CertificationSectionPresentationProps
> = ({ certifications, certificationsSectionRef }) => {
  return (
    <CertificationSectionStyled ref={certificationsSectionRef}>
      <div className="anchor">
        <a id="anchor-degree">&nbsp;</a>
        <h2 className="top-title">Mes diplômes et certifications</h2>
      </div>
      <div className="content">
        {certifications.map((certification, index) => (
          <Card certification={certification} key={index} />
        ))}
        <a
          className="button"
          href="./CV_Khelil_Bezzouh.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Télécharger mon CV
        </a>
      </div>
    </CertificationSectionStyled>
  );
};

export default CertificationSectionPresentation;
