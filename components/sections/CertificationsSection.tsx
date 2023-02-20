import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";

const CertificationSection: React.FC = () => {
  const { certificationsSectionRef } = useContext(RefsContext);

  return (
    <section id="degree" ref={certificationsSectionRef}>
      <div className="anchor">
        <a className="anchor-degree">&nbsp;</a>
        <h2 className="top-title">Mes diplômes et certifications</h2>
      </div>
      <div className="content">
        <div className="card clearfix">
          <a
            href="https://www.ecole-isitech.com/nos-formations/formations-informatique/rpi/"
            target="_blank"
          >
            <h3>
              Titre bac+3 "R.P.I" (Responsable de Projets Informatique) réalisé
              au sein de l'école Isitech.
            </h3>
            <img src="./img/logo/isitech.png" alt="Logo Isitech" />
          </a>
          <p>
            Formation sur trois ans réalisée au sein de l'école Isitech en
            alternance basée sur la gestion de projets informatiques avec une
            spécialisation en développement web et logiciel.
          </p>
        </div>
        <div className="card clearfix">
          <a
            href="https://www.udemy.com/certificate/UC-2048e363-5ade-4e80-b5fc-d606cbf8acc3/"
            target="_blank"
          >
            <h3>Certification Udemy "Modern React with Redux[2020]"</h3>
            <img src="./img/logo/udemy.png" alt="Logo Udemy" />
          </a>
          <p>
            Cours en ligne d'une durée de 50 heures sur React, Redux, Context,
            Hook... Avec réalisation de projets à faire.
          </p>
        </div>
        <a className="button" href="./CV_Khelil_Bezzouh.pdf" target="_blank">
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
};

export default CertificationSection;
