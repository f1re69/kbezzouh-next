import React from "react";
import { StaticImageData } from "next/image";
import { FixedSizeList as List } from "react-window";
import { CertificationSectionStyled } from "./CertificationSectionStyled";
import { ContentDiv } from "./CertificationSectionElements";
import Card from "../Card/Card";

interface CertificationSectionPresentationProps {
  certifications: {
    id: string;
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
      <ContentDiv>
        {certifications.map((certification) => (
          <Card certification={certification} key={certification.id} />
        ))}
        <a
          className="button"
          href="./CV_Khelil_Bezzouh.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Télécharger mon CV
        </a>
      </ContentDiv>
    </CertificationSectionStyled>
  );
};

export default CertificationSectionPresentation;
