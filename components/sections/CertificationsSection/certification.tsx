import isitechLogo from "../../../public/logos/degrees/isitech.png";
import udemyLogo from "../../../public/logos/degrees/udemy.png";

export const certifications = [
  {
    url: "https://www.ecole-isitech.com/nos-formations/formations-informatique/rpi/",
    title: "Mes diplômes et certifications",
    image: {
      file: isitechLogo,
      alt: "Isitech",
      width: 144,
      height: 144,
    },
    desc: "Formation sur trois ans réalisée au sein de l'école Isitech enalternance basée sur la gestion de projets informatiques avec une spécialisation en développement web et logiciel.",
  },
  {
    url: "https://www.udemy.com/certificate/UC-2048e363-5ade-4e80-b5fc-d606cbf8acc3/",
    title: 'Certification Udemy "Modern React with Redux[2020]"',
    image: {
      file: udemyLogo,
      alt: "udemy",
      width: 144,
      height: 144,
    },
    desc: "Cours en ligne d'une durée de 50 heures sur React, Redux, Context, Hook... Avec réalisation de projets à faire.",
  },
];
