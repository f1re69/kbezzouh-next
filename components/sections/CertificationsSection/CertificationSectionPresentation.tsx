import React from "react";
import Image, { StaticImageData } from "next/image";

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
    <section id="certifications" ref={certificationsSectionRef}>
      <div className="anchor">
        <a id="anchor-degree">&nbsp;</a>
        <h2 className="top-title">Mes diplômes et certifications</h2>
      </div>
      <div className="content">
        {certifications.map((certification, index) => (
          <div key={index} className="card clearfix">
            <a href={certification.url} target="_blank" rel="noreferrer">
              <h3>{certification.title}</h3>
              <Image
                src={certification.image.file}
                alt={certification.image.alt}
                width={certification.image.width}
                height={certification.image.height}
              />
            </a>
            <p>{certification.desc}</p>
          </div>
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
    </section>
  );
};

export default CertificationSectionPresentation;
