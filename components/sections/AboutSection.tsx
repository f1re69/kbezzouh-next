import React, { useContext } from "react";
import RefsContext from "../context/RefsContext";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const { aboutSectionRef } = useContext(RefsContext);

  return (
    <section id="about" ref={aboutSectionRef}>
      <div className="anchor">
        <a className="anchor-about">&nbsp;</a>
        <h2 className="top-title">A propos de moi</h2>
      </div>
      <div className="content">
        <h3>Qui suis-je ?</h3>
        <img
          src="img/profile.jpg"
          alt="Profile image"
          className="profile-image"
        />
        <p>
          Je suis développeur Web et je vis à Lyon. Mon métier est une source de
          plaisir, j'aime aussi faire du sport, de la méditation et je suis
          aussi passionné par les mangas et les jeux-vidéos.
        </p>
      </div>
      <div className="container skills">
        <h3>Mes compétences</h3>
        <div className="main-slider">
          <div className="customer-logos slider">
            <div className="slide">
              <Image
                src="/logos/skills/angular.png"
                alt="Angular"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/reactjs.png"
                alt="React.js"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/javascript.png"
                alt="JavaScript"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/typescript.png"
                alt="TypeScript"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/nodejs.png"
                alt="Node.js"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/java.png"
                alt="Java"
                width={70}
                height={70}
              />
            </div>
            <div className="slide">
              <Image
                src="/logos/skills/sass.png"
                alt="Sass"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
