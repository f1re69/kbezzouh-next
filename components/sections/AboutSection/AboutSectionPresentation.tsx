import React from "react";
import Image, { StaticImageData } from "next/image";

interface AboutSectionPresentationProps {
  profileImage: StaticImageData;
  presentationText: string;
  skills: {
    src: string;
    alt: string;
  }[];
  aboutSectionRef: React.RefObject<HTMLElement>;
}

const AboutSectionPresentation: React.FC<AboutSectionPresentationProps> = ({
  profileImage,
  presentationText,
  aboutSectionRef,
  skills,
}) => {
  const imagesTwite = [...skills, ...skills];

  return (
    <section id="about" ref={aboutSectionRef}>
      <div className="anchor">
        <a id="anchor-about">&nbsp;</a>
        <h2 className="top-title">A propos de moi</h2>
      </div>
      <div className="content">
        <h3>Qui suis-je ?</h3>
        <Image
          src={profileImage}
          alt="Profile image"
          className="profile-image"
          width={128}
          height={128}
        />
        <p>{presentationText}</p>
      </div>
      <div className="container skills">
        <h3>Mes compétences</h3>
        <div className="main-slider">
          <div className="customer-logos slider">
            {imagesTwite.map((skill, index) => (
              <div className="slide" key={index}>
                <Image src={skill.src} alt={skill.alt} width={70} height={70} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionPresentation;
