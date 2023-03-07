import React, { useContext } from "react";
import RefsContext from "../../context/RefsContext";
import AboutSectionPresentation from "./AboutSectionPresentation";
import { images } from "./images";
import profilePic from "../../../public/profilepic.jpg";

const AboutSectionContainer: React.FC = () => {
  const { aboutSectionRef } = useContext(RefsContext);

  return (
    <AboutSectionPresentation
      profileImage={profilePic}
      presentationText="Je suis développeur Web et je vis à Lyon. Mon métier est une source de plaisir, j'aime aussi faire du sport, de la méditation et je suis aussi passionné par les mangas et les jeux-vidéos."
      skills={images}
      aboutSectionRef={aboutSectionRef}
    />
  );
};

export default AboutSectionContainer;
