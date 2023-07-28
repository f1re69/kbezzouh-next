import React from "react";
import Image, { StaticImageData } from "next/image";
import { AboutSectionStyled } from "./AboutSectionStyled";
import SliderSkill from "../SliderSkills/SliderSkill";

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
    <AboutSectionStyled ref={aboutSectionRef}>
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
      <SliderSkill imagesTwite={imagesTwite} />
    </AboutSectionStyled>
  );
};

export default AboutSectionPresentation;
